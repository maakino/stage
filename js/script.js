function isMobileDevice() {
    if (navigator.userAgent.match(/iPhone/i)
        || navigator.userAgent.match(/Android/i)

    ) {
        document.querySelectorAll('.bungalowImg').forEach(function (_conteneur) {
            _conteneur.addEventListener('click', () => {
                let hover = _conteneur.querySelector('.bungaon');
                hover.classList.toggle('bungalow__hover');
            })
        })

    }
    else {
        console.log('pc');
        document.querySelectorAll('.bungalowImg').forEach(function (_conteneur) {
            _conteneur.addEventListener('mouseover', () => {
                
                let hover = _conteneur.querySelector('.bungaon');
                hover.classList.add('bungalow__hover');
            })
        })
        
        document.querySelectorAll('.bungalowImg').forEach(function (_conteneur) {
            _conteneur.addEventListener('mouseleave', () => {

                let hover = _conteneur.querySelector('.bungaon');
                hover.classList.remove('bungalow__hover');
            })
        })
        
    }
}

isMobileDevice();

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











