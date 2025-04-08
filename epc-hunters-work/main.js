const burger = document.getElementById("burger");
const burgerMenu = document.getElementById("burger-menu");
const burgerClose = document.getElementById("burger-close");
const burgerLinks = document.querySelectorAll(".burger-link");
const overlay = document.getElementById("overlay");

burger.addEventListener("click", () => {
  burgerMenu.classList.add("burger-menu-open");
  overlay.classList.remove("overlay-none");
});

burgerClose.addEventListener("click", () => {
  burgerMenu.classList.remove("burger-menu-open");
  overlay.classList.add("overlay-none");
});

burgerLinks.forEach(link => {
  link.addEventListener("click", () => {
    burgerMenu.classList.remove("burger-menu-open");
    overlay.classList.add("overlay-none");
  });
});

overlay.addEventListener("click", () => {
  burgerMenu.classList.remove("burger-menu-open");
  overlay.classList.add("overlay-none");
});

// Slider

const swiperCoach = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 0,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  loop: true,
});
