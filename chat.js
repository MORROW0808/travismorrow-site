/* ===========================================================================
   travismorrow.com — "Taylor" chat widget (UI SHELL ONLY)
   ---------------------------------------------------------------------------
   Internal name: Chat Taylor. Outward-facing copy says "Taylor" only.

   This is a design preview: the panel, motion, theming, and a stubbed
   conversation. There is deliberately NO backend, no network calls, and no
   pretend capability — the stub reply says exactly that. The conversational
   backend (scope, permissions, security boundary for a public page) is a
   separate decision still being made.

   Drop-in: <script src="chat.js" defer></script> on any page. Self-contained
   styles + DOM injection; themes follow <html data-theme> like the rest of
   the site (theme.js). Debug affordances for demos/screenshots:
   ?chat=open opens the panel on load; ?chat=demo also plays a sample
   exchange.
   =========================================================================== */
(function () {
  "use strict";

  /* ---- the reticle avatar (concept 04), theme-aware via --tc vars ---- */
  var MARK =
    '<svg viewBox="0 0 120 120" aria-hidden="true">' +
    '<circle cx="60" cy="60" r="56" fill="var(--tc-plate)"/>' +
    '<circle cx="60" cy="60" r="52" fill="none" stroke="var(--tc-ring)" stroke-width="1.6"/>' +
    '<g stroke="var(--tc-tick)" stroke-width="2" fill="none">' +
    '<path d="M60 4 V12 M60 108 V116 M4 60 H12 M108 60 H116"/></g>' +
    '<g stroke="var(--tc-tick2)" stroke-width="1.4" fill="none">' +
    '<path d="M88.3 11 L84.3 17.9 M109 31.7 L102.1 35.7 M109 88.3 L102.1 84.3 M88.3 109 L84.3 102.1 ' +
    'M31.7 109 L35.7 102.1 M11 88.3 L17.9 84.3 M11 31.7 L17.9 35.7 M31.7 11 L35.7 17.9"/></g>' +
    '<g stroke="var(--tc-arc)" stroke-width="1.8" fill="none">' +
    '<path d="M60 18 A42 42 0 0 1 96.4 39 M96.4 81 A42 42 0 0 1 23.6 81 M23.6 39 A42 42 0 0 1 42 22.4"/></g>' +
    '<g stroke="var(--tc-ink)" stroke-width="4" stroke-linecap="square" fill="none">' +
    '<path d="M34 42 H86 M60 42 V92"/></g>' +
    '<circle class="tc-halo" cx="60" cy="42" r="6.5" fill="var(--tc-lamp)"/>' +
    '<circle class="tc-core" cx="60" cy="42" r="3" fill="var(--tc-lamp-core)"/>' +
    "</svg>";

  var CSS = [
    ":root{",
    "  --tc-plate:#1a1f24; --tc-ring:#3a434d; --tc-tick:#59636e; --tc-tick2:#454f5a;",
    "  --tc-arc:#8b96a1; --tc-ink:#eef2f6; --tc-lamp:#5AC8FA; --tc-lamp-core:#9FD8FF;",
    "  --tc-halo-a:.35;",
    "  --tc-panel:#1F2226; --tc-panel2:#262A30; --tc-border:rgba(255,255,255,0.09);",
    "  --tc-text:#d2d2d2; --tc-dim:#9c9c9c; --tc-bright:#f2f2f2;",
    "  --tc-user:#3a2226; --tc-user-border:rgba(185,39,50,0.4);",
    "  --tc-accent:#B92732; --tc-accent2:#B62025;",
    "  --tc-shadow:0 16px 48px rgba(0,0,0,0.5);",
    "}",
    ':root[data-theme="light"]{',
    "  --tc-plate:#ffffff; --tc-ring:#b9bec4; --tc-tick:#8a9096; --tc-tick2:#b9bec4;",
    "  --tc-arc:#5c646c; --tc-ink:#14181c; --tc-lamp:#0B7FA8; --tc-lamp-core:#0B7FA8;",
    "  --tc-halo-a:.15;",
    "  --tc-panel:#FFFFFF; --tc-panel2:#F3F4F6; --tc-border:#D9DBDE;",
    "  --tc-text:#33363B; --tc-dim:#6B6E73; --tc-bright:#111318;",
    "  --tc-user:#F7E9EA; --tc-user-border:rgba(185,39,50,0.35);",
    "  --tc-shadow:0 14px 40px rgba(16,18,20,0.18);",
    "}",
    ".tc-halo{ opacity:var(--tc-halo-a); }",

    /* ---- launcher ---- */
    "#tcLauncher{",
    "  position:fixed; right:20px; bottom:var(--tc-bottom, 20px); z-index:2000;",
    "  width:58px; height:58px; border-radius:50%; cursor:pointer; padding:7px;",
    "  background:var(--tc-panel); border:1px solid var(--tc-border);",
    "  box-shadow:var(--tc-shadow);",
    "  transition:transform .16s ease, box-shadow .16s ease, opacity .2s;",
    "}",
    "#tcLauncher:hover{ transform:translateY(-2px) scale(1.04); }",
    "#tcLauncher:focus-visible{ outline:2px solid var(--tc-lamp); outline-offset:3px; }",
    "#tcLauncher svg{ width:100%; height:100%; display:block; }",
    "#tcLauncher.tc-hidden{ opacity:0; pointer-events:none; }",
    /* idle invitation: the lamp breathes slowly while collapsed */
    "@keyframes tcBreathe{ 0%,100%{ opacity:var(--tc-halo-a);} 50%{ opacity:calc(var(--tc-halo-a) + .35);} }",
    "@keyframes tcBreatheCore{ 0%,100%{ opacity:.75;} 50%{ opacity:1;} }",
    "#tcLauncher .tc-halo{ animation:tcBreathe 3.2s ease-in-out infinite; }",
    "#tcLauncher .tc-core{ animation:tcBreatheCore 3.2s ease-in-out infinite; }",

    /* ---- panel ---- */
    "#tcPanel{",
    "  position:fixed; right:20px; bottom:var(--tc-bottom, 20px); z-index:2001;",
    "  width:min(92vw, 370px); height:min(76vh, 540px);",
    "  display:flex; flex-direction:column;",
    "  background:var(--tc-panel); border:1px solid var(--tc-border); border-radius:16px;",
    "  box-shadow:var(--tc-shadow); overflow:hidden;",
    "  font-family:-apple-system,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;",
    "  color:var(--tc-text);",
    "  transform-origin:bottom right;",
    "  opacity:0; transform:scale(.92) translateY(10px); visibility:hidden;",
    "  transition:opacity .22s ease, transform .22s cubic-bezier(.2,.7,.3,1), visibility .22s;",
    "}",
    "#tcPanel.tc-open{ opacity:1; transform:none; visibility:visible; }",

    "#tcHead{",
    "  display:flex; align-items:center; gap:10px; padding:12px 14px;",
    "  border-bottom:1px solid var(--tc-border); background:var(--tc-panel2);",
    "}",
    "#tcHead .tc-avatar{ width:34px; height:34px; flex:none; }",
    "#tcHead .tc-avatar svg{ width:100%; height:100%; display:block; }",
    "#tcHead .tc-who .tc-n{ font-size:14px; font-weight:700; color:var(--tc-bright); line-height:1.1; }",
    "#tcHead .tc-who .tc-r{ font-size:9px; letter-spacing:.14em; text-transform:uppercase; color:var(--tc-lamp); margin-top:2px; }",
    "#tcClose{",
    "  margin-left:auto; width:28px; height:28px; border-radius:7px; cursor:pointer;",
    "  background:none; border:1px solid transparent; color:var(--tc-dim);",
    "  font-size:16px; line-height:1; display:flex; align-items:center; justify-content:center;",
    "}",
    "#tcClose:hover{ border-color:var(--tc-border); color:var(--tc-bright); }",

    "#tcMsgs{ flex:1; overflow-y:auto; padding:14px 12px; display:flex; flex-direction:column; gap:10px; }",
    ".tc-row{ display:flex; gap:8px; align-items:flex-end; }",
    ".tc-row.tc-user{ justify-content:flex-end; }",
    ".tc-row .tc-avatar{ width:24px; height:24px; flex:none; margin-bottom:2px; }",
    ".tc-row .tc-avatar svg{ width:100%; height:100%; display:block; }",
    ".tc-bubble{",
    "  max-width:78%; padding:9px 12px; border-radius:13px; font-size:13px; line-height:1.5;",
    "  background:var(--tc-panel2); border:1px solid var(--tc-border); color:var(--tc-text);",
    "  border-bottom-left-radius:4px;",
    "  animation:tcRise .25s cubic-bezier(.2,.7,.3,1);",
    "}\n.tc-bubble a.tc-link{ color:var(--accent-bright, #de5964); font-weight:600; text-decoration:underline; text-underline-offset:2px; }",
    ".tc-row.tc-user .tc-bubble{",
    "  background:var(--tc-user); border-color:var(--tc-user-border); color:var(--tc-bright);",
    "  border-bottom-left-radius:13px; border-bottom-right-radius:4px;",
    "}",
    "@keyframes tcRise{ from{ opacity:0; transform:translateY(8px);} to{ opacity:1; transform:none;} }",

    ".tc-typing{ display:inline-flex; gap:4px; padding:12px 13px; }",
    ".tc-typing i{ width:6px; height:6px; border-radius:50%; background:var(--tc-dim); animation:tcDot 1.1s ease-in-out infinite; }",
    ".tc-typing i:nth-child(2){ animation-delay:.15s; } .tc-typing i:nth-child(3){ animation-delay:.3s; }",
    "@keyframes tcDot{ 0%,60%,100%{ transform:none; opacity:.5;} 30%{ transform:translateY(-4px); opacity:1;} }",

    "#tcInputRow{",
    "  display:flex; gap:8px; padding:10px 12px; border-top:1px solid var(--tc-border);",
    "  background:var(--tc-panel2);",
    "}",
    "#tcInput{",
    "  flex:1; font-family:inherit; font-size:13px; padding:10px 12px;",
    "  background:var(--tc-panel); color:var(--tc-bright);",
    "  border:1px solid var(--tc-border); border-radius:10px; outline:none;",
    "}",
    "#tcInput:focus{ border-color:var(--tc-lamp); }",
    "#tcInput::placeholder{ color:var(--tc-dim); }",
    "#tcSend{",
    "  width:40px; border-radius:10px; border:none; cursor:pointer; color:#fff;",
    "  background:linear-gradient(135deg,var(--tc-accent),var(--tc-accent2));",
    "  display:flex; align-items:center; justify-content:center;",
    "  transition:filter .15s, transform .12s;",
    "}",
    "#tcSend:hover{ filter:brightness(1.12); }",
    "#tcSend:active{ transform:scale(.96); }",
    "#tcSend svg{ width:16px; height:16px; }",
    "#tcNote{ font-size:9.5px; color:var(--tc-dim); text-align:center; padding:0 12px 8px; background:var(--tc-panel2); }",

    "@media (prefers-reduced-motion: reduce){",
    "  #tcLauncher .tc-halo, #tcLauncher .tc-core{ animation:none; }",
    "  .tc-bubble{ animation:none; }",
    "  #tcPanel{ transition:none; }",
    "}"
  ].join("\n");

  /* ---- stubbed replies: honest about being a shell, no fake capability ---- */
  var GREETING = "How can I help, Mr. Morrow?";
  /* ---- live backend: Cloudflare Worker (POST {message, history} -> {reply}).
     History is threaded client-side, capped to the worker's 12-turn limit.
     Failures degrade to an honest in-bubble error — never a fake answer. ---- */
  var ENDPOINT = "https://taylor-chat.morrow0808.workers.dev/chat";
  var history = [];
  var busy = false;

  function init() {
    var style = document.createElement("style");
    style.textContent = CSS;
    document.head.appendChild(style);

    var launcher = document.createElement("button");
    launcher.id = "tcLauncher";
    launcher.setAttribute("aria-label", "Chat with Taylor");
    launcher.setAttribute("title", "Chat with Taylor");
    launcher.innerHTML = MARK;
    document.body.appendChild(launcher);

    var panel = document.createElement("div");
    panel.id = "tcPanel";
    panel.setAttribute("role", "dialog");
    panel.setAttribute("aria-label", "Chat with Taylor");
    panel.innerHTML =
      '<div id="tcHead">' +
        '<span class="tc-avatar">' + MARK + "</span>" +
        '<span class="tc-who"><span class="tc-n">Taylor</span><br>' +
        '<span class="tc-r">Executive Digital Assistant</span></span>' +
        '<button id="tcClose" aria-label="Close chat">✕</button>' +
      "</div>" +
      '<div id="tcMsgs" aria-live="polite"></div>' +
      '<div id="tcInputRow">' +
        '<input id="tcInput" type="text" placeholder="Message Taylor…" aria-label="Message Taylor">' +
        '<button id="tcSend" aria-label="Send">' +
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" ' +
        'stroke-linecap="round" stroke-linejoin="round"><path d="M22 2 11 13M22 2l-7 20-4-9-9-4z"/></svg>' +
        "</button>" +
      "</div>" +
      '<div id="tcNote">Taylor answers from the live portfolio dataset · replies may take a few seconds.</div>';
    document.body.appendChild(panel);

    var msgs = panel.querySelector("#tcMsgs");
    var input = panel.querySelector("#tcInput");
    var greeted = false;

    function bubble(text, who) {
      var row = document.createElement("div");
      row.className = "tc-row" + (who === "user" ? " tc-user" : "");
      row.innerHTML =
        (who === "user" ? "" : '<span class="tc-avatar">' + MARK + "</span>") +
        '<div class="tc-bubble"></div>';
      var el = row.querySelector(".tc-bubble");
      if (who === "user") {
        el.textContent = text;
      } else {
        /* minimal, escape-first markdown: **bold** and line breaks only */
        var safe = String(text).replace(/[&<>"']/g, function (c) {
          return { "&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;", "'":"&#39;" }[c];
        });
        /* Links: markdown [text](/path) plus bare /page.html mentions become
           real anchors. RELATIVE same-origin paths only — an absolute or
           external URL in a reply never becomes clickable. Runs after
           escaping, so hrefs can't carry markup. */
        el.innerHTML = safe
          .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
          .replace(/\[([^\]]+)\]\((\/[A-Za-z0-9._\-\/?#=&]*)\)/g,
                   '<a class="tc-link" href="$2" target="_blank" rel="noopener">$1</a>')
          .replace(/(^|[\s(>])(\/[a-z0-9._\-]+\.html)/gi,
                   '$1<a class="tc-link" href="$2" target="_blank" rel="noopener">$2</a>')
          .replace(/\n/g, "<br>");
      }
      msgs.appendChild(row);
      msgs.scrollTop = msgs.scrollHeight;
      return row;
    }

    function typingRow() {
      var row = document.createElement("div");
      row.className = "tc-row";
      row.innerHTML =
        '<span class="tc-avatar">' + MARK + "</span>" +
        '<div class="tc-bubble tc-typing"><i></i><i></i><i></i></div>';
      msgs.appendChild(row);
      msgs.scrollTop = msgs.scrollHeight;
      return row;
    }

    function open() {
      panel.classList.add("tc-open");
      launcher.classList.add("tc-hidden");
      if (!greeted) {
        greeted = true;
        setTimeout(function () { bubble(GREETING, "taylor"); }, 260);
      }
      setTimeout(function () { input.focus(); }, 300);
    }
    function close() {
      panel.classList.remove("tc-open");
      launcher.classList.remove("tc-hidden");
    }

    function send() {
      var text = input.value.trim();
      if (!text || busy) return;
      busy = true;
      input.value = "";
      bubble(text, "user");
      var t = typingRow();
      fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text, history: history.slice(-12) })
      }).then(function (r) { return r.json(); }).then(function (d) {
        t.remove(); busy = false;
        if (d && d.reply) {
          bubble(d.reply, "taylor");
          history.push({ role: "user", content: text },
                       { role: "assistant", content: d.reply.slice(0, 1000) });
          history = history.slice(-12);
        } else {
          bubble((d && d.error) || "Something went wrong on my end — give it another try.", "taylor");
        }
      }).catch(function () {
        t.remove(); busy = false;
        bubble("I can’t reach my backend right now — try again in a moment.", "taylor");
      });
    }

    launcher.addEventListener("click", open);
    panel.querySelector("#tcClose").addEventListener("click", close);
    panel.querySelector("#tcSend").addEventListener("click", send);
    input.addEventListener("keydown", function (e) {
      if (e.key === "Enter") send();
      if (e.key === "Escape") close();
    });

    /* demo/screenshot affordances */
    var q = new URLSearchParams(location.search).get("chat");
    if (q === "open" || q === "demo") open();
    if (q === "demo") setTimeout(function () {
      input.value = new URLSearchParams(location.search).get("q") ||
        "How many facilities are in Tucson?";
      send();
    }, 700);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else init();
})();
