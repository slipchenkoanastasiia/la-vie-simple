function updatePrice() {
    const minPrice = document.getElementById('minPrice').value;
    const maxPrice = document.getElementById('maxPrice').value;
    document.getElementById('minPrice').value = minPrice;
    document.getElementById('maxPrice').value = maxPrice;
}

function setPrice(min, max) {
    document.getElementById('minPrice').value = min;
    document.getElementById('maxPrice').value = max === Infinity ? '' : max;
    updatePrice();
}