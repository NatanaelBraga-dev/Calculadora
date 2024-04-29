function inserirNumero(num){
    var numero = document.getElementById('resultado').innerHTML
    document.getElementById('resultado').innerHTML = numero + num
}

function limpar(){
    document.getElementById('resultado').innerHTML = ""
}

function voltar(){
    var numeros = document.getElementById('resultado').innerHTML
    document.getElementById('resultado').innerHTML = numeros.substring(0, numeros.length -1)
}

function calcular(){
    var resultado = document.getElementById('resultado').innerHTML
    if(resultado){
        var valor = eval(resultado);
        document.getElementById('resultado').innerHTML = parseFloat(valor.toFixed(2));
    }
    else{
        alert("não há nada para calcular")
    }
}