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

function increaseMinPrice() {
    const minPriceInput = document.getElementById('minPrice');
    let minPrice = parseInt(minPriceInput.value, 10);

    if (!isNaN(minPrice)) {
        minPrice += 1000; 
        minPriceInput.value = minPrice;
        updatePrice();
    }
}

function decreaseMaxPrice() {
    const maxPriceInput = document.getElementById('maxPrice');
    let maxPrice = parseInt(maxPriceInput.value, 10);

    if (!isNaN(maxPrice)) {
        maxPrice -= 1000; 
        maxPriceInput.value = maxPrice;
        updatePrice();
    }
}