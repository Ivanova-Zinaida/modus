let btnOpenMenu = document.querySelector('.menu__opnen_btn');
let menu = document.querySelector('.menu__list');
let serchBtnOpen = document.querySelector('.link__search_open');
let portfolioBtnOpen = document.querySelector('.link__portfolio_open');
let portfolioMenu = document.querySelector('.menu-portfolio__list');
let serchForm = document.querySelector('.form-search');
let accordionContainer = document.querySelectorAll('.acordion__item_big');
let accordionTitle = document.querySelectorAll('.accorfion__link');

btnOpenMenu.addEventListener('click', function(e){
    e.preventDefault();
    menu.classList.toggle('active');
});

serchBtnOpen.addEventListener('click', function(e){
    e.preventDefault();
    serchForm.classList.toggle('active-menu');
});
portfolioBtnOpen.addEventListener('click', function(e){
    e.preventDefault();
    portfolioMenu.classList.toggle('active-menu');
});

accordionTitle.forEach(function(item, accordionTitle){
    item.addEventListener('click', function(e) {
    e.preventDefault();
        e.target.parentNode.classList.toggle('active-tabs');
    })
});
