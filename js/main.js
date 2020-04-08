var header = document.querySelector('.header');
var menuNav = document.querySelector('.menuNav');
var openButton = document.querySelector('.menu__open');
var closeButton = document.querySelector('.menu__close');

openButton.addEventListener('click', function(e){
    header.setAttribute('class', 'isAct');
});
closeButton.addEventListener('click', function(e){
    header.removeAttribute('class', 'isAct');
});
