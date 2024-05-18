const footer = document.querySelector('.footer');
const productInfoFixed = document.querySelector('.product-info-fixed');
const footerHeight = footer.offsetHeight;

function toggleProductInfoFixed() {
    const scrollPosition = window.scrollY;

    if (scrollPosition > 0 && scrollPosition < window.innerHeight) {
        productInfoFixed.classList.add('visible');
    } else {
        productInfoFixed.classList.remove('visible');
    }
}

window.addEventListener('scroll', toggleProductInfoFixed);
toggleProductInfoFixed();
