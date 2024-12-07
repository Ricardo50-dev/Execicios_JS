// VARIAVEIS
let sectionConteudos = document.querySelector('.conteudos')

// SELECIONAR TODOS OS CARDS por class
let imgsFoto           = document.getElementsByClassName('foto')
let nomesHeroi         = document.getElementsByClassName('nome')
let nacionalidadeHeroi = document.getElementsByClassName('nacionalidade')
let idadeHeroi         = document.getElementsByClassName('idade')
let pesoHeroi          = document.getElementsByClassName('peso')
let alturaHeroi        = document.getElementsByClassName('altura')

// ENDERECO DO ARQUIVO JSON
const url = 'assets/json/herois.json'

function pegarDados(i) {
  fetch(url)
    .then( response => response.json() )
    .then( dados => {
        if(dados.erro) {
            console.log("Erro ao acessar o JSON")
            return
        }
        // passe o valor de i no parametro
        atribuirDados(dados, i)
    })
} // fim pegarDados

function desenharCard(i){
    // CARD
    let carta = document.createElement("article")
    carta.setAttribute('class', 'card')
    sectionConteudos.appendChild(carta)

    // IMAGEM DENTRO DO CARD
    let imagem = document.createElement("img")
    carta.appendChild(imagem)
    imagem.setAttribute('class', 'foto')
    imagem.setAttribute('src', 'images/pride/pride_fc.jpg')

    // NOME DO HEROI
    let nomeHeroi = document.createElement("h2")
    nomeHeroi.setAttribute('class', 'nome')
    carta.appendChild(nomeHeroi)
    nomeHeroi.textContent = "Nome"

    // NACIONALIDADE DO HEROI
    let nacionalidadeHerois = document.createElement("h3")
    nacionalidadeHerois.setAttribute('class', 'nacionalidade')
    carta.appendChild(nacionalidadeHerois)
    nacionalidadeHerois.textContent = "Nacionalidade"

    // IDADE DO HEROI
    let idadeHeroi = document.createElement("h3")
    idadeHeroi.setAttribute('class', 'idade')
    carta.appendChild(idadeHeroi)
    idadeHeroi.textContent = "idade anos" 

    // PESO DO HEROI
    let pesoHeroi = document.createElement("h3")
    pesoHeroi.setAttribute('class', 'peso')
    carta.appendChild(pesoHeroi)
    pesoHeroi.textContent = "peso Kg" 

    // ALTURA DO HEROI
    let alturaHeroi = document.createElement("h3")
    alturaHeroi.setAttribute('class', 'altura')
    carta.appendChild(alturaHeroi)
    alturaHeroi.textContent = "altura m" 

    pegarDados(i)
}

function atribuirDados(hero, i){
    imgsFoto[i].setAttribute('src', "assets/img/cards/"+hero.herois[i].foto)
    nomesHeroi[i].textContent         = hero.herois[i].nome
    nacionalidadeHeroi[i].textContent = hero.herois[i].nacionalidade
    idadeHeroi[i].textContent         = hero.herois[i].idade + " anos"
    pesoHeroi[i].textContent          = hero.herois[i].peso + " Kg"
    alturaHeroi[i].textContent        = hero.herois[i].altura + " m"
}

for(let i=0; i<10; i++){
    desenharCard(i)
}