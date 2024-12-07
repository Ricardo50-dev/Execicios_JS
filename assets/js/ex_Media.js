let nota1 = document.querySelector('#nota1')
let nota2 = document.querySelector('#nota2')
let mediaCampo = document.querySelector('#media-campo')
let situacao = document.querySelector('#sit')

let enviar = document.querySelector('.btn-env')
let limpar = document.querySelector('.btn-res')

let aviso = document.querySelector('#aviso')
let formulario = document.querySelector('form')

enviar.addEventListener('click', function (e) {

    let nota11 = parseFloat(nota1.value)
    let nota22 = parseFloat(nota2.value)

    let media = ((nota11 + nota22) / 2).toFixed(1)
    mediaCampo.value = media
    mudaSituacao(media)

    e.preventDefault()

})

limpar.addEventListener('click', limpaCor) 

function mudaSituacao(media){
    if (media < 6){
        situacao.classList.add('reprovado')
        situacao.classList.remove('recuperacao')
        situacao.classList.remove('aprovado')
        situacao.value = "Reprovado!"
    }else if (media >= 6 && media < 7){
        situacao.classList.add('recuperacao')
        situacao.classList.remove('reprovado')
        situacao.classList.remove('aprovado')
        situacao.value = "Recuperacao!"
    }else{
        situacao.classList.add('aprovado')
        situacao.classList.remove('reprovado')
        situacao.classList.remove('recuperacao')
        situacao.value = "Aprovado!"
    }
}

function limpaCor(){
    situacao.classList.remove('reprovado')
    situacao.classList.remove('recuperacao')
    situacao.classList.remove('aprovado')
}

function validarNumero(numero) {
    let num1 = nota1.value
    let num2 = nota2.value
    if(num1 < 0 || num1 > 10 || num2 < 0 || num2 > 10) {
        formulario.reset() // limpar form
        aviso.textContent = 'Digite uma nota entre 0.0 e 10.0'
        aviso.classList.add('alerta')
        setTimeout(function(){
            aviso.textContent = ''
            aviso.classList.remove('alerta')
        }, 2000);
    }
}