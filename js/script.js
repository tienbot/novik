let body = document.querySelector('body');
let burger = document.querySelector('.burger');
let close = document.querySelector('.close');
let navigation = document.querySelector('.navigation');

burger.onclick = function() {
    document.querySelector('.navigation').classList.add('navigation__open');
    body.style.overflow = 'hidden';
};

close.onclick = function() {
    document.querySelector('.navigation').classList.remove('navigation__open');
    body.style.overflow = null;
};

navigation.onclick = function() {
    document.querySelector('.navigation').classList.remove('navigation__open');
    body.style.overflow = null;
};

