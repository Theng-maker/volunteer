document.addEventListener("DOMContentLoaded", function () {
  "use strict";

  // ====================
  // Darkmode
  // ====================
  let currentThemeSetting = localStorage.getItem("theme") || "light";
  const button = document.querySelector("[data-theme-toggle]");
  if (button) {
    if (currentThemeSetting === "dark") {
      button.innerHTML = '<i class="bi bi-sun"></i>';
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      button.innerHTML = '<i class="bi bi-moon-fill"></i>';
      document.documentElement.setAttribute("data-theme", "light");
    }

    button.addEventListener("click", () => {
      const newTheme = currentThemeSetting === "dark" ? "light" : "dark";
      button.innerHTML =
        newTheme === "dark"
          ? '<i class="bi bi-sun-fill"></i>'
          : '<i class="bi bi-moon-fill"></i>';
      button.setAttribute(
        "aria-label",
        newTheme === "dark" ? "Change to light theme" : "Change to dark theme"
      );
      document.documentElement.setAttribute("data-theme", newTheme);
      localStorage.setItem("theme", newTheme);
      currentThemeSetting = newTheme;
    });
  }

  // ====================
  // Testimonial Swiper
  // ====================
  if (typeof Swiper !== "undefined") {
    new Swiper(".mySwiper", {
      direction: "vertical",
      loop: true,
      speed: 1000,
      autoplay: { delay: 3000, disableOnInteraction: false },
      pagination: { el: ".swiper-pagination", clickable: true },
    });
  }


  // ====================
  // Counter Number (jQuery)
  // ====================
if (typeof $ !== "undefined") {
    $(".counter").each(function () {
      const $el = $(this);
      const countTo = Number($el.data("countto"));
      const duration = Number($el.data("duration")) || 2000;
      $({ val: 0 }).animate(
        { val: countTo },
        {
          duration: duration,
          easing: "linear",
          step: function (now) {
            $el.text(Math.floor(now));
          },
          complete: function () {
            $el.text(countTo);
          },
        }
      );
    });
  }

  // ====================
  // register ORG
  // ====================
  if (
    typeof TomSelect !== "undefined" &&
    document.querySelector("#select-beast")
  ) {
    new TomSelect("#select-beast", {
      create: true,
      sortField: { field: "text", direction: "asc" },
    });
  }

  // ====================
  // File upload
  // ====================
  if (typeof $ !== "undefined") {
    $("#file-browser").click(function (e) {
      e.preventDefault();
      $("#file-upload").trigger("click");
    });
  }

  // ====================
  // Form Validations
  // ====================
  function handleValidation(formId, redirectUrl) {
    const form = document.getElementById(formId);
    if (form) {
      form.addEventListener("submit", function (event) {
        event.preventDefault();
        if (!form.checkValidity()) {
          form.classList.add("was-validated");
        } else {
          window.location.href = redirectUrl;
        }
      });
    }
  }

  // Login form validation
  handleValidation("loginForm", "../homepage.html");
  // register → homepage
  handleValidation("registerForm", "../Authentication/login.html");

  // confirm code login → resetPw
  handleValidation("passwordForm", "../Authentication/resetPw.html");

  // search account → found_acc
  handleValidation("searchForm", "../Authentication/found_acc.html");

  // changrPw → login
  handleValidation("resetForm", "../Authentication/login.html");

  // orgRegisterForm → login
  handleValidation("orgRegisterForm", "../Authentication/login.html");
  // orgloginForm → homepage
  handleValidation("orgloginForm", "../homepage.html");


  // Testimonials
  
  














});











