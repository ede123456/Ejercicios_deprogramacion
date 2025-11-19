
//Hacer una función para eliminar duplicados de un array

let arr = [1, 2, 2, 3, 4, 4, 5];
function eliminarRepetidos(lista){
    return new Set(lista)

}


console.log (eliminarRepetidos(arr))

//Hacer una función para revertir una palabra.

function revertirPalabra(texto) {
    return texto.split("").reverse().join("");
}
console.log(revertirPalabra("hola"));

//Detectar si una palabra es palindroma.

function palindroma(palabra) {
    if (palabra.split("").reverse().join("") === palabra) {
        return "Es palíndroma";
    } else {
        return "No es palíndroma";
    }
}

console.log(palindroma("oso"))