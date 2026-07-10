/* ===========================================================================
   travismorrow.com — SITE CONFIG   (single source of truth)
   ===========================================================================

   >>> CHANGE ME  <<<  ── the demo password lives here (as a SHA-256 hash).

   A temporary demo password is set below (as a SHA-256 hash). This repo is
   PUBLIC, so treat the gate as casual protection only and change the password
   before the demo (see steps below).

   To set a NEW password:
     1. Open  set-password.html  in a browser, type the new password, and it
        prints the exact line to paste below. (Easiest — no terminal needed.)
     OR, in a terminal:
        printf '%s' 'YOUR-NEW-PASSWORD' | shasum -a 256
     2. Replace the EXPECTED_HASH value below with the 64-character hash.
     3. Done. login.html and memory-map.html both read this one file.
   =========================================================================== */

window.TM_CONFIG = {
  // SHA-256 hash of the password — NOT the password itself.
  // Temporary demo hash — replace before the demo.   <<< CHANGE ME >>>
  EXPECTED_HASH: "80ac423f4813c851eefc5b968228e6b23bf72caf693815fd674fbc972949a104",

  // sessionStorage key holding the access token after a correct login.
  AUTH_KEY: "tm_auth",

  // Gate page, and where a correct password lands the visitor.
  LOGIN_PAGE: "login.html",
  PROTECTED_PAGE: "memory-map.html"
};
