/* slider*/

let slider = document.querySelector('.slider');
let sliderItems = document.querySelectorAll('.slider__item_main');
let sliderIndicator = document.querySelector('.slider-indicator');
let sliderIndicatorItems = document.querySelectorAll('.slider-indicator__item');
let sliderArrowLeft = document.querySelector('.slider__arrow_left');
let sliderArrowRight = document.querySelector('.slider__arrow_right');


/*function sliderGo(sliderIndicatorItems, sliderArrowLeft, sliderItems){
    sliderArrowLeft.addEventListener('click', function(e){
        e.preventDefault();
        sliderItems.forEach(function(item){
            item.classList.add('active_slide');
        })

    })
    sliderArrowRight.addEventListener('click', function(e){
        e.preventDefault();
        sliderItems.forEach(function(item){
            item.classList.add('active_slide');
        })
    })
    
}*/




/*
function goSlder(sliderItems){
    let i = 0
     if(i >= sliderItems.length - 1){
        i = 0;
        console.log('function go 1')
     }
     sliderItems[i].classList.remove('slider__item_main_active');
    i = i + 1;
    sliderItems[i].classList.add('slider__item_main_active');
    console.log('function go')
    }

*/

var slideIndex = 1;
showSlides(slideIndex);

/* Функция увеличивает индекс на 1, показывает следующй слайд*/
function plusSlide() {
    showSlides(slideIndex += 1);
}

/* Функция уменьшяет индекс на 1, показывает предыдущий слайд*/
function minusSlide() {
    showSlides(slideIndex -= 1);  
}

/* Устанавливает текущий слайд */
function currentSlide(n) {
    showSlides(slideIndex = n);
}

/* Основная функция слайдера */
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("item");
    var dots = document.getElementsByClassName("slider-dots_item");
    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
       slideIndex = 1
 }
    if (n < 1) {
       slideIndex = slides.length
}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active","");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

let slideIndex = 0;
 showSlides();
   
 function showSlides() {
 let i;
 let slides = document.querySelectorAll('.slider__item_main');
    for (i = 0; i < slides.length; i++ ){
        sliderItems[i].classList.remove('slider__item_main_active');
    }
 slideIndex++;
    if (slideIndex > slides.length) { 
       slideIndex = 1;
}
    sliderItems[slideIndex-1].classList.add('slider__item_main_active');
    setTimeout(showSlides, 5000);
 }
    
 
let i = 0;
sliderArrowLeft.addEventListener('click', function(e){
     e.preventDefault();
    
    sliderItems[i].classList.remove('slider__item_main_active');
    i = i - 1;
    if(i < 0){
        i = sliderItems.length - 1;
    }
    sliderItems[i].classList.add('slider__item_main_active');

    });
sliderArrowRight.addEventListener('click', function(e){
     e.preventDefault();
    sliderItems[i].classList.remove('slider__item_main_active');
    i = i + 1;
    if(i > sliderItems.length - 1){
        i = 0;
    }
    sliderItems[i].classList.add('slider__item_main_active');

    });

/* sliderArrowRight.onclick = function(e){
     e.preventDefault();
    sliderItems[i].classList.remove('slider__item_main_active');
    i = i - 1;
    if(i < 0){
        i = sliderItems.length - 1;
    }
    sliderItems[i].classList.add('slider__item_main_active');
}*/



