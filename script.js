let toggleBtn = document.querySelector('.header__burger');
let header = document.querySelector('.header');
let body = document.querySelector('body');

toggleBtn.addEventListener('click', () =>{
    header.classList.toggle('active');
    body.classList.toggle('unabescroll');
});

window.onscroll = () => {
    this.scrollY > 20
        ? header.classList.add('sticky')
        : header.classList.remove('sticky');
};