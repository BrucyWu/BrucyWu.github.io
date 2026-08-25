(() => {
  const storageKey = "always-asking-mobile-nav-scroll";
  const sidebar = document.querySelector(".sidebar");

  if (!sidebar || !window.matchMedia("(max-width: 760px)").matches) {
    return;
  }

  const restorePosition = () => {
    try {
      const savedPosition = Number.parseFloat(sessionStorage.getItem(storageKey));
      if (Number.isFinite(savedPosition)) {
        sidebar.scrollLeft = savedPosition;
      }
    } catch {
      // Navigation should still work when browser storage is unavailable.
    }
  };

  const savePosition = () => {
    try {
      sessionStorage.setItem(storageKey, String(sidebar.scrollLeft));
    } catch {
      // Navigation should still work when browser storage is unavailable.
    }
  };

  restorePosition();
  requestAnimationFrame(restorePosition);
  window.addEventListener("load", restorePosition, { once: true });
  sidebar.addEventListener("scroll", savePosition, { passive: true });
  sidebar.addEventListener("click", savePosition, { capture: true });
  window.addEventListener("pagehide", savePosition);
})();
