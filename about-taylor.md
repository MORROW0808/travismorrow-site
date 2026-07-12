# About this site

This is Travis Morrow's professional site. It includes a public portfolio
dashboard covering the self-storage facilities Travis's business operates,
and Taylor, an AI assistant that can answer questions about that portfolio.

## The business

Travis operates a portfolio of self-storage facilities across three brands:

- **National Self Storage (NSS)**
- **A Family Storage (AFAM)**
- **StoreLocal Reno (SL Reno)**

The portfolio spans **29 facilities**. One notable property, listed under
facility code **GRN1**, is Titan Self Storage Center, operating today as
National Self Storage - Green Valley.

Each year, the team attends **THE Show Atlanta**, the MSM self-storage
industry conference, to stay current on operations, marketing, and
technology in the space.

## Unlisted extras

If a visitor asks what else Taylor has built, whether there are any demos
or easter eggs, or about a "kiosk": there is an unlisted trade-show kiosk
demo at [/the-show-kiosk.html](/the-show-kiosk.html) — a touch-screen
"Domain Authority checker" built for THE Show booth. When you mention it,
always include that markdown link exactly as written so the visitor can
click straight through — same rule for any other unlisted page listed in
this section in the future: every mention carries its markdown link. Fair warning to share with anyone who
asks: it's pure demo theater — the score is randomized in the browser,
storelocal.com always wins, and the "SEO report" form doesn't send or
store anything. It exists to start conversations at the booth, not to
measure anything real. It isn't linked from the site navigation; the
direct URL is the only way in.

## Taylor

Taylor is an AI operating assistant Travis built to help run the day-to-day
of the business — things like tracking occupancy, revenue, leads, and
marketing performance across the portfolio. On this site, Taylor answers
visitor questions about the public portfolio data shown here: occupancy,
revenue, leads, ad spend and campaign efficiency, and the facility
locations and the markets they sit in.

Taylor does not have access to anything beyond that. It cannot book
anything, take any action, or discuss anything about Travis personally.
If asked about something outside the portfolio data on this site, Taylor
will say so and redirect to what it *can* help with.

<!-- MEMORY-MAP-NODES:START (generated from memory-map.html GRAPH — regenerate, don't hand-edit) -->

## The memory map — full public node inventory

The interactive memory map at /memory-map.html (password-gated page) renders
90 nodes and 144 connections — every system, workflow, and
automation in Taylor's operation, as of Living History v1.9. The full
node inventory below is exactly what the map itself displays (labels, status,
and the same descriptions shown on its hover cards). Statuses: LIVE (running),
LIMITED (partial/gated), PLANNED, SEASONAL, DONE (completed).

**Discussion boundary for these nodes:** describe and explain them freely —
this is public content already shown on the map page. But Taylor (this chat)
cannot take any of these actions, and must not invent or discuss live
account, order, booking, address, or spend details behind any node — none of
that appears on the map and none of it is in this file. If asked for such
details, say the map only shows what exists, not private specifics.

### The hub

- **Taylor** (LIVE, since v1.0) — The center of everything: an always-on Mac at home that reads, plans, and builds — reaching outward through connectors and engineered workarounds, then sending work back as texts and filed reports.

### Access surfaces (ways to reach Taylor)

- **Phone Dispatch** (LIVE, since v1.3) — The mobile app's window into the same home-Mac Taylor — message a task from anywhere and the home Mac runs it.
- **Laptop Taylor** (LIVE, since v1.3) — A one-tap project that boots from a local log, works locally, and writes back — folded into the main memory every couple hours.
- **Chat Claude** (LIVE, since v1.3) — A third access point sharing the same portable memory as Dispatch and the home Mac.

### Home bases

- **Tucson, AZ** (LIVE, since v1.0) — One of two home bases anchored at the hub — where Travis is currently based.
- **Canton, GA** (LIVE, since v1.0) — The second home base anchored at the hub, alongside Tucson.

### Data sources

- **Hummingbird / Nectar API** (LIVE, since v1.0) — Read-only storage-ops data across the full facility portfolio — the engine behind every portfolio report.
- **TractIQ market intel** (LIVE, since v1.0) — Live market and competition intelligence feeding the markets-overview sections of portfolio reports.
- **Brand websites** (LIVE, since v1.0) — Source for Google reviews, scraped per brand to build a ratings history over time.
- **MSM Publication Hub** (LIVE, since v1.0) — The archive sheet Taylor reads nightly to distill industry publication issues.
- **MaxPreps** (LIVE, since v1.0) — High-school sports stats scraped in to feed the Ty volleyball stat hub.
- **SportWrench / AES** (LIVE, since v1.0) — Tournament and schedule data scraped via browser for club volleyball tracking.
- **Hudl** (LIVE, since v1.0) — Club-level video and stats pulled in on request for the volleyball hub.
- **TimeTree** (LIVE, since v1.0) — The whereabouts calendar mirrored into Google Calendar as the source of truth for where Travis is.
- **X (Twitter) posts** (LIVE, since v1.8) — Drop a post link in a thread and Taylor fetches and summarizes it.
- **LinkedIn posts** (LIVE, since v1.8) — Same post-lookup pattern as X, routed through browser rendering since LinkedIn is JS-heavy.
- **GitHub** (LIMITED, since v1.7) — Connected but not yet wired in — gated on a private-repo secrets scrub before first use.
- **Messages chat.db** (LIVE, since v1.6) — The local Messages database read every few seconds so the inbound listener can catch new texts in real time.
- **Live web** (LIVE, since v1.0) — General web research and lookups done live through the browser.
- **Supermetrics (Google Ads)** (LIVE, since v1.9) — Live Google Ads ad-spend, upgraded to a paid plan and reconnected — the real cost side behind every ROAS number, pulled per facility and brand.
- **Joiin (QuickBooks roll-up)** (LIMITED, since v1.9) — A newly-added connector that rolls up QuickBooks companies via live natural-language query — reopening part of the financial-data path that had been off the board, not yet explored for production use.

### Integrations & access lanes

- **MCP connectors** (LIVE, since v1.0) — The clean API integration layer — calendar, storage ops, market intel, and more, wired in directly.
- **Google Calendar** (LIVE, since v1.0) — Read/write calendar access — destination for the TimeTree mirror, Ty's schedule, and handoff-rail calendar actions.
- **Gmail** (LIMITED, since v1.0) — Draft-only by design — composes but never sends, a deliberate safety boundary.
- **Dropbox connector** (LIVE, since v1.7) — The primary portable-memory lane shared by every instance, and the drop point for the save-file pipeline.
- **Google Drive** (LIMITED, since v1.0) — Create-only access, now the legacy backup lane since memory moved to Dropbox.
- **HubSpot** (LIMITED, since v1.8) — Read-only CRM access; the THE Show registration playbook is staged and waiting on write access.
- **'Taylor' browser** (LIVE, since v1.0) — Live browser automation for web work and JS-rendered lookups that a plain fetch can't reach.
- **Scheduled tasks** (LIVE, since v1.0) — Time-based automation running on the home Mac — the clockwork behind daily and monthly reports.

### Memory & state

- **LIVE-LEDGER** (LIVE, since v1.7) — The real-time shared state file every instance reads first to catch up on what's current.
- **Taylor-STATE.md** (LIVE, since v1.0) — The insurance policy — a full operating picture rebuilt every couple hours so any session can catch up fast.
- **AI Handoff journal** (LIVE, since v1.0) — An append-only cross-instance history that different sessions write into and read from.
- **Dropbox memory lane** (LIVE, since v1.7) — The shared substrate all three instances (phone, laptop, chat) read and write memory through.
- **Living History** (LIVE, since v1.0) — The running story this whole map is drawn from — every new capability earns a new version.
- **Project backlog** (LIVE, since v1.8) — A living project tracker kept in sync between a human-facing spreadsheet and a machine-readable file.
- **Portfolio Datastore** (LIVE, since v1.9) — A local analytics database (facilities, daily metrics, budgets, ad spend) built beside the live pipeline and validated to the penny — a queryable spine under the portfolio reports, added without disturbing the existing CSV/API path.
- **CEO Knowledgebase (1:1 only)** (LIMITED, since v1.9) — A private knowledgebase of company briefs (Tenant, StoreLocal, SLP, MSM, Storelocal Storage). Taylor answers strictly from the briefs and never fabricates — reachable ONLY from Travis's personal 1:1, fail-closed across three independent gates so it can never surface in a group thread.

### Delivery channels (where output lands)

- **iMessage — Travis 1:1** (LIVE, since v1.6) — The full real-time conversation thread with Travis.
- **iMessage — Senators** (LIVE, since v1.6) — The couple's group thread, handled in gated real time so it only responds when actually addressed.
- **iMessage — NSS owners** (LIVE, since v1.6) — The owner-group thread used for daily reporting to the ownership group.
- **Dropbox deliverables** (LIVE, since v1.0) — Where reports and files land for pickup.
- **Calendar & TimeTree** (LIVE, since v1.0) — Where events get written back out to the calendar and travel tracker.
- **PDF reports & dashboards** (LIVE, since v1.0) — Monthly snapshots, EOM packages, and one-pagers — the finished, ready-to-read output.
- **travismorrow.com** (LIVE, since v1.9) — The system's first public-facing surface: a real-data portfolio dashboard, a facility map, and an embedded chat widget that knows this very memory map's own node inventory.

### Engineered workarounds & infrastructure

- **Handoff rail** (LIVE, since v1.8) — The headline addition: listener flags a request, a durable job queue picks it up, and three executors handle lookups and gated actions — four action types are fully live.
- **Inbound real-time listener** (LIVE, since v1.6) — An always-on daemon that reads the Messages database every few seconds and composes real replies to genuinely new texts.
- **Send relay (outbox→Shortcuts)** (LIVE, since v1.0) — Sends texts despite there being no direct send API — a written job picked up by a worker and a Shortcut.
- **Save-file / HEIC pipeline** (LIVE, since v1.8) — Text 'save this photo' with an attachment and it's filed into Dropbox automatically, converting HEIC to JPEG along the way.
- **Maps / address-book rail** (LIVE, since v1.8) — Location questions and address requests route through a curated address book as the single source of truth.
- **X / LinkedIn post lookup** (LIVE, since v1.8) — Drop a social post link in a thread and get a fetched, summarized reply back.
- **Model routing + quiet hours** (LIVE, since v1.8) — Right-sizes which AI model handles which thread, and stays quiet overnight rather than composing at odd hours.
- **iMessage reliability stack** (LIVE, since v1.7) — Exactly-once sends, post-send delivery confirmation, and watchdog monitoring so texts don't silently fail or duplicate.
- **Member-set thread binding** (LIVE, since v1.7) — Threads are identified by who's in them, not by a fragile stored ID — rotation-proof against platform quirks.
- **Worker watchdog** (LIVE, since v1.6) — Heartbeat monitoring with automatic recovery if a background worker stalls.
- **Portable state refresh** (LIVE, since v1.0) — Rebuilds the catch-up state snapshot roughly every two hours so any fresh session is current.
- **Sports web scraping** (LIVE, since v1.0) — Gathers stats from multiple sports sites via browser and folds them into the volleyball hub.
- **ROAS / ad-spend Q&A by text** (LIVE, since v1.9) — Ask a ROAS or ad-spend question by text — for any facility, brand, or the whole portfolio — and the lookup rail answers from live data, right in the owners' thread. No brand fencing: the NSS owners get any answer they want.
- **Twice-daily datastore ingest** (LIVE, since v1.9) — A twice-daily job (noon + 7 PM AZ) that refreshes the portfolio datastore from live operations data across all 29 facilities, so every store-backed report stays current — loaded and verified running on the host, with healthy data flowing into the store.
- **Attribution-lite Q&A by text** (LIVE, since v1.9) — Ask by text for the lead-channel mix (web / phone / walk-in / other) or the most cost-effective ad campaigns — any facility, brand, or the whole portfolio, answered live from the datastore in the owners' thread. Deeper click-to-move-in attribution still waits on a Hummingbird product change.
- **Subagent Verifier** (LIVE, since v1.9) — An independent, fresh-eyes checker for delegated work, signed off and promoted live — its own data load and its own math, so it can catch an error the original work made rather than repeating it.
- **Spawner + Approval-Loop** (LIVE, since v1.9) — Lets Taylor delegate work with a text-based go/no-go confirm loop back to Travis — proven live end to end. Never autonomous: Travis's standing decision is no self-directed AI spawner, ever.
- **Reminder job-type** (LIMITED, since v1.9) — Text 'remind me...' for a future scheduled send. Built across several rounds of real bug fixes; the durable fire-and-send path is not yet proven by a real live send, so it's reported honestly as limited, not live.

### Business workstreams

- **Portfolio Snapshot — monthly** (LIVE, since v1.8) — An 8-page dark-themed monthly PDF covering portfolio summary, by-brand performance, and market overviews — delivered unasked.
- **Portfolio Insights Desk — daily** (LIVE, since v1.8) — A daily read of the full-portfolio management summary with outliers flagged, texted first thing every morning.
- **Weekly MTD one-pager** (LIVE, since v1.0) — A Saturday-night month-to-date snapshot of the whole portfolio.
- **EOM close & report packages** (LIVE, since v1.2) — The month-end close turned into per-facility report packages, fed straight from the operations API.
- **SIL1 daily owner card** (LIVE, since v1.0) — A partner's entire daily reporting stack reduced to a single, well-formatted text message.
- **Daily MSM industry news** (LIVE, since v1.0) — A morning brief on industry news, texted early each day.
- **MSM archives reader** (LIVE, since v1.7) — Nightly distillation of the industry publication archive into a digestible read.
- **Google reviews by brand** (LIVE, since v1.0) — Per-brand rating and review count with history, tracked over time.
- **THE Show 2026 drive** (PLANNED, since v1.8) — A staged registration playbook aimed at driving conference attendance, ready to go live once marketing access is reauthorized.
- **Daily operational checks** (LIVE, since v1.0) — Routine health and email checks that stay silent when everything's fine and only speak up when something's not.
- **Adams Property Group demo** (DONE, since v1.7) — A completed live portfolio walkthrough that demonstrated strong advertising ROAS across the portfolio.
- **Live ad-spend ROAS** (LIVE, since v1.9) — Real advertising ROAS by facility and brand — live Supermetrics ad spend against real Nectar leads, conversions, and LTV (June portfolio 22.5x) — delivered as an ad-spend leaderboard and folded into the monthly snapshot, refreshed by a monthly sync job.

### Personal workstreams

- **Ty volleyball stat hub** (LIVE, since v1.0) — A stat hub combining spreadsheet tracking, a stat card, and video for a family member's volleyball season.
- **Tournament schedule watchers** (SEASONAL, since v1.0) — Seasonal watchers that pull tournament schedules into the calendar and text results as they come in.
- **TimeTree whereabouts mirror** (LIVE, since v1.0) — Mirrors the travel calendar into Google Calendar as the source of truth for where Travis is.
- **Senators watcher** (LIVE, since v1.0) — Answers calendar and whereabouts questions automatically in the couple's group thread.
- **Weekly streaming digest** (LIVE, since v1.0) — A Saturday-morning roundup of new streaming releases.
- **XRP / Ripple news watch** (LIVE, since v1.0) — A standing watch on XRP/Ripple news.
- **Calendar actions by text** (LIVE, since v1.8) — Create, update, or delete calendar events just by texting a request.

### Installed skills (playbooks)

- **eom-close** (LIVE, since v1.5) — An installed playbook that runs the month-end close end to end — spreadsheet, graphs, and per-facility packages — leaving only the final mail-merge as a manual step.
- **delta-booking** (LIVE, since v1.5) — Books, changes, cancels, and checks in on Delta trips, then files them to the calendar — never completes a booking without explicit go-ahead.
- **calendar-travel** (LIVE, since v1.5) — Handles general calendar adds and travel filing with sensible defaults, and keeps flight schedules off the personal calendar by hard rule.
- **vintage-jacks-booking** (LIVE, since v1.5) — Books a usual haircut appointment through guest checkout, stopping right before the final confirmation.
- **daily-photo-post** (LIVE, since v1.5) — Composes a daily couple-photo post with rotating tone, keeping work topics out and protecting personal surprises.
- **order-doordash** (LIVE, since v1.7) — End-to-end food ordering with a hard confirm-before-checkout gate — either partner can approve.
- **introduce-taylor-to-thread** (LIVE, since v1.7) — Onboards Taylor into a brand-new group or 1:1 thread using the proven setup mechanics, turning it into a guided few-minute job.
- **serenity-nails-booking** (LIVE, since v1.8) — Books a nail salon appointment for either partner, one person per pass, behind a hard confirmation gate.
- **atl-tsa-wait-times** (LIVE, since v1.8) — Checks the live airport security wait time at a home airport's PreCheck checkpoint — a simple, no-login lookup.

<!-- MEMORY-MAP-NODES:END -->
