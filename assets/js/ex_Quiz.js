// Vaiaveis
let textoPontucao = document.querySelector('.description')
let numeroQuestao = document.querySelector('.numero')
let enunciado = document.querySelector('.enunciado')
let rangeContagem = document.querySelector('#contagem')
let contagem = document.querySelector('.numContagem')
let card = document.querySelector('.card') 

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

// Perguntas
const q0 = {
    numQuestao   : 0,
    pergunta     : "Pergunta",
    alternativaA : "Alternativa A",
    alternativaB : "Alternativa B",
    alternativaC : "Alternativa C",
    alternativaD : "Alternativa D",
    correta      : "0",
}
const q1 = {
    numQuestao   : 1,
    pergunta     : "Boreal é o mesmo que...",
    alternativaA : "Sul",
    alternativaB : "Leste",
    alternativaC : "Norte",
    alternativaD : "Oeste",
    correta      : "Norte",
}
const q2 = {
    numQuestao   : 2,
    pergunta     : "Qual é a capital do Brasil?",
    alternativaA : "Rio de Janeiro",
    alternativaB : "Brasília",
    alternativaC : "Salvador",
    alternativaD : "Lisboa",
    correta      : "Brasília",
}
const q3 = {
    numQuestao   : 3,
    pergunta     : "Austral é o mesmo que...",
    alternativaA : "Oeste",
    alternativaB : "Leste",
    alternativaC : "Norte",
    alternativaD : "Sul",
    correta      : "Sul",
}
const q4 = {
    numQuestao   : 4,
    pergunta     : "A linha do Equador divide a Terra em...",
    alternativaA : "Leste e Oeste",
    alternativaB : "Norte e Sul",
    alternativaC : "Verão e Inverno",
    alternativaD : "Solstícios e Eclipses",
    correta      : "Norte e Sul",
}
const q5 = {
    numQuestao   : 5,
    pergunta     : "Nascente é o mesmo que...",
    alternativaA : "Lado que o sol nasce",
    alternativaB : "Abaixo do Equador",
    alternativaC : "Lado que o sol se põe",
    alternativaD : "Acima do Equador",
    correta      : "Lado que o sol nasce",
}
const q6 = {
    numQuestao   : 6,
    pergunta     : "Qual é o clima predominante do Brasil?",
    alternativaA : "Polar",
    alternativaB : "Tropical",
    alternativaC : "Desértico",
    alternativaD : "Temperado do Norte",
    correta      : "Tropical",
}
const q7 = {
    numQuestao   : 7,
    pergunta     : "Poente é o mesmo que...",
    alternativaA : "Lado onde o sol se põe",
    alternativaB : "Lado onde o sol nasce",
    alternativaC : "Abaixo do Equador",
    alternativaD : "Acima do Equador",
    correta      : "Lado onde o sol se põe",
}
const q8 = {
    numQuestao   : 8,
    pergunta     : "O Brasil se localiza em qual continente?",
    alternativaA : "África",
    alternativaB : "Europa",
    alternativaC : "Oceania",
    alternativaD : "América",
    correta      : "América",
}
const q9 = {
    numQuestao   : 9,
    pergunta     : "Qual é a única capital do Brasil cortada pela linha do Equador?",
    alternativaA : "Belém",
    alternativaB : "São Luís",
    alternativaC : "Macapá",
    alternativaD : "Boa Vista",
    correta      : "Macapá",
}
const q10 = {
    numQuestao   : 10,
    pergunta     : "Considerando a extensão territorial o Brasil é o ...",
    alternativaA : "3º maior",
    alternativaB : "2º maior",
    alternativaC : "4º maior",
    alternativaD : "5º maior",
    correta      : "5º maior",
}

// CONSTANTE COM UM ARRAY DE OBJETOS COM TODAS AS QUESTOES
const questoes = [q0, q1, q2, q3, q4, q5, q6, q7, q8, q9, q10]

// Configura a primeira pergunta
let totalDeQuestoes = (questoes.length)-1
contagem.textContent = q1.numQuestao + ' de ' + totalDeQuestoes 
// MONTAR A 1a QUESTAO COMPLETA, para iniciar o Quiz
numeroQuestao.textContent = q1.numQuestao
enunciado.textContent   = q1.pergunta
a.textContent = q1.alternativaA
b.textContent = q1.alternativaB
c.textContent = q1.alternativaC
d.textContent = q1.alternativaD

// Função para mudar a alternativa
function mudaAlternativa(numDaQuestao){
    // Muda pergunta
    numeroQuestao.textContent = questoes[numDaQuestao].numQuestao 
    enunciado.textContent = questoes[numDaQuestao].pergunta
    // Muda alternativas
    a.textContent = questoes[numDaQuestao].alternativaA
    b.textContent = questoes[numDaQuestao].alternativaB
    c.textContent = questoes[numDaQuestao].alternativaC
    d.textContent = questoes[numDaQuestao].alternativaD
    // Muda range contagem
    rangeContagem.value = parseInt(rangeContagem.value) + 1
    contagem.textContent = questoes[numDaQuestao].numQuestao + ' de 10'
}

function verificaAcertou(resposta){
    // Passo a passo
    // Pego a variavel correta do objeto
    // Pego a alternativa marcada
    // Comparo se acertou
        // Se é a ultima pergunta 
            // fim de jogo
            // bloqueia card
        // Se não acertou:
            // Pisca vermelho
            // Music de erro
            // pontucao + 0
            // passo para a proxima alternativa
        // Se sim:
            // Pisca verde
            // Music de erro
            // pontucao + 10
            // passo para a proxima alternativa 
    let respostaEscolhida = resposta.textContent
    let numQuestao = parseInt(numeroQuestao.textContent)
    let respostaCorreta = questoes[numQuestao].correta
 
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

        if(proxima > totalDeQuestoes) {
            fimDoJogo()
        } else {
            mudaAlternativa(proxima)
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
        mudaAlternativa(1)
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
