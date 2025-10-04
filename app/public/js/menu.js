const burgerBtn = document.getElementById("burgerBtn");
const menuNav = document.getElementById("menuNav");
const menuLinks = document.querySelectorAll(".menu li a");

burgerBtn.addEventListener("click", () => {
    menuNav.classList.toggle("active");
    burgerBtn.classList.toggle("open");
});

// fermer le menu après clic sur un lien
menuLinks.forEach(link => {
    link.addEventListener("click", () => {
        menuNav.classList.remove("active");
        burgerBtn.classList.remove("open");
    });
});
