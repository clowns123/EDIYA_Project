window.onload = function(){
    var menuOpen = document.querySelector('.menu__open');
    var menuClose = document.querySelector('.menu__close');
    var menuNav = document.getElementById('menuNav');
    var drink__item = document.querySelectorAll('.drink__item');
    var drink__close = document.querySelectorAll('.drink__close');
    var menu__item = document.querySelector('.menu__item')
    var menu__list = document.querySelector('.menu__list')

    // 메뉴 슬라이드
    menuOpen.addEventListener('click', function (e) {
        menuNav.classList.add('isAct');
    })
    menuClose.addEventListener('click', function (e) {
        menuNav.classList.remove('isAct');
    })
    menuClose.addEventListener('keydown', e => {
        if(e.keyCode === 9){
            e.preventDefault();
            menu__list.children[0].children[0].focus();
        } 
    })
    
    for (var a of drink__item){
        a.addEventListener('click', function(e){
            e.preventDefault();
            this.classList.remove('close')
            this.classList.add('open')
        })
    }
    for(var b of drink__close){
        b.addEventListener('click', function(e){
            this.parentNode.parentNode.classList.remove('open')
            this.parentNode.parentNode.classList.add('close')
            e.stopPropagation();
        })
    }
}
