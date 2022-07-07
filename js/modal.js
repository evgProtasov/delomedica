const buttonModal = document.querySelector('.form__button--prof');
let modalWindow = document.querySelector('.modal');
const closeModal = document.querySelector('.modal__close');

buttonModal.addEventListener('click', function(){
    modalWindow.classList.remove('none')
});

closeModal.addEventListener('click', function(){
    modalWindow.classList.add('none')
})