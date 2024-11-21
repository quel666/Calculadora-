var n1 = document.querySelector ("#n1")
var n2 = document.querySelector ("#n2")

var btn_somar = document.querySelector ("#soma")
var btn_dividir = document.querySelector ("#divisao")
var btn_multiplicacao = document.querySelector ("#multiplicacao")
var btn_subtrair = document.querySelector ("#subtracao")

var resultado = document.querySelector ("#res")


btn_somar.addEventListener ("click", soma)
function soma (){
    resultado.innerHTML = Number(n1.value) + Number(n2.value)
}

btn_dividir.addEventListener ("click", divisao)
function divisao (){
    resultado.innerHTML = Number(n1.value) / Number(n2.value)
}

btn_multiplicacao.addEventListener ("click", multiplicacao)
function multiplicacao (){
    resultado.innerHTML = Number(n1.value) * Number(n2.value)
}

btn_subtrair.addEventListener ("click", subtracao)
function subtracao (){
    resultado.innerHTML = Number(n1.value) - Number(n2.value)
}


