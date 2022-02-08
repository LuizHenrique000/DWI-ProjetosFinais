const array = [4, 3, 2, 3];
function encontrarNumero() {
    var elemento = Number(document.getElementById("numero").value);
    array.indexOf(elemento >= 0);
    if (array.indexOf(elemento) >= 0) {
        console.log("Encontrou")
    } else {
        console.log("Não encontrou")
    }
}
// A ideia era procurar por um número porém agora o programa pede um número e procura em todo o array.