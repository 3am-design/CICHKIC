/* Preview gate for the HKIC tender prototype (same pattern as the CIC RSTC prototype).
   Client-side only: keeps casual visitors out, not a security control. */
(() => {
  "use strict";
  const HASH = "cb7ab7d45f3f0509380f9adecb01ee0c974782c33d234e1773e48b20ac687100";
  const KEY = "hkic-preview";
  const COOKIE = KEY + "=" + HASH;
  const capture = /HeadlessChrome/.test(navigator.userAgent);
  const isIndex = !!document.querySelector("script[data-gate-index]");

  function unlocked() {
    try { if (sessionStorage.getItem(KEY) === HASH) return true; } catch (e) {}
    return document.cookie.split(";").some(c => c.trim() === COOKIE);
  }
  function remember() {
    try { sessionStorage.setItem(KEY, HASH); } catch (e) {}
    if (location.protocol === "file:") return;
    const path = new URL(".", location.href).pathname;
    const secure = location.protocol === "https:" ? "; Secure" : "";
    document.cookie = COOKIE + "; Path=" + path + "; SameSite=Lax" + secure;
  }
  window.HKIC_GATE = { unlocked: () => capture || unlocked(), remember, HASH };

  // Prototype pages: send visitors without access to the password page.
  if (!isIndex && !capture && !unlocked()) {
    document.documentElement.style.visibility = "hidden";
    location.replace("index.html?next=" + encodeURIComponent(location.pathname.split("/").pop() + location.search));
  }
})();
