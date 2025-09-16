document.addEventListener("DOMContentLoaded", function () {
  "use strict";
  // Darkmode
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
  // Testimonial Swiper
  if (typeof Swiper !== "undefined") {
    new Swiper(".mySwiper", {
      direction: "vertical",
      loop: true,
      speed: 1000,
      autoplay: { delay: 3000, disableOnInteraction: false },
      pagination: { el: ".swiper-pagination", clickable: true },
    });
  }

  // Counter Number (jQuery)
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

  // File upload
  if (typeof $ !== "undefined") {
    $("#file-browser").click(function (e) {
      e.preventDefault();
      $("#file-upload").trigger("click");
    });
  }

  // Form Validations
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
  // register ORG
  if (
    typeof TomSelect !== "undefined" &&
    document.querySelector("#select-beast")
  ) {
    new TomSelect("#select-beast", {
      create: true,
      sortField: { field: "text", direction: "asc" },
    });
  }

  // Login form validation
  handleValidation("loginForm", "../homepage.html");
  // register → homepage
  handleValidation("registerForm", "../Authentication/login.html");
  // confirm code login → resetPw
  handleValidation("passwordForm", "../Authentication/resetPw.html");
  // search account → found_acc
  handleValidation("searchForm", "../Authentication/comfirmCode.html");
  // changrPw → login
  handleValidation("resetForm", "../Authentication/login.html");
  // orgRegisterForm → login
  handleValidation("orgRegisterForm", "../Authentication/orglogin.html");
  // orgloginForm → homepage
  handleValidation("orgloginForm", "../orghomepage.html");
  handleValidation("orgforgetForm", "../Authentication/orgComfirm.html");
  handleValidation("orgCfForm", "../Authentication/orgResetpw.html");
  handleValidation("orgresetForm", "../Authentication/orgLogin.html");
  handleValidation("orgloginForm", "../homepage.html");
  //DOnation
  $(".donate-btn").hover(
    function () {
      $(this)
        .closest(".donation-card")
        .find(".card-img")
        .css("transform", "scale(1.08)");
    },
    function () {
      $(this)
        .closest(".donation-card")
        .find(".card-img")
        .css("transform", "scale(1)");
    }
  );

  // Sponsor

  var swiper = new Swiper(".sponsor-slider", {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      "@0.00": {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      "@0.75": {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      "@1.00": {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      "@1.50": {
        slidesPerView: 4,
        spaceBetween: 40,
      },
      "@2.00": {
        slidesPerView: 5,
        spaceBetween: 50,
      },
    },
  });
});
