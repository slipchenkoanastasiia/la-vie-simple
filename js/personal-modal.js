document.addEventListener('DOMContentLoaded', function() {
    fetch('personal-modal.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('modalContainer').innerHTML = data;

            document.querySelector('.link-icon').addEventListener('click', function(event) {
                event.preventDefault();
                document.getElementById('loginModal').style.display = 'block';
            });

            document.querySelector('.close-btn').addEventListener('click', function() {
                document.getElementById('loginModal').style.display = 'none';
            });

            document.querySelector('.toggle-password').addEventListener('click', function() {
                const passwordInput = document.getElementById('password');
                const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
                passwordInput.setAttribute('type', type);
            });
        })
        .catch(error => console.error('Error loading modal:', error));
});
