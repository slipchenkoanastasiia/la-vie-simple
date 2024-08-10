document.addEventListener('DOMContentLoaded', () => {
    const loginModal = document.getElementById('loginModal');
    const openModalBtn = document.querySelector('.open-login-modal');
    const closeModalBtn = loginModal.querySelector('.close-btn');

    openModalBtn.addEventListener('click', (event) => {
        event.preventDefault();
        loginModal.style.display = 'flex';
    });

    closeModalBtn.addEventListener('click', () => {
        loginModal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === loginModal) {
            loginModal.style.display = 'none';
        }
    });

    document.querySelector('.toggle-password').addEventListener('click', () => {
        const passwordInput = document.getElementById('password');
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);
    });
});
