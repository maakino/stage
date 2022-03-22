let burger = document.getElementById('burger');
let nav = document.getElementById('nav');
let link = document.querySelectorAll('.header__navbar-list');

function toogleclick() {
    nav.classList.toggle('header__navbar')
}

burger.addEventListener('click', toogleclick);
link.forEach(function (link) {
    link.addEventListener('click', toogleclick);
})

