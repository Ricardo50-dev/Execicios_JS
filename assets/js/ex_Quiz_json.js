// Vaiaveis
let textoPontucao = document.querySelector('.description')
let numeroQuestao = document.querySelector('.numero')
let enunciado = document.querySelector('.enunciado')
let rangeContagem = document.querySelector('#contagem')
let contagem = document.querySelector('.numContagem')
let card = document.querySelector('.card') 
let certa = document.querySelector('#correct')

// AUDIO
let somAcerto   = document.querySelector('#somAcerto')
let somErro     = document.querySelector('#somErro')
let somAplausos = document.querySelector('#somAplausos')

// Alternativas
let a = document.querySelector('#a')
let b = document.querySelector('#b')
let c = document.querySelector('#c')
let d = document.querySelector('#d')

// Pontuação
let pontucao = 0
// Total de questoes
let totalDeQuestoes = 0

////////////////////////////////////////////////////////////////////////////////////////////////
// ENDERECO DO ARQUIVO JSON
const url = 'assets/json/perguntas.json'

function pegarDados(i) {

  fetch(url).then(response =>{
      
        return response.json();

      }).then(data => {

        if(data.erro) {
          console.log("Erro ao acessar o JSON")
          return
        }
        
        // passe o valor de i no parametro
        atribuirDados(data, i)

      })
      
} // fim pegarDados

// Função para mudar a alternativa
function atribuirDados(dados, i){
    if(i >= dados.questoes.length) {
        //console.log('Fim das questoes')
        i = 1
    }
    // Muda pergunta
    numeroQuestao.textContent = dados.questoes[i].numQuestao 
    enunciado.textContent = dados.questoes[i].pergunta
    // Muda alternativas
    a.textContent = dados.questoes[i].alternativaA
    b.textContent = dados.questoes[i].alternativaB
    c.textContent = dados.questoes[i].alternativaC
    d.textContent = dados.questoes[i].alternativaD
    // Muda range contagem
    rangeContagem.value = parseInt(rangeContagem.value) + 1
    contagem.textContent = dados.questoes[i].numQuestao + ' de 12'
    // Atribui a alternativa correta
    certa.value = dados.questoes[i].correta
}

// COMECAR O QUIZ
pegarDados(1)

function verificaAcertou(resposta){
    let respostaEscolhida = resposta.textContent
    let numQuestao = parseInt(numeroQuestao.textContent)
    let respostaCorreta = certa.value

    if(respostaEscolhida == respostaCorreta){
        pontucao = pontucao + 10
        piscarAcerto()
        somAcerto.play()
    }else{
        piscarErro()
        somErro.play()
    }
    setTimeout(() => {
        pararPiscar()
    }, 250);

    textoPontucao.textContent = "Pontos " + pontucao 
    
    setTimeout(function() {

        proxima = numQuestao+1

        if(proxima > 12) {
            fimDoJogo()
        } else {
            pegarDados(proxima)
        }
    }, 150)
}

function fimDoJogo(){
    somAplausos.play()
    card.classList.add("bloqueiaCard")
    let s = 's'
    pontucao == 0 ? s = '' : s = s
    textoPontucao.textContent = "Fim de Jogo! Você conseguiu " + pontucao + " ponto"+ s
    textoPontucao.classList.add("mensagemFinal")

    setTimeout(function() {
        pontucao = 0 // zerar placar
        //location.reload();
        textoPontucao.classList.remove('mensagemFinal')
        // REINICIAR O JOGO
        card.classList.remove("bloqueiaCard")
        rangeContagem.value = 0
        pegarDados(1)
        textoPontucao.textContent = 'Leia a questão e clique na resposta correta'
    }, 8000)
}

function piscarAcerto(){
    card.classList.add("acerto")
    card.classList.remove("erro")
}
function piscarErro(){
    card.classList.add("erro")
    card.classList.remove("acerto")
}
function pararPiscar(){
    card.classList.remove("erro")
    card.classList.remove("acerto")
}
