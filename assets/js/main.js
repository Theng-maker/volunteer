// Darkmode
let currentThemeSetting = localStorage.getItem("theme") || "light"; // default light

const button = document.querySelector("[data-theme-toggle]");

if (currentThemeSetting === "dark") {
    button.innerHTML = '<i class="bi bi-sun"></i>';
    document.documentElement.setAttribute("data-theme", "dark");
} else {
    button.innerHTML = '<i class="bi bi-moon-fill"></i>';
    document.documentElement.setAttribute("data-theme", "light");
}

button.addEventListener("click", () => {
    const newTheme = currentThemeSetting === "dark" ? "light" : "dark";

    const newIcon = newTheme === "dark" 
        ? '<i class="bi bi-sun-fill"></i>'   // Light theme icon
        : '<i class="bi bi-moon-fill"></i>'; // Dark theme icon
    button.innerHTML = newIcon;

    const newCta = newTheme === "dark" ? "Change to light theme" : "Change to dark theme";
    button.setAttribute("aria-label", newCta);

    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
    currentThemeSetting = newTheme;
});

// Navbar search