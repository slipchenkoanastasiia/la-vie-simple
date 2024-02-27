document.addEventListener('DOMContentLoaded', function() {
    const movingText = document.querySelector('.moving-text');

    if (movingText) {
        const textContent = movingText.textContent;
        const repeatCount = Math.ceil(movingText.offsetWidth / 10);

        movingText.textContent = textContent.repeat(repeatCount);
    } else {
        console.error('Елемент з класом "moving-text" не знайдений.');
    }
});
