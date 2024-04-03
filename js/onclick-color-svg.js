function toggleColor(event) {
    var svgIcon = event.target; // Отримуємо цільовий елемент, на якому спрацював обробник подій
    var isWhite = svgIcon.classList.contains('white-fill');

    if (isWhite) {
        svgIcon.classList.remove('white-fill');
        svgIcon.style.fill = 'none'; // Перевірте, чи правильно задано заповнення SVG
        svgIcon.style.stroke = 'var(--bg-color)'; // Повертаємо колір обрамлення
    } else {
        svgIcon.classList.add('white-fill');
        svgIcon.style.fill = 'white'; // Задаємо білий колір для SVG
        svgIcon.style.stroke = 'none'; // Видаляємо обрамлення
    }
}

