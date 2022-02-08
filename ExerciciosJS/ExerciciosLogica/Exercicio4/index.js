function maiorNumero() {
    let array = [2, 1, 3];
    if (array[0] > array[1] && array[0] > array[2]) {
        document.getElementById("numero").value = array[0];
    } else if (array[1] > array[0] && array[1] > array[2]) {
        document.getElementById("numero").value = array[1];
    } else if (array[2] > array[0] && array[2] > array[1]) {
        document.getElementById("numero").value = array[2];
    }
}
