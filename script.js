document.addEventListener("DOMContentLoaded", () => {

  /* =========================
     CURRENT YEAR
  ========================= */

  const year = document.getElementById("year");

  if (year) {
    year.textContent = new Date().getFullYear();
  }


  /* =========================
     MOBILE MENU
  ========================= */

  const menuButton = document.querySelector(".menu-button");
  const nav = document.getElementById("nav-links");

  if (menuButton && nav) {

    menuButton.addEventListener("click", () => {

      const isOpen = nav.classList.toggle("open");

      menuButton.setAttribute(
        "aria-expanded",
        isOpen ? "true" : "false"
      );

      menuButton.textContent = isOpen ? "Close" : "Menu";

    });


    /* Close menu after clicking a link */

    const navLinks = nav.querySelectorAll("a");

    navLinks.forEach(link => {

      link.addEventListener("click", () => {

        nav.classList.remove("open");

        menuButton.setAttribute(
          "aria-expanded",
          "false"
        );

        menuButton.textContent = "Menu";

      });

    });

  }


  /* =========================
     SCROLL REVEAL
  ========================= */

  const revealElements = document.querySelectorAll(".reveal");

  if ("IntersectionObserver" in window) {

    const revealObserver = new IntersectionObserver(
      (entries, observer) => {

        entries.forEach(entry => {

          if (entry.isIntersecting) {

            entry.target.classList.add("visible");

            observer.unobserve(entry.target);

          }

        });

      },
      {
        threshold: 0.12
      }
    );

    revealElements.forEach(element => {
      revealObserver.observe(element);
    });

  } else {

    revealElements.forEach(element => {
      element.classList.add("visible");
    });

  }


  /* =========================
     SMOOTH SCROLL
  ========================= */

  document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", event => {

      const targetId = link.getAttribute("href");

      if (!targetId || targetId === "#") {
        return;
      }

      const target = document.querySelector(targetId);

      if (!target) {
        return;
      }

      event.preventDefault();

      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });

    });

  });

});