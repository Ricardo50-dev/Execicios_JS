let bntEscuro = document.querySelector('#esc')
let bntClaro = document.querySelector('#cla')
let tela = document.querySelector('body')

bntEscuro.addEventListener('click', modoDark)
bntClaro.addEventListener('click', modoLight)

function modoLight(){
    tela.classList.add('light')
    tela.classList.remove('dark')
}

function modoDark(){
    tela.classList.add('dark')
    tela.classList.remove('light')
}