// Variáveis do primeiro exercício
let lutador = "Adalberto"
let nacionalidade = "Alemão"
let idade = 23
let peso = 57
let altura = 1.74

// Variáveis do segundo exercício
let dia = 10
let mes = 10
let ano = 2000
let mensagem = "A vida é bela"
let autor = "Adalberto"

// Variáveis do terceiro exercício
let meses = Array('Jan', ' Fev', ' Mar', ' Abr', ' Mai', ' Jun', ' Jul', ' Aug', ' Set', ' Oct', ' Nov', ' Dez')

// Variáveis do quarta exercício
let jogo = {
    Jogo : 'Overwatch',
    Desenvolvido : 'Blizzard',
    Ano : '2016'
}

document.write(`<h2> Informações </h2> <br>
                <p> Lutador: ${lutador} </p>
                <p> Nacionalidade: ${nacionalidade} </p>
                <p> Idade: ${idade} anos </p>
                <p> Peso: ${peso} Kg </p>
                <p> Altura: ${altura} m</p>`)

document.write(`<br> <h2> Frase do Dia </h2> <br>
                <p> ${dia}/${mes}/${ano} </p>
                <p> ${mensagem} </p>
                <p> ${autor} </p>`)

document.write(`<br> <h2> Array de Meses do Ano </h2> <br>
                <p> ${meses} </p>`)

document.write(`<br> <h2> Objeto Jogo </h2> <br>
                <p> Jogo: ${jogo.Jogo} </p>
                <p> Desenvolvido por: ${jogo.Desenvolvido} </p>
                <p> Ano de Lançamento: ${jogo.Ano} </p>`)
