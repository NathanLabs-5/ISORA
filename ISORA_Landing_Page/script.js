const hero = document.querySelector(".hero");
const background = document.querySelector(".hero-bg");
const mountains = document.querySelector(".hero-mountains");


// Menu mobile
const menuToggle = document.querySelector("#menuToggle");
const navigation = document.querySelector("#navigation");

menuToggle.addEventListener("click", () => {
    const isOpen = navigation.classList.toggle("open");

    menuToggle.setAttribute("aria-expanded", isOpen);
});

// Paginação
const pages = document.querySelectorAll(".page-num");

pages.forEach((page) => {
    page.addEventListener("click", () => {
        pages.forEach((item) => item.classList.remove("active"));
        page.classList.add("active");
    });
});

// Pesquisa
const searchButton = document.querySelector(".nav-actions .icon-btn");

searchButton.addEventListener("click", () => {
    alert("Pesquisa em desenvolvimento!");
});