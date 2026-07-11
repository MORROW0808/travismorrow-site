/* ===========================================================================
   travismorrow.com — light/dark theme helper
   ---------------------------------------------------------------------------
   Pages call TMTheme.init() as early as possible in <head> so the stored
   choice lands on <html data-theme="..."> before first paint (no flash).
   Toggle buttons call TMTheme.toggle(). Choice persists in localStorage;
   default is dark (the site's original look).
   =========================================================================== */
(function (global) {
  "use strict";

  var KEY = "tm_theme";

  function stored() {
    try { return localStorage.getItem(KEY); } catch (e) { return null; }
  }

  function apply(t) {
    document.documentElement.setAttribute("data-theme", t);
  }

  function current() {
    return document.documentElement.getAttribute("data-theme") || "dark";
  }

  function init() {
    apply(stored() === "light" ? "light" : "dark");
  }

  function toggle() {
    var next = current() === "dark" ? "light" : "dark";
    // brief cross-fade of colors only — removed after the flip settles
    var root = document.documentElement;
    root.classList.add("theme-anim");
    setTimeout(function () { root.classList.remove("theme-anim"); }, 400);
    apply(next);
    try { localStorage.setItem(KEY, next); } catch (e) {}
    return next;
  }

  global.TMTheme = { init: init, toggle: toggle, current: current };
})(window);
