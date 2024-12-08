// Variaveis
let hora = document.querySelector('.horas');
let minuto = document.querySelector('.minutos');
let segundo = document.querySelector('.segundos');

let semana = document.querySelector('.semana');
let data = document.querySelector('.data_hoje');

let cidade = document.querySelector('.cidade');
let temperatura = document.querySelector('.temperatura')
let umidade = document.querySelector('.umidade')

// Chamada de função
pegarData()
fetchApi()

function move_relogio(){

    let data_agora = new Date()

    let horas = data_agora.getHours()
    let minutos = data_agora.getMinutes() 
    let segundos = data_agora.getSeconds() 

    let strHora    = new String(horas)
    let strMinuto  = new String(minutos)
    let strSegundo = new String(segundos)

    if (strSegundo.length == 1) segundos = "0" + segundos 
    if (strMinuto.length == 1) minutos = "0" + minutos
    if (strHora.length == 1) horas = "0" + horas

    hora.textContent = horas
    minuto.textContent = minutos 
    segundo.textContent = segundos

    setTimeout("move_relogio()", 1000)
}

function pegarData(){
    
    let data_agora = new Date()

    let diaDaSemana = data_agora.getDay()
    let dia = data_agora.getDate()
    let mes = data_agora.getMonth()+1
    let ano = data_agora.getFullYear()

    let strDia = new String(dia)
    let strMes = new String(mes)

    if(strDia.length == 1) mes = '0' + dia
    if(strMes.length == 1) mes = '0' + mes

    switch(diaDaSemana) {
        case 0:
            diaDaSemana = 'DOM'
            break;
        case 1:
            diaDaSemana = 'SEG'
            break;
        case 2:
            diaDaSemana = 'TER'
            break;
        case 3:
            diaDaSemana = 'QUA'
            break;
        case 4:
            diaDaSemana = 'QUI'
            break;
        case 5:
            diaDaSemana = 'SEX'
            break;
        case 6:
            diaDaSemana = 'SÁB'
            break;
    } // fim switch case

    data_cheia = dia + "/" + mes + "/" + ano

    semana.textContent = diaDaSemana
    data.textContent = data_cheia
}
  
function fetchApi() {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=Araxa&APPID=id`
    fetch(url)
    .then((data) => {
        return data.json()
    })
    .then((data) => {
        let tempInCelsius = (data.main.temp-273.15).toFixed(1);
        
        cidade.textContent      = 'Sacramento'
        temperatura.innerHTML = tempInCelsius
        umidade.innerHTML    = data.main.humidity
    })
    .catch((err) => {
        cidade.innerText = `Impossível acessar o OpenWeather. Verifique a sua conexão.`;
        temperatura.innerHTML = `-`;
    })
}