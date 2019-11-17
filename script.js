'use strict';

let slideIndex = 1,
    slides = document.querySelectorAll('.slider_wrap_item'),
    prev = document.querySelector('.prev'),
    next = document.querySelector('.next'),
    dotsWrap = document.querySelector('.slider_dots'),
    dots = document.querySelectorAll('.dot');

function showSlides(n) {
    if(n > slides.length){
        slideIndex = 1;
    }

    if (n < 1){
        slideIndex = slides.length;
    }

    slides.forEach(item => item.style.display = 'none');
    dots.forEach(item => item.classList.remove('dot_active'));

    slides[slideIndex - 1].style.display = 'block';
    dots[slideIndex - 1].classList.add('dot_active');
}

function plusSlides(n) {
    showSlides(slideIndex += n)
}

function currentSlidee(n) {
    showSlides(slideIndex = n)
}

prev.addEventListener("click", function() {
    plusSlides(-1);
});


next.addEventListener("click", function() {
    plusSlides(1);
});

dotsWrap.addEventListener("click",function(event) {
    for(let i = 0; i < dots.length + 1; i++){
        if(event.target.classList.contains('dot') && event.target == dots[i-1]) {
            currentSlidee(i);
        }
    }
})

showSlides(slideIndex);

