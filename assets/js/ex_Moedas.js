// Valores da moedas selecionadas
let dolar = 5.87
let euro = 6.36
let libra = 7.59
let bitcoin = 407419.35

// Pegar campos, botões e checkbox
let bntConverter = document.querySelector('.btn-env')
let bntLimpar = document.querySelector('.btn-res')
let inpValor = document.querySelector('.inpValor')
let inpConversao = document.querySelector('.inpTexto')
let moedaSelecionada = document.getElementsByName('moedaEstrangeira')

// Eventos da aplicação
bntLimpar.addEventListener('click', limparCampos)
bntConverter.addEventListener('click', conversao)

// Função para limpar campos
function limparCampos(){
    inpValor.value = ''
    inpConversao.value = ''
    moedaSelecionada[0].checked = false
    moedaSelecionada[1].checked = false
    moedaSelecionada[2].checked = false
    moedaSelecionada[3].checked = false
}

// Função para converter as moedas
function conversao(){
    let valorEmReal = parseFloat(inpValor.value)
    let valorRealFormatado = (valorEmReal).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
    let valorConversao = 0
    let moedaEstrangeira = ''

    for(let i = 0; i < moedaSelecionada.length; i++) {
        if(moedaSelecionada[i].checked) {
            moedaEstrangeira = moedaSelecionada[i].value
        }
    }
    switch(moedaEstrangeira){
        case 'Dolar':
            valorConversao = valorEmReal/dolar
            mensagemFormatada(valorConversao.toLocaleString('en-US', { style: 'currency', currency: 'USD' }), valorRealFormatado, moedaEstrangeira)
            break    
        case 'Euro':
            valorConversao = valorEmReal/euro
            mensagemFormatada(valorConversao.toLocaleString('de-DE', { style: 'currency', currency: 'EUR' }), valorRealFormatado, moedaEstrangeira)
            break
        case 'Libra':
            valorConversao = valorEmReal/libra
            mensagemFormatada(valorConversao.toLocaleString('en-GB', { style: 'currency', currency: 'GBP' }), valorRealFormatado, moedaEstrangeira)
            break
        case 'Bitcoin':
            valorConversao = valorEmReal/bitcoin
            mensagemFormatada(parseFloat(valorConversao).toFixed(5), valorRealFormatado, moedaEstrangeira)
            break
        default:
            inpConversao.value = 'Selecione uma moeda estrageira'
    }
}

// Função para formatar as mensagens
function mensagemFormatada(valorConversao, valorReal, moedaSelecionada){
    inpConversao.value = 'O valor ' + valorReal + ' convertido em ' + moedaSelecionada + ' é ' + valorConversao 
}

// VERIFICAR SE FOI DIGITADO ALGUM VALOR PARA PODER CONVERTER 
function bloquearBotao() {
    if(inpValor.value == 0 || inpValor == '' || inpValor == null) {
        bntConverter.setAttribute('disabled', 'disabled')
        bntConverter.style.background = '#ccc'
        bntConverter.style.cursor = 'not-allowed'
    }
}

// REATIVAR BOTAO
function ativarBotao() {
    if(inpValor.value > 0) {
        bntConverter.removeAttribute('disabled')
        bntConverter.style.background = '#ffc107'
        bntConverter.style.cursor = 'pointer'
    } else {
        console.log('Nao ativou')
    }
}