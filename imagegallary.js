function openModal(imagePath) {
    var modal = document.getElementById("myModal");
    var modalImg = document.getElementById("modalImage");
    modal.style.display = "block";
    modalImg.src = imagePath;
}

function closeModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
}