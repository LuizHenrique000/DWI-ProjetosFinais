let valor1 = 0;
let valor2 = 0;
let valor3 = 0;

function somar() {
    valor1 = document.getElementById('valor1').value;
    valor2 = document.getElementById('valor2').value;
    valor3 = document.getElementById('valor3').value;
    resultado = parseInt(valor1) + parseInt(valor2) + parseInt(valor3);
    document.getElementById("Resultado1").value = resultado;
}
