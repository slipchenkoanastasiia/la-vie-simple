document.querySelector('.basket svg').addEventListener('click', function() {
    var toast = document.getElementById('basket-toast');
    toast.classList.add('show');
    
    setTimeout(function() {
        if (toast.classList.contains('show')) {
            toast.classList.remove('show');
        }
    }, 3000);
});

document.getElementById('close-toast').addEventListener('click', function() {
    var toast = document.getElementById('basket-toast');
    toast.classList.remove('show');
});