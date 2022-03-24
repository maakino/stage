function isMobileDevice() {
    if (navigator.userAgent.match(/iPhone/i)
        || navigator.userAgent.match(/webOS/i)
        || navigator.userAgent.match(/Android/i)
        || navigator.userAgent.match(/iPad/i)
        || navigator.userAgent.match(/iPod/i)
        || navigator.userAgent.match(/BlackBerry/i)
        || navigator.userAgent.match(/Windows Phone/i)
    ) {
        document.querySelectorAll('.bungalowImg').forEach(function (_conteneur) {
            _conteneur.addEventListener('click', () => {
                let hover = _conteneur.querySelector('.bungaon');
                hover.classList.toggle('bungalow__hover');
            })
        })
    }
    else {
        return false;
    }
}

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

document.querySelectorAll('.bungalowImg').forEach(function (_conteneur) {
    _conteneur.addEventListener('click', () => {
        let hover = _conteneur.querySelector('.bungaon');
        hover.classList.toggle('bungalow__hover');
    })
})






