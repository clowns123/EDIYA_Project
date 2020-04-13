window.onload = function(){
    var menuOpen = document.querySelector('.header__menu--open');
    var menuClose = document.querySelector('.header__menu--close');
    var menuNav = document.getElementById('menuNav');
    var drink__item = document.querySelectorAll('.drink__item');
    var drink__close = document.querySelectorAll('.drink__close');
    var menu__list = document.querySelector('.menu__list');
    // var focus__h3 = document.getElementsByTagName('h3');
    // var focus__p = document.getElementsByTagName('p');
    // var focus__dt = document.getElementsByTagName('dt');
    // var focus__dd = document.getElementsByTagName('dd');

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

    // 메뉴안 영역 루프 

    menuClose.addEventListener('keydown',function(e){
        if(e.keyCode == 9){
            e.preventDefault();
            menu__list.children[0].children[0].focus();
        }
    })


    // tabIndex 추가 - 적절치않은 사용 

    // for(var a of focus__h3)
    // {
    //     a.setAttribute('tabindex', '0');
    // }

    // for(var b of focus__p){
    //     b.setAttribute('tabindex','0');
    // }

    // for(var c of focus__dt){
    //     c.setAttribute('tabindex','0');
    // }

<<<<<<< HEAD
    for(var d of focus__dd){
        d.setAttribute('tabindex','0');
    }
}
=======
    // for(var d of focus__dd){
    //     d.setAttribute('tabindex','0');
    // }
}
>>>>>>> b0ef3f951f77b0a3c7143c4350b394e2140c3e4b
