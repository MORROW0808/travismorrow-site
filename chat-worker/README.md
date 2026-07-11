# Taylor chat backend

A small Cloudflare Worker that powers the "Taylor" chat widget on
travismorrow.com. It answers visitor questions about the public storage
portfolio using the Claude Messages API, server-side.

**Read `../CHAT-WIDGET-SECURITY.md` first** — that file is the actual point
of this build: what this backend can and cannot do, and how that's enforced
in code, not just prompted.

---

## Request / response contract

`POST /chat`

```json
{
  "message": "What's occupancy at the Green Valley location?",
  "history": [
    { "role": "user", "content": "Hi, what brands are in the portfolio?" },
    { "role": "assistant", "content": "The portfolio spans three brands: ..." }
  ]
}
```

- `message` — required, non-empty string, max 1000 characters.
- `history` — optional array of `{ role: "user" | "assistant", content: string }`,
  max 12 entries, each entry's `content` max 1000 characters. Pass the prior
  turns of the conversation (not including the current `message`) so Taylor
  has context; omit or send `[]` for the first message.

Success — `200`:

```json
{ "reply": "Green Valley (GRN1) is running about 86% occupied by square footage right now..." }
```

Error — `400` / `403` / `429` / `502`:

```json
{ "error": "human-readable reason" }
```

- `400` — malformed JSON, missing/oversized `message`, or malformed `history`.
- `403` — request's `Origin` header isn't on the allowlist.
- `429` — rate limit exceeded (see below).
- `502` — upstream failure (context fetch or Claude API failed).

CORS is restricted to `https://travismorrow.com` and
`https://taylordemoreaux.com` (with and without `www`). The widget must call
this endpoint from one of those origins.

---

## Rate limiting

**10 requests per IP per hour**, enforced with a Cloudflare KV counter
(fixed 1-hour buckets, key = `rl:<ip>:<hour bucket>`, TTL = 3600s so old
buckets self-expire — no cleanup job needed).

Why 10/hour: this is a public, unauthenticated widget behind only a casual
password gate — assume it will get bot and scraper traffic, not just real
visitors. 10/hour is comfortably enough for a real conversation (a visitor
asking several follow-up questions) while keeping the worst case (someone
scripting requests) cheap: at most 240 Claude API calls/day per IP, and the
free KV tier's 1,000 writes/day cap acts as a second, portfolio-wide backstop
regardless of how many distinct IPs show up. Raise the number later if real
visitors are hitting it (Travis, not Taylor, should make that call).

---

## What this backend can access — and can't

Enforced in code (`src/worker.js`), not just described here:

- **Can read:** `portfolio-data.json`, `facility-coordinates.json`,
  `facility-market-overlays.json`, and `about-taylor.md` — all fetched from
  `SITE_BASE_URL` (the live site) at request time, via a hardcoded list
  (`PUBLIC_CONTEXT_FILES`). Nothing else is ever fetched; there is no code
  path that turns user input into a URL or file path.
- **Cannot call any tool.** The Claude API request never includes a `tools`
  field. There is nothing wired up for the model to invoke — no booking
  system, no calendar, no database, no Dropbox, no iMessage — so this can't
  be prompted around.
- **No database, no other credentials.** The only secret is the Anthropic
  API key, which only grants "call the Messages API."

---

## Deploying (needs Travis's own accounts — not done here)

This is built and tested up to the point of needing real credentials. Two
things are required that this sandboxed session doesn't have:

### 1. An Anthropic API key

This is **separate from Travis's Claude subscription** — API access is
billed independently, per token.

1. Go to https://console.anthropic.com and sign in (or create an account).
2. Add a payment method (Settings → Billing) — API calls are pay-as-you-go.
3. Settings → API Keys → Create Key. Name it something like
   `taylor-chat-widget`. Copy the key (starts with `sk-ant-`) — it's only
   shown once.

### 2. A Cloudflare account (Workers + KV, both free tier)

1. Go to https://dash.cloudflare.com/sign-up and create a free account.
2. `npm install` in this `chat-worker/` folder (installs `wrangler`, the
   Cloudflare CLI).
3. `npx wrangler login` — opens a browser to authorize the CLI.
4. Create the rate-limit KV namespace:
   ```
   npx wrangler kv namespace create RATE_LIMIT_KV
   ```
   This prints an `id`. Paste it into `wrangler.toml` under
   `[[kv_namespaces]]`, replacing `REPLACE_WITH_KV_NAMESPACE_ID`.
5. Set the API key as a secret (never goes in a file):
   ```
   npx wrangler secret put ANTHROPIC_API_KEY
   ```
   Paste the `sk-ant-...` key when prompted.
6. Deploy:
   ```
   npx wrangler deploy
   ```
   This prints the live URL, something like
   `https://taylor-chat.<your-subdomain>.workers.dev/chat`. That's the URL
   the chat widget's fetch call should point at.

### Optional: a custom domain path instead of `workers.dev`

To serve this at `travismorrow.com/api/chat` instead of a `workers.dev`
subdomain, `travismorrow.com`'s DNS would need to be on Cloudflare (it's
currently on GitHub Pages via the `CNAME` file in the site repo, so this
isn't the case today). Not required — `workers.dev` + the CORS allowlist
above works fine as-is and needs no DNS changes.

### After deploying

Give the deployed `/chat` URL to whoever's building the widget on the
`chat-widget` branch (or wire it in yourself if that work hasn't started) —
that's the only integration point.

---

## Testing without live credentials

`npm test` runs `test/run-tests.mjs`, which mocks both `fetch` targets
(the 4 context files and the Anthropic API call) and a KV namespace, then
exercises the real worker code — no network, no real keys needed. See that
file for what's covered.
