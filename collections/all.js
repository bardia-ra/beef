document.querySelector('#product-nav').addEventListener('mouseenter',()=>{
    document.querySelector('.product-select-parent').classList.toggle('show');
})
document.querySelector('#product-nav').addEventListener('mouseleave',()=>{
    document.querySelector('.product-select-parent').classList.toggle('show');
})
document.querySelector('#nav-cart').addEventListener('click', ()=>{
    document.querySelector('.cart-container').classList.toggle('active');
    document.querySelector('main').classList.toggle('blur');
    document.querySelector('nav').classList.toggle('blur');
    document.querySelector('footer').classList.toggle('blur');
})
document.querySelector('.cart-close').addEventListener('click',()=>{
    document.querySelector('.cart-container').classList.toggle('active');
    document.querySelector('main').classList.toggle('blur');
    document.querySelector('nav').classList.toggle('blur');
    document.querySelector('footer').classList.toggle('blur');
})
document.addEventListener('click',(e)=>{
    let cart=document.querySelector('.cart-container');
    let btn=document.querySelector('#nav-cart');
    if(!cart.contains(e.target) && !btn.contains(e.target)){
        document.querySelector('.cart-container').classList.remove('active');
        document.querySelector('main').classList.remove('blur');
        document.querySelector('nav').classList.remove('blur');
        document.querySelector('footer').classList.remove('blur');
    }
})
const hidepass=document.querySelector('#hide-pass');
const passinput=document.querySelector('#password');
let visible = false;
hidepass.addEventListener('click',()=>{
    visible =  !visible;
    if(visible){
        hidepass.src= `${location.origin}/beef/img/hide.png`;
        passinput.setAttribute('type','text');
    } else{
        hidepass.src= `${location.origin}/beef/img/show.png`;
        passinput.setAttribute('type','password');
    }
})
document.querySelector('#nav-login').addEventListener('click',()=>{
    document.querySelector('.login-container').classList.toggle('active');
    document.querySelector('main').classList.toggle('tar');
    document.querySelector('nav').classList.toggle('tar');
    document.querySelector('footer').classList.toggle('tar');
})
document.querySelector('.close-login').addEventListener('click', ()=>{
    document.querySelector('.login-container').classList.toggle('active');
    document.querySelector('main').classList.toggle('tar');
    document.querySelector('nav').classList.toggle('tar');
    document.querySelector('footer').classList.toggle('tar');
})
document.addEventListener('click',(e)=>{
    let login=document.querySelector('.login-container');
    let loginbtn=document.querySelector('#nav-login');
    if(!login.contains(e.target) && !loginbtn.contains(e.target)){
        document.querySelector('.login-container').classList.remove('active');
        document.querySelector('main').classList.remove('tar');
        document.querySelector('nav').classList.remove('tar');
        document.querySelector('footer').classList.remove('tar');
    }
})
document.querySelector('.footer-1').addEventListener('click',()=>{
    document.querySelector('.plus-1').classList.toggle('active');
    document.querySelector('.minus-1').classList.toggle('active');
    document.querySelector('.footer-menu-1').classList.toggle('active');
})
document.querySelector('.footer-2').addEventListener('click',()=>{
    document.querySelector('.plus-2').classList.toggle('active');
    document.querySelector('.minus-2').classList.toggle('active');
    document.querySelector('.footer-menu-2').classList.toggle('active');
})
document.querySelector('.footer-3').addEventListener('click',()=>{
    document.querySelector('.plus-3').classList.toggle('active');
    document.querySelector('.minus-3').classList.toggle('active');
    document.querySelector('.footer-menu-3').classList.toggle('active');
})
document.querySelector('#nav-bar').addEventListener('click',()=>{
    document.querySelector('.side-nav').classList.toggle('active');
    document.querySelector('main').classList.toggle('blurr');
    document.querySelector('header').classList.toggle('blurr');
    document.querySelector('footer').classList.toggle('blurr');
    document.querySelector('.nav-mobile').classList.toggle('blur');
})
document.querySelector('.side-close').addEventListener('click',()=>{
    document.querySelector('.side-nav').classList.toggle('active');
    document.querySelector('main').classList.toggle('blurr');
    document.querySelector('header').classList.toggle('blurr');
    document.querySelector('footer').classList.toggle('blurr');
    document.querySelector('.nav-mobile').classList.toggle('blur');
})
document.addEventListener('click',(e)=>{
    let side=document.querySelector('.side-nav');
    let bar=document.querySelector('#nav-bar');
    if(!side.contains(e.target) && !bar.contains(e.target)){
        document.querySelector('.side-nav').classList.remove('active');
    document.querySelector('main').classList.remove('blurr');
    document.querySelector('header').classList.remove('blurr');
    document.querySelector('footer').classList.remove('blurr');
    document.querySelector('.nav-mobile').classList.remove('blur');
    }
})