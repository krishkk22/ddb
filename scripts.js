let currentSlide = 0;

function changeSlide(direction) {
    const slides = document.querySelectorAll('.carousel-images img');
    currentSlide = (currentSlide + direction + slides.length) % slides.length;
    document.querySelector('.carousel-images').style.transform = `translateX(-${currentSlide * 100}%)`;
}



