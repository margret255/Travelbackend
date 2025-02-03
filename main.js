const menuBtn = document.getElementById("menu_btn");  // Use the correct ID
const navLinks = document.getElementById("nav_links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
    navLinks.classList.toggle("open");

    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
    origin: "bottom",
    distance: "50px",
    duration: 1000,
    easing: "ease-out",  // Optional: Add easing
};

scrollReveal().reveal(".header__image img", {
    ...scrollRevealOption,
    origin: "right"
});
scrollReveal().reveal(".header__content p", {
    ...scrollRevealOption,
    delay: 500,
});
scrollReveal().reveal(".header__content h1", {
    ...scrollRevealOption,
    delay: 1000,
});
scrollReveal().reveal(".header__btns", {
    ...scrollRevealOption,
    delay: 1500,
});

scrollReveal().reveal(".destination__card", {
    ...scrollRevealOption,
    interval:500,
});
scrollReveal().reveal(".showcase__image img", {
    ...scrollRevealOption,
    origin: "right"
});
scrollReveal().reveal(".showcase__content h4", {
    ...scrollRevealOption,
    delay: 500,
});
scrollReveal().reveal(".showcase__content  p", {
    ...scrollRevealOption,
    delay: 1000,
});
scrollReveal().reveal(".showcase__btn", {
    ...scrollRevealOption,
    delay: 1500,
});
scrollReveal().reveal(".banner__card", {
    ...scrollRevealOption,
    interval:500,
});
scrollReveal().reveal(".discover__card", {
    ...scrollRevealOption,
    interval:500,
});

const swiper = new swiper(".swiper",{
    slidesPerView :3,
    spaceBetween:20,
    loop:true,
})
