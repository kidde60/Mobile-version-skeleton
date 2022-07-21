function openNav() {
    document.getElementById("myNav").style.height = "100%";
}

/* Close */
function closeNav() {
    document.getElementById("myNav").style.height = "0%";
}
let overlay = document.querySelector('#myNav');
let links = document.querySelector('.menu-link');
let links1 = document.querySelector('.menu-link1');
let links2 = document.querySelector('.menu-link2');
links.addEventListener("click", () => {
    if (overlay.style.display === 'block') {
        overlay.style.height = "100%";
    } else {
        overlay.style.height = "0%";
    }

});
links1.addEventListener("click", () => {
    if (overlay.style.display === 'block') {
        overlay.style.height = "100%";
    } else {
        overlay.style.height = "0%";
    }

});
links2.addEventListener("click", () => {
    if (overlay.style.display === 'block') {
        overlay.style.height = "100%";
    } else {
        overlay.style.height = "0%";
    }

});