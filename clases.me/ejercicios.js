
//Crea un programa que pida tu nombre y lo muestre en pantalla.

let Nombre = prompt("Escribe tu nombre")
console.log(Nombre)

//EJERCICIO2
//Pide dos números y muestra la suma de ambos.
let num1 = 2;
let num2 = 5;
console.log ("Tu resultado es: ", num1+num2);

//EJERCICIO3
//Pide un número y di si es positivo, negativo o cero.

let numero = 5

if(numero >0){
    console.log("Es Positivo ")
} else if (numero < 0){
    console.log("Es negativo")
} else
{console.log ("Es cero")

}
 //EJERCICIO4
//Pide la edad de una persona y muestra si es mayor de edad o menor de edad.

let edad = 24

if (edad >= 18){
    console.log("Eres mayor de edad")
} else{
    console.log("Eres menor de edad")
}

//EJERCICIO5
//Muestra los números del 1 al 10 con un bucle.

for(let i= 0; i>-10; i--){
    console.log(i)
}

//EJERCICIO6
//Muestra los números del 10 al 1.

let NUMEROS =[1,2,3,4,5,6,7,8,9,10]
console.log(NUMEROS)