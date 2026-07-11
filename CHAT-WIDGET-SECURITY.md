# Taylor chat widget — security boundary

This document is the actual point of `chat-worker/`. The widget sits on a
**public page** behind only the site's casual, non-real password gate (see
the main `README.md`'s "Security model" section — that gate is documented
as demo-grade, not real access control). So this backend is designed to be
safe to expose to anyone who wanders past that gate, or bypasses it
entirely.

## What it must never do

Ruled out explicitly, not just "discouraged":

- **No bookings, spends, or account actions of any kind.** Nothing that
  touches Delta, DoorDash, calendars, salon/barber booking, or any
  real-world action.
- **No personal information about Travis** — no family, health, the active
  lawsuit, personal schedule, anything outside the storage business.
- **No access to the CEO Knowledgebase** (board-level briefs, SLP/MSM
  financials) — that stays 1:1-only, not exposed here even read-only.
- **No live connection to any private system** — no Dropbox API, no
  iMessage/listener infrastructure, no home-Mac file access, no database
  credentials beyond reading already-public data.

## How that's enforced — structurally, not just prompted

An LLM's own judgment is not treated as the safety mechanism here. The
system prompt does tell Taylor about these boundaries (see
`buildSystemPrompt` in `chat-worker/src/worker.js`), but the real guarantee
is that **the code gives it nothing to misuse even if it ignored every
instruction**:

1. **No tool access, at all.** The Claude API request the worker sends
   never includes a `tools` field. There is no booking tool, no calendar
   tool, no file-access tool, no database tool wired up — nothing for the
   model to invoke, regardless of what it's asked or how the request is
   phrased. This is the main guardrail: it's not that the model is told not
   to book a flight, it's that it has no way to book anything.
2. **A hardcoded, closed list of readable files.** `PUBLIC_CONTEXT_FILES` in
   `worker.js` is the complete list of everything this worker can ever read:
   `portfolio-data.json`, `facility-coordinates.json`,
   `facility-market-overlays.json`, `about-taylor.md`. No user input is ever
   turned into a URL, file path, or query — there is no code path that could
   be steered into fetching anything else.
3. **No other credentials exist to be misused.** The only secret in this
   worker is the Anthropic API key, which grants exactly one capability:
   call the Messages API. There's no database connection string, no Dropbox
   token, no home-network access, nothing else to leak or invoke.
4. **Bounded input/output.** Message and history length are capped in code
   (`validateBody`) before anything reaches the model, and the model's
   response is capped at 600 tokens — limits cost and blast radius of any
   single request regardless of content.

## What it can know

All already public on the site, or about to be:

- `portfolio-data.json` — occupancy, revenue, leads, ROAS, LTV, campaign
  efficiency at portfolio/brand/facility level.
- `facility-coordinates.json` — the 29 facility locations/addresses.
- `facility-market-overlays.json` — the 4-market TractIQ data (saturation,
  demographics, population, income).
- `about-taylor.md` — a short static document: company structure (National
  Self Storage / A Family Storage / StoreLocal Reno, 29 facilities across 3
  brands, Titan Self Storage Center as the GRN1 location, the annual THE
  Show Atlanta MSM conference), what the site is, and a brief, appropriate
  description of Taylor as an AI operating assistant Travis built.

## If this ever needs to grow

Any future change that would let this worker fetch a new data source, call
a new API, or gain any tool/function-calling capability should be treated
as a new instance of this same review — re-check it against the four "must
never do" bullets above before shipping it, not just against whether it's
technically convenient.
