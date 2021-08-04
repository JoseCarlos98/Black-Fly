// MENU MOBIL 
const btnMobile = document.querySelector('.btn-mobile');
const nav = document.querySelector('.nav');
const active = nav.classList.contains('active');

function toggleMenu(event) {
if (event.type === 'touchstart') event.preventDefault();
    nav.classList.toggle('active');
    event.currentTarget.setAttribute('aria-expanded', active);
    if (active) {
        event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
    } else {
        event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
    }
}
btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);
