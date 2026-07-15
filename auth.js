/* ===========================================================================
   travismorrow.com — client-side auth helpers
   ---------------------------------------------------------------------------
   Depends on config.js (window.TM_CONFIG) being loaded first.

   SECURITY NOTE: this is a lightweight, client-side gate for a demo. It keeps
   casual visitors out; it is NOT real access control. See README.md.
   =========================================================================== */
(function (global) {
  "use strict";

  var CFG = global.TM_CONFIG || {};

  // SHA-256 -> lowercase hex, via the browser's Web Crypto API.
  async function sha256Hex(text) {
    var bytes = new TextEncoder().encode(text);
    var digest = await crypto.subtle.digest("SHA-256", bytes);
    return Array.prototype.map
      .call(new Uint8Array(digest), function (b) {
        return b.toString(16).padStart(2, "0");
      })
      .join("");
  }

  // Attempt a login. Resolves true on success (and stores the token), else false.
  async function login(password) {
    var hash = await sha256Hex(password);
    if (hash === CFG.EXPECTED_HASH) {
      try {
        sessionStorage.setItem(CFG.AUTH_KEY || "tm_auth", hash);
      } catch (e) {
        /* private mode / storage disabled — still allow this tab */
      }
      return true;
    }
    return false;
  }

  // True if the current session holds a valid access token.
  function isAuthed() {
    try {
      return sessionStorage.getItem(CFG.AUTH_KEY || "tm_auth") === CFG.EXPECTED_HASH;
    } catch (e) {
      return false;
    }
  }

  // Drop the token (used by the "lock" button).
  function logout() {
    try {
      sessionStorage.removeItem(CFG.AUTH_KEY || "tm_auth");
    } catch (e) {}
  }

  // Guard for protected pages. Call as the very first thing in <head>.
  // Redirects to the login page (remembering where we were) if not authed.
  function guard() {
    if (!isAuthed()) {
      var here = (location.pathname.split("/").pop() || CFG.PROTECTED_PAGE || "") + (location.search || "");
      var target = (CFG.LOGIN_PAGE || "login.html") + "?next=" + encodeURIComponent(here);
      location.replace(target);
      return false;
    }
    return true;
  }

  global.TMAuth = {
    sha256Hex: sha256Hex,
    login: login,
    isAuthed: isAuthed,
    logout: logout,
    guard: guard
  };
})(window);
