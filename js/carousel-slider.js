document.addEventListener('DOMContentLoaded', function() {
    const carouselWrapper = document.querySelector('.carousel-wrapper');
    let scrollInterval;

    function autoScroll() {
        let scrollAmount = 1; 
        let scrollDelay = 10; 
        let initialDelay = 2000; 

        function smoothScroll() {
            if (carouselWrapper.scrollLeft < carouselWrapper.scrollWidth - carouselWrapper.clientWidth) {
                carouselWrapper.scrollLeft += scrollAmount;
                setTimeout(smoothScroll, scrollDelay);
            }
        }

        setTimeout(smoothScroll, initialDelay);
    }

    function stopAutoScroll() {
        clearInterval(scrollInterval);
    }

    function startAutoScroll() {
        scrollInterval = setInterval(autoScroll, 2000); 
    }

    const slides = document.querySelectorAll('.carousel-slide');

    slides.forEach(slide => {
        slide.addEventListener('mouseover', stopAutoScroll);
        slide.addEventListener('mouseout', startAutoScroll);
    });

    const prevButton = document.querySelector('.carousel-control.prev');
    const nextButton = document.querySelector('.carousel-control.next');

    const slideWidth = 389; 

    prevButton.addEventListener('click', function() {
        carouselWrapper.scrollLeft -= slideWidth * 2; 
    });

    nextButton.addEventListener('click', function() {
        carouselWrapper.scrollLeft += slideWidth * 2; 
    });
});
