function myFunction(x) {
    x.classList.toggle("change");
}
let mobile = document.querySelector('.mobile-view');
let navmenu = document.querySelector('.mobile');
navmenu.addEventListener("click", function () {
    if (mobile.style.display === "block") {
        mobile.style.display = "none";
    } else {
        mobile.style.display = "block";
    }

});
