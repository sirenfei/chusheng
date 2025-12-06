let currentIndex = 0;
let autoPlayInterval;

function showSlide(index) {
    const items = document.querySelectorAll('.carousel-item');
    const dots = document.querySelectorAll('.dot');
    
    if (index >= items.length) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = items.length - 1;
    } else {
        currentIndex = index;
    }
    
    items.forEach(item => item.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    items[currentIndex].classList.add('active');
    dots[currentIndex].classList.add('active');
}

function nextSlide() {
    clearAutoPlay();
    showSlide(currentIndex + 1);
    autoPlay();
}

function prevSlide() {
    clearAutoPlay();
    showSlide(currentIndex - 1);
    autoPlay();
}

function currentSlide(index) {
    clearAutoPlay();
    showSlide(index);
    autoPlay();
}

function autoPlay() {
    autoPlayInterval = setInterval(() => {
        showSlide(currentIndex + 1);
    }, 5000);
}

function clearAutoPlay() {
    if (autoPlayInterval) {
        clearInterval(autoPlayInterval);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const prevBtn = document.querySelector('.carousel-prev');
    const nextBtn = document.querySelector('.carousel-next');
    
    if (prevBtn) prevBtn.addEventListener('click', prevSlide);
    if (nextBtn) nextBtn.addEventListener('click', nextSlide);
    
    autoPlay();
});
