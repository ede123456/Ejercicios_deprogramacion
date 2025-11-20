
// Creamos dos arrays
let array1 = [10, 20, 30, 40, 50];
let array2 = ['a', 'b', 'c'];

console.log("Array 1 original:", array1);
console.log("Array 2 original:", array2);

// 1. Añade otro elemento al primer array
array1.push(60);
console.log("Después de añadir un elemento:", array1);

// 2. Elimina el primer elemento
array1.shift();
console.log("Después de eliminar el primer elemento:", array1);

// 3. Elimina el último elemento
array1.pop();
console.log("Después de eliminar el último elemento:", array1);

// 4. Une los dos arrays en uno solo
let arrayUnido = array1.concat(array2);
console.log("Arrays unidos:", arrayUnido);

// 5. Toma una sección del array desde el índice 2 hasta el índice 3
let seccion = arrayUnido.slice(2, 4); 
console.log("Sección del índice 2 al 3:", seccion);
