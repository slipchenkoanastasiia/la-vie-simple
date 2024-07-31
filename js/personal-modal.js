document.addEventListener('DOMContentLoaded', () => {
    // Отримуємо модальне вікно
    const loginModal = document.getElementById('loginModal');

    // Отримуємо елемент, який відкриває модальне вікно
    const openModalBtn = document.querySelector('.open-login-modal');

    // Отримуємо кнопку закриття модального вікна
    const closeModalBtn = loginModal.querySelector('.close-btn');

    // Додаємо обробник події для відкриття модального вікна
    openModalBtn.addEventListener('click', (event) => {
        event.preventDefault();
        loginModal.style.display = 'block';
    });

    // Додаємо обробник події для закриття модального вікна
    closeModalBtn.addEventListener('click', () => {
        loginModal.style.display = 'none';
    });

    // Додаємо обробник події для закриття модального вікна при натисканні поза ним
    window.addEventListener('click', (event) => {
        if (event.target === loginModal) {
            loginModal.style.display = 'none';
        }
    });

    // Додаємо обробник події для перемикання виду пароля
    document.querySelector('.toggle-password').addEventListener('click', () => {
        const passwordInput = document.getElementById('password');
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);
    });
});
