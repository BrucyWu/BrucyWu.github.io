(() => {
  const storageKey = "always-asking-mobile-nav-scroll";
  const sidebar = document.querySelector(".sidebar");

  if (!sidebar || !window.matchMedia("(max-width: 760px)").matches) {
    return;
  }

  const savedPosition = Number.parseFloat(sessionStorage.getItem(storageKey));
  if (Number.isFinite(savedPosition)) {
    sidebar.scrollLeft = savedPosition;
  }

  const savePosition = () => sessionStorage.setItem(storageKey, String(sidebar.scrollLeft));
  sidebar.addEventListener("scroll", savePosition, { passive: true });
  window.addEventListener("pagehide", savePosition);
})();
