function somar() {
    console.log("iniciando")
    let valor1 = validarNaoNumerico(document.getElementById('valor1').value);
    let valor2 = validarNaoNumerico(document.getElementById('valor2').value);
    let valor3 = validarNaoNumerico(document.getElementById('valor3').value);
    resultado = Number(valor1) + Number(valor2) + Number(valor3);
    document.getElementById("Resultado1").value = resultado;
}
function validarNaoNumerico(valor) {
    if (isNaN(valor) || !valor)
        return 0;
    console.log(valor)
    return valor;
}