function openModal() {
    let modal = document.getElementById("myModal");
    modal.style.display = "flex"; 
}

window.onload = function() {
    setTimeout(openModal, 2000);
};

let closeBtn = document.querySelector(".close");

function closeModal() {
    let modal = document.getElementById("myModal");
    modal.style.display = "none";
}

closeBtn.addEventListener("click", closeModal);
