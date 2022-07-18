let checkbox = document.querySelector('.navigation__checkbox');
let menu = document.querySelector('.mobile-view');
checkbox.addEventListener("click", function () {
    if (menu.style.display === 'block') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'block';
    }
});
