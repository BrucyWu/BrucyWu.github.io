(() => {
  const sidebar = document.querySelector(".sidebar");
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.getElementById("primary-menu");

  if (!sidebar || !toggle || !nav) {
    return;
  }

  const mobileQuery = window.matchMedia("(max-width: 760px)");

  const setOpen = (open) => {
    sidebar.classList.toggle("menu-open", open);
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    toggle.textContent = open ? "\u2715" : "\u2630";
  };

  toggle.addEventListener("click", () => {
    setOpen(toggle.getAttribute("aria-expanded") !== "true");
  });

  nav.addEventListener("click", (event) => {
    if (event.target.closest("a")) {
      setOpen(false);
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      setOpen(false);
    }
  });

  document.addEventListener("click", (event) => {
    if (!sidebar.contains(event.target)) {
      setOpen(false);
    }
  });

  mobileQuery.addEventListener("change", () => {
    if (!mobileQuery.matches) {
      setOpen(false);
    }
  });
})();
