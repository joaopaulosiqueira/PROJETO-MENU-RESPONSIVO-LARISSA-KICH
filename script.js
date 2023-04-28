function menuShow() {
    let menuMoblie = document.querySelector('.mobile-menu');
    if (menuMoblie.classList.contains('open')){
        menuMoblie.classList.remove('open');
        document.querySelector('.icon').src = "/icons8-menu-squared-50.png";
    } else {
        menuMoblie.classList.add('open');
        document.querySelector('.icon').src = "/icons8-x-50.png";
    }
}