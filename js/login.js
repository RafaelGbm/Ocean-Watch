'use strict'
const email = 'teste@gmail.com';
const senha = '1234';
const btn = document.querySelector("#btn-submit");

btn.addEventListener('click', (e) =>{
    
    e.preventDefault()
    
    let emailDigitado = document.querySelector("#email")
    let senhadigitada = document.querySelector("#password")

    if(email != emailDigitado.value || senha != senhadigitada.value)
        alert('Email ou senha incorretas!')
    else{
        alert('Logado com sucesso')
        window.location.href = '../index.html'
        sessionStorage.setItem('login', true)
    }
        
})