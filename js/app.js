'use strict'
const statusLogin = sessionStorage.getItem('login')

document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll('header ul li a');

    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            targetSection.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {

    
    let loginText = document.querySelector('#loginText')
    if(statusLogin){
        loginText.innerText = 'SAIR'
    }else{
        loginText.innerText = 'LOGIN'
    }
    let currentIndex = 0;
    const images = document.querySelectorAll(".container__images .slider");
    const totalImages = images.length;

    const showImage = index => {
        images.forEach((img, i) => {
            img.classList.toggle("on", i === index);
        });
    };

    const nextImage = () => {
        currentIndex = (currentIndex + 1) % totalImages;
        showImage(currentIndex);
    };

    const prevImage = () => {
        currentIndex = (currentIndex - 1 + totalImages) % totalImages;
        showImage(currentIndex);
    };
    
    // Auto slide
    setInterval(nextImage, 3000); // 3000ms = 3s interval
});

document.querySelector("#loginText").addEventListener('click', ()=>{
    if(statusLogin){
        sessionStorage.removeItem('login')
    }else{
        window.location.href = '../pages/login.html'
    }
})

