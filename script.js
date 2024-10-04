const menuToggle = document.querySelector('.menu-toggle');
const mobileMenuOverlay = document.querySelector('.mobile-menu-overlay');
const closeMenu = document.querySelector('.close-menu');
const mobileNavLinks = document.querySelectorAll('.mobile-nav-links a');

// Function to open the mobile menu
menuToggle.addEventListener('click', () => {
    mobileMenuOverlay.classList.add('active');
});

// Function to close the mobile menu
closeMenu.addEventListener('click', () => {
    mobileMenuOverlay.classList.remove('active');
});

// Close the mobile menu when a nav link is clicked
mobileNavLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenuOverlay.classList.remove('active');
    });
});

// Auto-scrolling carousel code...
const carousel = document.querySelector('.carousel');
let currentIndex = 0;
let autoScrollInterval;

// Function to update the carousel's position
function updateCarousel() {
    const itemWidth = carousel.children[0].offsetWidth + 10; // Image width + gap
    carousel.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
}

// Function to move to the next slide
function nextSlide() {
    currentIndex++;
    if (currentIndex >= carousel.children.length - 2) { // When reaching the end, loop back to start
        currentIndex = 0;
    }
    updateCarousel();
}

// Start the auto-scroll
function startAutoScroll() {
    autoScrollInterval = setInterval(nextSlide, 3000); // Change slides every 3 seconds
}

// Start auto-scroll on page load
startAutoScroll();
