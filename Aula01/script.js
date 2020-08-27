function mostrarAlerta() {
    alert("Passou por cima do botão");
}

function calcular() {
    var txtValor = document.getElementById("txtValor");
    var resultado = txtValor.value * 2;
    document.getElementById("lblResultado").innerHTML = resultado
}