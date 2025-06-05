var valor1 = document.getElementById('valor1')

var valor2 = document.getElementById('valor2')

var resultado = document.getElementById('resultado')

function somar(){
    
    resultado.innerHTML = parseFloat(valor1.value) + parseFloat(valor2.value)
}

function subtrair(){
    resultado.innerHTML = parseFloat(valor1.value) - parseFloat(valor2.value)
}

function dividir(){
    resultado.innerHTML = parseFloat(valor1.value) / parseFloat(valor2.value)
}

function multiplicar(){
    resultado.innerHTML = parseFloat(valor1.value) * parseFloat(valor2.value)
}