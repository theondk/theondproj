window.addEventListener('DOMContentLoaded', () => {
    const promo = document.querySelector('.promo'),
    menuItem = document.querySelectorAll('.promo_item'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        promo.classList.toggle('promo_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            promo.classList.toggle('promo_active');
        })
    })
})