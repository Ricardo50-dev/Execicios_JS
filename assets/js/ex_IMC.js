let nome = document.querySelector('#nome')
let idade = document.querySelector('#idade')
let altura = document.querySelector('#altura')
let peso = document.querySelector('#peso')
let imcElemento = document.querySelector('#imc')
let resultado = document.querySelector('#resultado')

let reset = document.querySelector('#bntReset')
let enviar = document.querySelector('#bntEnviar')

enviar.addEventListener('click', function (e) {

    let altura1 = altura.value
    let peso1 = peso.value

    let imc = (peso1 / (altura1 * altura1)).toFixed(1)
    imcElemento.value = imc
    resultado.textContent = retornaIMC(imc)
    e.preventDefault()

})

reset.addEventListener('click', limpaSpan)

function limpaSpan(){
    resultado.textContent = ""
}

function retornaIMC(imc){
    let situacao = ''
    if (imc < 18.5) {
        situacao = 'Baixo peso'	
    } else if (imc >= 18.5 && imc <= 24.9) {
        situacao = 'Peso normal'
    } else if (imc >= 25 && imc <= 29.9) {
        situacao = 'Sobrepeso'
    } else if (imc >= 30 && imc <= 34.9) {
        situacao = 'Obesidade I'
    } else if (imc >= 35 && imc <= 39.9) {
        situacao = 'Obesidade II'
    } else if (imc >= 40) {
        situacao = 'Obesidade III'
    } else {
        situacao = 'Informe seu peso corretamente'
    }
    return situacao
}

