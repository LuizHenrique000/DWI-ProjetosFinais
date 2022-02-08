const array = [4, 3, 2, 1];
function inverteArray() {
    array.reverse();
    console.log(array)
    // função com o reverse
}
function copiaArray() {
    var meuArrayInvertido = array.slice(0).reverse();
    console.log(meuArrayInvertido);
    // função com slice(Ela cria um novo ao invés de inverter o original)
}

function arrayComLoop() {
    var novoArray = [];
    for (let voltaDoLoop = array.length - 1; voltaDoLoop >= 0; voltaDoLoop--) {
        let elementoAtual = array[voltaDoLoop];
        novoArray.push(elementoAtual);
    }
    console.log(array);
    console.log(novoArray);
    // função com o for
}
