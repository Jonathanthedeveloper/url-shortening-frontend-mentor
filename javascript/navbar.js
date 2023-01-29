

const navbar = document.querySelector('.navbar');
const mobileNav = document.querySelector('.navbar__list')
const overlay = document.querySelector('.navbar__overlay')
const btn = document.querySelector('.navbar__toggle')



btn.addEventListener('click', function (e) {
    mobileNav.classList.toggle('hide-navbar');
    btn.classList.toggle('clicked');
    overlay.classList.toggle('hide-overlay');
    
})


overlay.addEventListener('click', function(){
    mobileNav.classList.toggle('hide-navbar');
    btn.classList.toggle('clicked');
    overlay.classList.toggle('hide-overlay');
});

document.addEventListener('scroll', function(e){
    mobileNav.classList.add('hide-navbar');
    btn.classList.remove('clicked');
    overlay.classList.add('hide-overlay');
})