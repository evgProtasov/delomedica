let slideIndex = 1;

showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n)
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("steps");

    for (i = 0; i < slides.length; i++) {
        slides[i].classList.add('none')
    }
    slides[slideIndex-1].classList.remove('none');
}