const navToggle = document.querySelector("[data-nav-toggle]");
const navList = document.querySelector("[data-nav-list]");
const navLinks = document.querySelectorAll("[data-nav-link]");
const header = document.querySelector("[data-header]");
const year = document.querySelector("[data-year]");

if (year) {
  year.textContent = new Date().getFullYear().toString();
}

if (navToggle && navList) {
  navToggle.addEventListener("click", () => {
    const isOpen = navToggle.getAttribute("aria-expanded") === "true";
    navToggle.setAttribute("aria-expanded", (!isOpen).toString());
    navList.classList.toggle("is-open", !isOpen);
    document.body.classList.toggle("nav-open", !isOpen);
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navToggle.setAttribute("aria-expanded", "false");
      navList.classList.remove("is-open");
      document.body.classList.remove("nav-open");
      setActiveNav(link.getAttribute("href"));
    });
  });

  document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape") {
      return;
    }

    navToggle.setAttribute("aria-expanded", "false");
    navList.classList.remove("is-open");
    document.body.classList.remove("nav-open");
    navToggle.focus();
  });
}

const observedSections = [...navLinks]
  .map((link) => ({
    href: link.getAttribute("href"),
    section: document.querySelector(link.getAttribute("href"))
  }))
  .filter((item) => item.href && item.section);

function setActiveNav(activeHref) {
  navLinks.forEach((link) => {
    if (link.getAttribute("href") === activeHref) {
      link.setAttribute("aria-current", "true");
    } else {
      link.removeAttribute("aria-current");
    }
  });
}

function updateActiveNav() {
  if (observedSections.length === 0) {
    return;
  }

  const headerOffset = (header?.offsetHeight ?? 0) + 90;
  const scrollPosition = window.scrollY + headerOffset;
  const nearBottom =
    window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4;

  let activeHref = "";

  if (nearBottom) {
    activeHref = observedSections[observedSections.length - 1].href;
  } else {
    observedSections.forEach((item) => {
      if (item.section.offsetTop <= scrollPosition) {
        activeHref = item.href;
      }
    });
  }

  setActiveNav(activeHref);
}

if (observedSections.length > 0) {
  let scrollTicking = false;

  window.addEventListener(
    "scroll",
    () => {
      if (scrollTicking) {
        return;
      }

      window.requestAnimationFrame(() => {
        updateActiveNav();
        scrollTicking = false;
      });

      scrollTicking = true;
    },
    { passive: true }
  );

  window.addEventListener("hashchange", updateActiveNav);
  updateActiveNav();
}
