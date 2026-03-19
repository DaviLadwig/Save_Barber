const toggle = document.getElementById("menu-toggle");
const nav = document.querySelector(".nav");

toggle.addEventListener("click", () => {
    nav.classList.toggle("active");
});

//CARROSSEL DE FEEDBACKS

const track = document.querySelector(".carousel-track");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");

let index = 0;

function updateCarousel() {
    const cardWidth = document.querySelector(".feedback-card").offsetWidth + 30;
    track.style.transform = `translateX(-${index * cardWidth}px)`;
}

next.addEventListener("click", () => {
    if (index < 2) {
        index++;
        updateCarousel();
    }
});

prev.addEventListener("click", () => {
    if (index > 0) {
        index--;
        updateCarousel();
    }
});

/* autoplay */
setInterval(() => {
    index = (index + 1) % 3;
    updateCarousel();
}, 4000);