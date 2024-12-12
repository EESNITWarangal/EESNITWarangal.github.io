// Slider functionality
let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;

    if (index >= totalSlides) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = totalSlides - 1;
    } else {
        currentSlide = index;
    }

    slides.forEach((slide, i) => {
        slide.style.display = i === currentSlide ? 'block' : 'none';
    });

    updateDots();
}

function updateDots() {
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === currentSlide);
    });
}

// Navigation controls
function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

// Auto-slide functionality
setInterval(() => {
    showSlide(currentSlide + 1);
}, 3000); // Change slide every 3 seconds

// Initializing slider on page load
document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentSlide); // Display the first slide initially
});
// Function to open the popup
function openPopup(popupNumber) {
    document.getElementById("popup" + popupNumber).style.display = "flex";
}

// Function to close the popup
function closePopup(popupNumber) {
    document.getElementById("popup" + popupNumber).style.display = "none";
}



