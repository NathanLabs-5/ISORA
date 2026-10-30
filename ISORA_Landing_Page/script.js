const hero = document.querySelector(".hero");
const background = document.querySelector(".hero-bg");
const mountains = document.querySelector(".hero-mountains");

// Efeito de profundidade com o movimento do mouse
hero.addEventListener("mousemove", (event) => {
    if (window.innerWidth <= 760) return;

    const x = (event.clientX / window.innerWidth - 0.5);
    const y = (event.clientY / window.innerHeight - 0.5);

    // O fundo se movimenta menos
    background.style.transform = `
        scale(1.08)
        translate(${x * -15}px, ${y * -15}px)
    `;

    // As montanhas se movimentam um pouco mais
    mountains.style.transform = `
        translate(${x * -25}px, ${y * -25}px)
    `;
});

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