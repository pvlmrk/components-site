document.addEventListener("DOMContentLoaded", function () {
    const openModalBtn = document.getElementById("openModalBtn");
    const modal = document.getElementById("modal");
    const overlay = document.getElementById("overlay");
    const joinBtn = document.getElementById("joinBtn");

    openModalBtn.addEventListener("click", function () {
        modal.style.display = "block";
        overlay.style.display = "block";

        void modal.offsetWidth;
        void overlay.offsetWidth;

        modal.classList.add("show");
        overlay.classList.add("show");
    });

    overlay.addEventListener("click", function () {
        modal.classList.remove("show");
        overlay.classList.remove("show");
        
        modal.style.display = "none";
        overlay.style.display = "none";
    });
});