/* Shared design-system preview helper.
   Injects a small theme toggle that flips <html data-theme> between
   light and dark, and persists the choice across all preview cards
   via localStorage so the whole set stays in sync while reviewing. */
(function () {
  var KEY = "ocx-ds-theme";
  var root = document.documentElement;

  var sun = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/></svg>';
  var moon = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>';

  function current() {
    return root.getAttribute("data-theme") ||
      (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
  }

  function apply(theme) {
    root.setAttribute("data-theme", theme);
    // Paint the themed surface with an inline !important rule so it wins even
    // when a host harness composites the card on a transparent body.
    root.style.setProperty("background-color", "var(--bg)", "important");
    try { localStorage.setItem(KEY, theme); } catch (e) {}
    if (btn) {
      var dark = theme === "dark";
      btn.innerHTML = (dark ? sun : moon) + "<span>" + (dark ? "Light" : "Dark") + "</span>";
      btn.setAttribute("aria-label", "Switch to " + (dark ? "light" : "dark") + " mode");
    }
  }

  // Restore saved choice before paint where possible.
  var saved = null;
  try { saved = localStorage.getItem(KEY); } catch (e) {}
  if (saved) root.setAttribute("data-theme", saved);

  var btn;
  function init() {
    // Full-bleed themed surface behind content.
    var bg = document.createElement("div");
    bg.className = "ds-theme-bg";
    document.body.insertBefore(bg, document.body.firstChild);

    btn = document.createElement("button");
    btn.className = "ds-theme-toggle";
    btn.type = "button";
    btn.addEventListener("click", function () {
      apply(current() === "dark" ? "light" : "dark");
    });
    document.body.appendChild(btn);
    apply(current());

    // Keep cards in sync if several are open and one toggles.
    window.addEventListener("storage", function (e) {
      if (e.key === KEY && e.newValue) apply(e.newValue);
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
