document.querySelector('#product-nav').addEventListener('mouseenter',()=>{
    document.querySelector('.product-select-parent').classList.toggle('show');
})
document.querySelector('#product-nav').addEventListener('mouseleave',()=>{
    document.querySelector('.product-select-parent').classList.toggle('show');
})
document.querySelector('#nav-cart-1').addEventListener('click', ()=>{
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
    let btn=document.querySelector('#nav-cart-1');
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
document.querySelector('#nav-login-1').addEventListener('click',()=>{
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
    let loginbtn=document.querySelector('#nav-login-1');
    if(!login.contains(e.target) && !loginbtn.contains(e.target)){
        document.querySelector('.login-container').classList.remove('active');
        document.querySelector('main').classList.remove('tar');
        document.querySelector('nav').classList.remove('tar');
        document.querySelector('footer').classList.remove('tar');
    }
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
document.querySelector('#nav-login-mobile').addEventListener('click',()=>{
    document.querySelector('.login-container-mobile').classList.toggle('active');
    document.querySelector('main').classList.toggle('tar-mobile');
    document.querySelector('nav').classList.toggle('tar-mobile');
    document.querySelector('footer').classList.toggle('tar-mobile');
    document.querySelector('header').classList.toggle('tar-mobile')
})
document.querySelector('.close-login-mobile').addEventListener('click', ()=>{
    document.querySelector('.login-container-mobile').classList.toggle('active');
    document.querySelector('main').classList.toggle('tar-mobile');
    document.querySelector('nav').classList.toggle('tar-mobile');
    document.querySelector('footer').classList.toggle('tar-mobile');
    document.querySelector('header').classList.toggle('tar-mobile')
})
document.addEventListener('click',(e)=>{
    let login=document.querySelector('.login-container-mobile');
    let loginbtn=document.querySelector('#nav-login-mobile');
    if(!login.contains(e.target) && !loginbtn.contains(e.target)){
        document.querySelector('.login-container-mobile').classList.remove('active');
        document.querySelector('main').classList.remove('tar-mobile');
        document.querySelector('nav').classList.remove('tar-mobile');
        document.querySelector('footer').classList.remove('tar-mobile');
        document.querySelector('header').classList.remove('tar-mobile');
    }
})
document.querySelector('#nav-cart-mobile').addEventListener('click', ()=>{
    document.querySelector('.cart-container-mobile').classList.toggle('active');
    document.querySelector('main').classList.toggle('blur-mobile');
    document.querySelector('nav').classList.toggle('blur-mobile');
    document.querySelector('footer').classList.toggle('blur-mobile');
})
document.querySelector('.cart-close-mobile').addEventListener('click',()=>{
    document.querySelector('.cart-container-mobile').classList.toggle('active');
    document.querySelector('main').classList.toggle('blur-mobile');
    document.querySelector('nav').classList.toggle('blur-mobile');
    document.querySelector('footer').classList.toggle('blur-mobile');
})
document.addEventListener('click',(e)=>{
    let cart=document.querySelector('.cart-container-mobile');
    let btn=document.querySelector('#nav-cart-mobile');
    if(!cart.contains(e.target) && !btn.contains(e.target)){
        document.querySelector('.cart-container-mobile').classList.remove('active');
        document.querySelector('main').classList.remove('blur-mobile');
        document.querySelector('nav').classList.remove('blur-mobile');
        document.querySelector('footer').classList.remove('blur-mobile');
    }
})

const hidepasst=document.querySelector('#hide-pass-mobile');
const passinputt=document.querySelector('#password-mobile');
let visiblee = false;
hidepasst.addEventListener('click',()=>{
    visiblee =  !visiblee;
    if(visiblee){
        hidepasst.src= `${location.origin}/beef/img/hide.png`;
        passinputt.setAttribute('type','text');
    } else{
        hidepasst.src= `${location.origin}/beef/img/show.png`;
        passinputt.setAttribute('type','password');
    }
})