const menuBurger = document.querySelector('.header__menu-burger');
const menuBurgerLink = document.querySelector('.menu-burger__link-services');

menuBurger.addEventListener("click", function(){
    let container = document.querySelector('.menu-burger__container');
    menuBurger.classList.toggle('none');
    if (menuBurger.classList.contains('none')){
        container.classList.remove('none');
        
    } else {
        container.classList.add('none');
    }   
});

menuBurgerLink.addEventListener("click", function(){
    let menuBurgerList = document.querySelector('.menu-burger__list-services');
    menuBurgerList.classList.toggle('none')
});