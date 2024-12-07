
let numeroSecreto = 0
let min = 1
let max = 10

let musica = document.querySelector('#musicaDeFundo')
let bntMusica = document.querySelector('#bntMusica')
let bntChute = document.querySelector('#bntChute')
let inputChute = document.querySelector('#inputChute')
let aviso = document.querySelector('#aviso')

bntMusica.addEventListener('click', ativarDesativarMusica)
inputChute.addEventListener('click', tocaMusica)

function tocaMusica() {
    musica.play()
}

function ativarDesativarMusica(){
    if( musica.muted ){
        musica.muted = false;
    }else{
        musica.muted = true;
    }
}

function jogar(){
    verificaSeAcertou()
}

function verificaSeAcertou(){
    let valor = parseInt(inputChute.value)
    if(valor === numeroSecreto){
        aviso.classList.add('acertou')
        mensagemRapida("Parabéns!!! Você acertou!!!")
        criaNumero()
    }else if (valor > numeroSecreto) {
        aviso.classList.add('errou')
        mensagemRapida("Valor maior! Tente um número menor!")
    } else if (valor < numeroSecreto) {
        aviso.classList.add('errou')
        mensagemRapida("Valor menor! Tente um número maior!")
    } else {
        console.log('Impossível verificar se acertou!')
    }
}

function criaNumero(){
    numeroSecreto = Math.floor(Math.random() * (max - min + 1)) + min
}

function mensagemRapida(mensagem) {
    aviso.textContent = mensagem
    setTimeout(function() {
        aviso.textContent = ""
        aviso.classList.remove('acertou')
        aviso.classList.remove('errou')
        inputChute.value = ''
    }, 3000)
}