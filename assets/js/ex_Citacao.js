// Variaveis
let citacao00      = document.querySelector('.citacaoIMG')
let dataCitacao    = citacao00.querySelector('h2')
let textoCitacao   = citacao00.querySelector('blockquote')
let autoriaCitacao = citacao00.querySelector('span')

let data = document.querySelector('#data')
let citacao = document.querySelector('#citacao')
let autoria = document.querySelector('#autor')

let bCriar = document.querySelector('.btn-criar')
let bLimpar = document.querySelector('.btn-limpar')

// Eventos
bLimpar.addEventListener('click', limpar)
bCriar.addEventListener('click', criarCitacao)

function limpar(){
    document.location.reload()
    window.scroll(0,0)
}

function criarCitacao(){
    let data1 = data.value
    let citacao1 = citacao.value
    let autoria1 = autoria.value

    let data2 = new Date(data1)
    let dataFormatada = data2.toLocaleDateString('pt-BR', {timeZone: 'UTC'});

    if(data1 == ""|| citacao1 == "" || autoria1 == ""){
        chamaModal()
    }else{
        criarMensagem(dataFormatada, citacao1, autoria1)
        window.scroll(0,670)
    }
}

function criarMensagem(dataF, cit, aut){
    dataCitacao.textContent    = dataF
    textoCitacao.textContent   = cit
    autoriaCitacao.textContent = aut
    dowload()
}

function dowload(){
    html2canvas(citacao00).then(canvas => {
        citacao00.style.display =  'none'
        document.querySelector('.conteudo').appendChild(canvas)
    })

    let aviso2 = document.querySelector('#aviso2')
    aviso2.textContent = "Clique com o botão direito e escolha Salvar imagem como..."
}

function chamaModal(){
    location.href="#abrirModal"
}