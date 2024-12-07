// Pega valores e range

// INPUT
let inpC = document.querySelector("#celsius_value")
let inpF = document.querySelector("#fahrenheit_value")
let inpK = document.querySelector("#kelvin_value")

//RANGE
let rangeC = document.querySelector("#celsius")
let rangeF = document.querySelector("#fahrenheit")
let rangeK = document.querySelector("#kelvin")

//Formulas para mudar as temperaturas
/* FORMULAS DE CONVERSAO 
celsius_fahrenheit = (celsius * 9/5) + 32
celsius_kelvin = celsius + 273.15

fahrenheit_celsius = (fahrenheit - 32) * 5/9
fahrenheit_kelvin = (fahrenheit - 32) * 5/9 + 273.15

kelvin_celsius = kelvin - 273.15
kelvin_fahrenheit = (kelvin - 273.15) * 9/5 + 32
*/

//Celsius
function c_f(){
    let c = parseFloat(rangeC.value)
    let valor = (c * 9/5) + 32
    inpF.value = valor.toFixed(2)
    rangeF.value = valor.toFixed(2)
    inpC.value = c
}

function c_k(){
    let c = parseFloat(rangeC.value)
    let valor = c + 273
    inpK.value = valor.toFixed(2)
    rangeK.value = valor.toFixed(2)
}

//Fahrenheit
function f_c(){
    let f = parseFloat(rangeF.value)
    let valor = (f - 32) * 5/9
    inpC.value = valor.toFixed(2)
    rangeC.value = valor.toFixed(2)
    inpF.value = f
}

function f_k(){
    let f = parseFloat(rangeF.value)
    let valor = (f - 32) * 5/9 + 273
    inpK.value = valor.toFixed(2)
    rangeK.value = valor.toFixed(2)
}

//Kelvin
function k_c(){
    let k = parseFloat(rangeK.value)
    let valor = k - 273
    inpC.value = valor.toFixed(2)
    rangeC.value = valor.toFixed(2)
    inpK.value = k
}

function k_f(){
    let k = parseFloat(rangeK.value)
    let valor = (k - 273) * 9/5 + 32
    inpF.value = valor.toFixed(2)
    rangeF.value = valor.toFixed(2)
}