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
120 nodes and 210 connections — every system, workflow, and
automation in Taylor's operation, as of Living History v1.20. The full
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
- **VisionClaude (Ray-Ban voice)** (LIMITED, since v1.13) — A voice surface on Meta Ray-Ban glasses: Travis can talk to Taylor hands-free, and the voice round-trip works when it works. The honest limit, measured rather than guessed: roughly three attempts in five hang, and nothing yet restarts it automatically. The surface is real and usable; the reliability is not there.
- **Grok (GBT) — fourth surface** (LIVE, since v1.20) — Grok now writes into the shared Dropbox memory lane as a fourth synced surface alongside Dispatch, Laptop, and Chat — confirmed live 8/30, with a surface-attribution and date-prefix defect fixed by class across 1,957 fragments (1,472 corrected, 0 regressions).

### Home bases

- **Tucson, AZ** (LIVE, since v1.0) — One of two home bases anchored at the hub — where Travis is currently based.
- **Canton, GA** (LIVE, since v1.0) — The second home base anchored at the hub, alongside Tucson.

### Data sources

- **Hummingbird / Nectar API** (LIVE, since v1.15) — Read-only storage-ops API across the portfolio; engine for the reporting stack. An August pull confirmed rent-change history is retained back to April 2021.
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
- **Joiin (QuickBooks roll-up)** (LIVE, since v1.9) — A connector that rolls up QuickBooks companies via live natural-language query. Fully wired now: all 28 tracked facilities pulled to full GL-line-item detail and powering live financial Q&A in the NSS owners' thread.

### Integrations & access lanes

- **MCP connectors** (LIVE, since v1.0) — The clean API integration layer — calendar, storage ops, market intel, and more, wired in directly.
- **Google Calendar** (LIVE, since v1.0) — Read/write calendar access — destination for the TimeTree mirror, Ty's schedule, and handoff-rail calendar actions.
- **Gmail** (LIMITED, since v1.0) — Draft-only by design — composes but never sends, a deliberate safety boundary.
- **Dropbox connector** (LIVE, since v1.7) — The primary portable-memory lane shared by every instance, and the drop point for the save-file pipeline.
- **Google Drive** (LIMITED, since v1.0) — Create-only access, now the legacy backup lane since memory moved to Dropbox.
- **HubSpot** (LIMITED, since v1.8) — Read-only CRM access; the THE Show registration playbook is staged and waiting on write access.
- **'Taylor' browser** (LIVE, since v1.0) — Live browser automation for web work and JS-rendered lookups that a plain fetch can't reach.
- **Scheduled tasks** (LIVE, since v1.0) — Time-based automation running on the home Mac — the clockwork behind daily and monthly reports.
- **On-demand thread reader** (PENDING, since v1.12) — A read-only tool that lets any session pull recent messages from a configured group thread on request, closing a blind spot where some threads could only be answered from a stale cache. Built and staged; awaiting confirmation it's loaded and has produced one real read before it's recorded live.

### Memory & state

- **LIVE-LEDGER** (LIVE, since v1.15) — The rolling DON'T REDO / OPEN block plus history that lets any session catch up fast. An August fix removed status narratives that had been landing above its trim marker, cutting the derived compose prompt by roughly two-thirds.
- **Taylor-STATE.md** (LIVE, since v1.0) — The insurance policy — a full operating picture rebuilt every couple hours so any session can catch up fast.
- **AI Handoff journal** (LIVE, since v1.0) — An append-only cross-instance history that different sessions write into and read from.
- **Dropbox memory lane** (LIVE, since v1.7) — The shared substrate all three instances (phone, laptop, chat) read and write memory through.
- **Living History** (LIVE, since v1.0) — The running story this whole map is drawn from — every new capability earns a new version.
- **Project backlog** (LIVE, since v1.8) — A living project tracker kept in sync between a human-facing spreadsheet and a machine-readable file.
- **Portfolio Datastore** (LIVE, since v1.9) — A local analytics database (facilities, daily metrics, budgets, ad spend) built beside the live pipeline and validated to the penny — a queryable spine under the portfolio reports, added without disturbing the existing CSV/API path.
- **CEO Knowledgebase (1:1 only)** (LIMITED, since v1.9) — A private knowledgebase of company briefs (Tenant, StoreLocal, SLP, MSM, Storelocal Storage). Taylor answers strictly from the briefs and never fabricates — reachable ONLY from Travis's personal 1:1, fail-closed across three independent gates so it can never surface in a group thread.
- **Agent Memory Layer** (LIVE, since v1.19) — A second memory system alongside the Dropbox lane — one store per machine (Home, Laptop), each publishing and mirroring into a single browsable map so judgment and preferences carry across sessions and machines.

### Delivery channels (where output lands)

- **iMessage — Travis 1:1** (LIVE, since v1.19) — Taylor's always-on real-time line with Travis. The compose lane now runs on a held session turn rather than a one-shot subprocess, with an intake-drain and double-reply guard closing gaps where a message could sit unanswered or draw two replies. As of 8/27, a spoken/typed wake word ("TDM" or "Taylor") turns the 1:1 into a real back-and-forth conversation instead of one-shot backlog filing, staying open through an idle-based ~10-minute window and closing on "stand down."
- **iMessage — Senators** (LIVE, since v1.15) — Auto-answers calendar/whereabouts and Taylor-addressed messages in the Senators group, bound to the two-human member-set rather than a stored room ID. Both replying phases now deployed and verified by a real round trip.
- **iMessage — NSS owners** (LIVE, since v1.6) — The owner-group thread used for daily reporting to the ownership group.
- **Dropbox deliverables** (LIVE, since v1.0) — Where reports and files land for pickup.
- **Calendar & TimeTree** (LIVE, since v1.19) — Where events get written back out to the calendar and travel tracker. As of 8/29, TimeTree accepts real writes from the 1:1 — not just the outbound whereabouts mirror — so a request like "put these dates on TimeTree" creates the event.
- **PDF reports & dashboards** (LIVE, since v1.0) — Monthly snapshots, EOM packages, and one-pagers — the finished, ready-to-read output.
- **travismorrow.com** (LIVE, since v1.9) — The system's first public-facing surface: a real-data portfolio dashboard, a facility map, and an embedded chat widget that knows this very memory map's own node inventory.
- **CEO exec cockpit** (LIVE, since v1.11) — A board-level, password-gated page on travismorrow.com. Its marquee is the auction watch: the 90+ day delinquency tail (about 13 units) against the roughly two-unit goal, the dollars behind it, and which facilities carry it — over a portfolio-KPI band, 14-month trend charts, and a per-facility league with drill-downs, refreshed twice daily.
- **Delinquency aging funnel** (LIVE, since v1.11) — An interactive, severity-graded delinquency aging funnel on the portfolio dashboard and the monthly snapshot PDF — showing where past-due balances sit by age bucket so the post-60-day cliff is the shape of the chart, scope-aware with a units/dollars toggle and per-facility drill-down.
- **iMessage — NSS team** (LIVE, since v1.11) — A live NSS operations-team thread with full owner-group parity — financials, actual-vs-budget, operational, and delinquency lanes. Its weekly per-facility MTD report and tenant-level delinquency lookups are proven live; a third standing auto-send (a Monday delinquency PDF) is scheduled but not yet confirmed by a real Monday firing.
- **Tenant-level delinquency lookup** (LIVE, since v1.12) — On-demand, per-lease delinquency lookup for the NSS Team thread and Travis's 1:1 — ask who's delinquent at a facility and get name, unit, days-late, and balance, worst-first, reconciling exactly to the Monday report's source. Scoped by district/regional manager too.
- **Data Store network viz** (LIVE, since v1.12) — A ‘living network’ page on travismorrow.com visualizing the Portfolio Datastore itself — stores, the real data points behind them, and what those points feed — refreshed on a weekly-plus-on-demand cadence, built with an exporter that strips tenant/staff detail by construction. A nav door on the homepage and portfolio/exec headers links to it.

### Engineered workarounds & infrastructure

- **Handoff rail** (LIVE, since v1.15) — The listener hands off anything beyond a read/reply to a durable job queue, drained by dedicated executors. Routing was consolidated in August to a single handoff destination rather than several possible targets.
- **Inbound real-time listener** (LIVE, since v1.6) — An always-on daemon that reads the Messages database every few seconds and composes real replies to genuinely new texts.
- **Send relay (outbox→Shortcuts)** (LIVE, since v1.0) — Sends texts despite there being no direct send API — a written job picked up by a worker and a Shortcut.
- **Save-file / HEIC pipeline** (LIVE, since v1.8) — Text 'save this photo' with an attachment and it's filed into Dropbox automatically, converting HEIC to JPEG along the way.
- **Maps / address-book rail** (LIVE, since v1.8) — Location questions and address requests route through a curated address book as the single source of truth.
- **X / LinkedIn post lookup** (LIVE, since v1.8) — Drop a social post link in a thread and get a fetched, summarized reply back.
- **Model routing + quiet hours** (LIVE, since v1.8) — Right-sizes which AI model handles which thread, and stays quiet overnight rather than composing at odd hours.
- **iMessage reliability stack** (LIVE, since v1.7) — Exactly-once sends, post-send delivery confirmation, and watchdog monitoring so texts don't silently fail or duplicate.
- **Member-set thread binding** (LIVE, since v1.7) — Threads are identified by who's in them, not by a fragile stored ID — rotation-proof against platform quirks.
- **Worker watchdog** (LIMITED, since v1.14) — Watches the always-on rails and raises a hand when one stops working. It learned this month to warn before the sign-in credential expires — and then proved the point it was built to make: it warned once, went quiet through the real expiry, and is still watching a credential that was replaced days ago, insisting the problem persists while everything works fine on a credential it cannot see. It is marked limited on purpose. A guard that cannot fail is decoration.
- **Portable state refresh** (LIVE, since v1.0) — Taylor-STATE.md rebuilds in Dropbox roughly every 2 hours so a fresh session anywhere catches up fast, now genuinely idle-gated — a stale-signature bug that made it rebuild on every single cycle regardless of whether anything had changed was found and fixed (it was saving its ‘did anything change’ fingerprint before the rebuild instead of after, so the rebuild always invalidated its own comparison). Three consecutive real skips on quiet cycles have since confirmed the fix holds.
- **Sports web scraping** (LIVE, since v1.0) — Gathers stats from multiple sports sites via browser and folds them into the volleyball hub.
- **ROAS / ad-spend Q&A by text** (LIVE, since v1.9) — Ask a ROAS or ad-spend question by text — for any facility, brand, or the whole portfolio — and the lookup rail answers from live data, right in the owners' thread. No brand fencing: the NSS owners get any answer they want.
- **Twice-daily datastore ingest** (LIVE, since v1.9) — A twice-daily job (noon + 7 PM AZ) that refreshes the portfolio datastore from live operations data across all 29 facilities, so every store-backed report stays current — loaded and verified running on the host, with healthy data flowing into the store.
- **Attribution-lite Q&A by text** (LIVE, since v1.9) — Ask by text for the lead-channel mix (web / phone / walk-in / other) or the most cost-effective ad campaigns — any facility, brand, or the whole portfolio, answered live from the datastore in the owners' thread. Deeper click-to-move-in attribution still waits on a Hummingbird product change.
- **Subagent Verifier** (LIVE, since v1.9) — An independent, fresh-eyes checker for delegated work, signed off and promoted live — its own data load and its own math, so it can catch an error the original work made rather than repeating it.
- **Spawner + Approval-Loop** (LIVE, since v1.9) — Lets Taylor delegate work with a text-based go/no-go confirm loop back to Travis — proven live end to end. Never autonomous: Travis's standing decision is no self-directed AI spawner, ever.
- **Reminder job-type** (LIVE, since v1.9) — Text 'remind me...' for a future scheduled send. The on-Mac runner now self-schedules off its own poll loop instead of depending on an external registrar task, firing by direct wall-clock comparison — proven live across a battery of test scenarios.
- **NSS financial Q&A (Joiin-backed)** (LIVE, since v1.10) — Ask a real financial question in the owners' thread — P&L, budget vs. actual, revenue, expenses, variance — and get an answer pulled live from QuickBooks, across 28 of the 29 tracked facilities (one small property keeps its own books; a second is no longer managed). A separate lane from the ROAS/attribution Q&A above, and it's honest when the freshest answer is last month's closed books, not this month's.
- **Idea capture** (LIVE, since v1.10) — Text an idea in the 1:1 — or just say "idea:" — and it's captured to a running ideas inbox that folds into the project backlog automatically overnight. Now backed by a real authenticated tool the assistant calls directly, with a structured-truth guarantee: a capture is claimed only when the tool actually confirms it, so a passing thought is never falsely reported as saved.
- **Calendar/travel lookup lane** (LIMITED, since v1.12) — Reads a cached upcoming-travel file to answer calendar/whereabouts questions in the Senators and 1:1 threads, honestly degrading when the cache goes stale. NSS threads have no calendar visibility. Live for lookups; the recurring cache-refresh job itself isn't built yet, so it's recorded as limited rather than fully live.
- **Swim lanes (surface ownership)** (LIVE, since v1.12) — A binding ownership map across the Home, Laptop, and Web surfaces — who runs what, claiming rules before touching shared state, a fragment-naming convention, and a proposal→review→decision protocol so two surfaces can converge on a call without using Travis as courier.
- **NEEDS HOME escalation** (LIVE, since v1.12) — Watchdogs and report cards that used to write silently now escalate real problems into a dedicated queue Home Taylor reads on every boot, replacing an absolute-mute rule that could let a real failure sit unseen. Home triages; Travis is texted only past a high bar — he must act, decide, or lose money or a deadline.
- **Surface bus (Home ↔ Laptop)** (LIVE, since v1.18) — A signed, cryptographically verified line between the two machines: Laptop leaves a request in shared storage, the always-on Home Mac signs and answers within about a minute, and now — new this version — a consuming daemon on the Home Mac acts on trusted, signed requests without a human relaying them. Verified live by a real unattended wake, not just a load check.
- **Tidy-reply action rail** (LIVE, since v1.13) — Lets Travis act on a list of flagged files by simply answering the text — keep these, drop those — instead of issuing a command. An early build claimed ordinary messages that merely happened to contain everyday verbs; that hole was found in live use, closed, and then proven closed inside the running process rather than assumed.
- **Protected-paths manifest** (LIMITED, since v1.13) — A written list of the files and folders no cleanup pass may touch — the queues, logs, and state the always-on rails depend on, several of which look like garbage precisely because a healthy queue is empty. The list is kept current and consulted by hand; wiring it in so the automatic tidy enforces it is still to come.
- **Per-thread capability gate** (LIVE, since v1.14) — Every conversation now carries its own list of what Taylor is allowed to do in it. Before this, anyone in a work thread could move a calendar event or start something that costs money, simply by asking in the right room. A second gate now stands in front of the actions that spend or reschedule, and it did not exist at all until this week.
- **Capability registry** (LIVE, since v1.14) — One place that knows what Taylor can actually do, so he answers questions about himself from the truth instead of from memory. It is now assembled from what the running system really loads rather than from a list kept by hand — the hand-kept list turned out to be missing almost half of it, which is precisely the kind of quiet wrongness it exists to prevent.
- **Confirm-anchor veto** (LIVE, since v1.14) — A yes has to be a yes to something specific. When Taylor asks for a confirmation, the answer is pinned to the exact thing that was proposed, and it only counts from the person who was asked — so a stray agreement drifting past in a busy thread can no longer be read as approval for something else entirely.
- **Compose-failure detection** (LIVE, since v1.14) — The first check that asks whether the work actually happened, rather than whether the program is still running. Both of those can look identical from the outside, and for a while a silent failure to write a reply looked exactly like a quiet morning. One further piece of this is built and tested but not yet wired in.
- **Agent-first inversion** (LIMITED, since v1.14) — Specialised lanes had been quietly stealing questions meant for the general one — a question about water temperature was being answered by the calendar. Deleting the first batch of those lanes took a test set of stolen questions from every single one going astray to none of them. This is one step of a seven-step plan; the rest is Travis's call and has not shipped.
- **Reply doctrine enforcement** (LIVE, since v1.15) — A safety rule for 1:1 replies that used to live only as a written convention is now checked automatically, in code, before every message goes out — not something a person has to remember to follow.
- **Self-monitoring alarm log** (LIMITED, since v1.15) — A capped, rotating internal log that surfaces faults on request. Live — but routing a real failure straight to a person hasn't been wired yet, so it's read, not yet alerted.
- **Shell-outage migration to launchd** (LIVE, since v1.17) — A week-long sandbox outage silently paused six scheduled jobs, including this system's own history-keeping ritual. Five of them were rebuilt to run natively on the home Mac instead, each proven with a real live run rather than just switched on. One of them, the usage watchdog, was then caught firing green on schedule while taking zero real readings — a leftover retirement note in a shared file was being read as an instruction to halt. Fixed and proven with forced live fires the same day; its self-reported figures now carry an honest age instead of a bare percentage.

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
- **Chase ACH batch pipeline** (LIVE, since v1.12) — Turns the monthly owner-distribution numbers into a validated Chase-format ACH upload file — payees and pay-from accounts checked, a generator script producing the batch file. Travis reviews and submits it himself in Chase; nothing sends automatically.

### Personal workstreams

- **Ty volleyball stat hub** (LIVE, since v1.0) — A stat hub combining spreadsheet tracking, a stat card, and video for a family member's volleyball season.
- **Tournament schedule watchers** (SEASONAL, since v1.0) — Seasonal watchers that pull tournament schedules into the calendar and text results as they come in.
- **TimeTree whereabouts mirror** (LIVE, since v1.0) — Mirrors the travel calendar into Google Calendar as the source of truth for where Travis is.
- **Senators watcher** (LIVE, since v1.0) — Answers calendar and whereabouts questions automatically in the couple's group thread.
- **Weekly streaming digest** (LIVE, since v1.0) — A Saturday-morning roundup of new streaming releases.
- **XRP / Ripple news watch** (LIVE, since v1.0) — A standing watch on XRP/Ripple news.
- **Calendar actions by text** (LIVE, since v1.8) — Create, update, or delete calendar events just by texting a request.
- **Conference Audio Capture** (LIVE, since v1.19) — Record a session on the phone, share it into a Dropbox inbox, and get back a written brief with no further interaction — transcribed locally and summarized automatically, built ahead of the September SSA Fall Conference.
- **ParentVUE — Ty's Grades** (LIVE, since v1.19) — A weekly Sunday grade check plus on-demand questions in the 1:1 ("how's Ty doing," "any missing assignments") answered from a live ParentVUE login, never a cached guess.
- **1:1 daily journal question** (LIVE, since v1.20) — Taylor asks Travis one open journal question a day in the 1:1 thread and captures the answer — confirmed genuinely live 8/30 by a real question sent, answered, and verbatim-matched against the message log.

### Installed skills (playbooks)

- **eom-close** (LIVE, since v1.5) — An installed playbook that runs the month-end close end to end — spreadsheet, graphs, and per-facility packages — leaving only the final mail-merge as a manual step.
- **delta-booking** (LIVE, since v1.5) — Books, changes, cancels, and checks in on Delta trips, then files them to the calendar — never completes a booking without explicit go-ahead.
- **calendar-travel** (LIVE, since v1.5) — Handles general calendar adds and travel filing with sensible defaults, and keeps flight schedules off the personal calendar by hard rule.
- **vintage-jacks-booking** (LIVE, since v1.5) — Books a usual haircut appointment through guest checkout, stopping right before the final confirmation.
- **daily-photo-post** (PAUSED, since v1.5) — Composes the couple-photo post — one mode per day, work topics kept out, 1:1 surprises protected. Paused at Travis's request (7/21) until his explicit go; the randomized-cadence decider stays built but inactive.
- **order-doordash** (LIVE, since v1.7) — End-to-end food ordering with a hard confirm-before-checkout gate — either partner can approve.
- **introduce-taylor-to-thread** (LIVE, since v1.7) — Onboards Taylor into a brand-new group or 1:1 thread using the proven setup mechanics, turning it into a guided few-minute job.
- **serenity-nails-booking** (LIVE, since v1.8) — Books a nail salon appointment for either partner, one person per pass, behind a hard confirmation gate.
- **atl-tsa-wait-times** (LIVE, since v1.8) — Checks the live airport security wait time at a home airport's PreCheck checkpoint — a simple, no-login lookup.
- **facility-distributions** (LIVE, since v1.15) — Runs the monthly owner-distribution cycle across the storage portfolio: pulls each facility's financials live, applies a minimum-payout floor, and groups payouts to stay under the bank's daily transfer limit. Never moves money itself — the transfers are the owner's own step.

<!-- MEMORY-MAP-NODES:END -->
