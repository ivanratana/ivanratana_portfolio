
document.getElementById('scrollButton').addEventListener('click', function () {
    document.getElementById('portfolio').scrollIntoView({
        behavior: 'smooth'
    });
});

// Image Slider Logic
let currentIndexes = [0, 0]; // Track indexes for multiple sliders

function showImage(sliderId, index) {
    const images = document.querySelectorAll(`#slider${sliderId} .slider-image`);
    images.forEach((img, i) => {
        img.classList.remove('active');
        if (i === index) {
            img.classList.add('active');
        }
    });
}

function prevSlide(sliderId) {
    const images = document.querySelectorAll(`#slider${sliderId} .slider-image`);
    currentIndexes[sliderId - 1] = (currentIndexes[sliderId - 1] > 0)
        ? currentIndexes[sliderId - 1] - 1
        : images.length - 1;
    showImage(sliderId, currentIndexes[sliderId - 1]);
}

function nextSlide(sliderId) {
    const images = document.querySelectorAll(`#slider${sliderId} .slider-image`);
    currentIndexes[sliderId - 1] = (currentIndexes[sliderId - 1] < images.length - 1)
        ? currentIndexes[sliderId - 1] + 1
        : 0;
    showImage(sliderId, currentIndexes[sliderId - 1]);
}
