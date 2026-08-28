(() => {
  const sidebar = document.querySelector(".sidebar");
  if (!sidebar) {
    return;
  }

  const toggle = sidebar.querySelector(".menu-toggle");
  const nav = document.getElementById("primary-menu");
  const mobileQuery = window.matchMedia("(max-width: 760px)");

  const setOpen = (open) => {
    if (!toggle || !nav) {
      return;
    }
    sidebar.classList.toggle("menu-open", open);
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    toggle.textContent = open ? "\u2715" : "\u2630";
  };

  if (toggle && nav) {
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
  }

  let lastY = window.scrollY;

  window.addEventListener("scroll", () => {
    const y = window.scrollY;
    const delta = y - lastY;

    if (y <= 4) {
      sidebar.classList.remove("bar-pinned", "bar-hidden");
    } else if (delta <= -4) {
      if (sidebar.classList.contains("bar-pinned")) {
        sidebar.classList.remove("bar-hidden");
      } else {
        sidebar.classList.add("bar-pinned", "bar-hidden");
        requestAnimationFrame(() => {
          requestAnimationFrame(() => sidebar.classList.remove("bar-hidden"));
        });
      }
    } else if (delta >= 4 && sidebar.classList.contains("bar-pinned")) {
      sidebar.classList.add("bar-hidden");
      setOpen(false);
    } else {
      return;
    }

    lastY = y;
  }, { passive: true });
})();
