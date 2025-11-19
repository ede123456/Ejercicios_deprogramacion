
//Hacer una función para revertir una palabra.

//function revertirPalabra2 (palabra){
  //  let palabralrevez = ""
   // let arr = palabra.split("")
   // for(let i = arr.length -1; i>=0; i--){
    //    console.log(arr[i])
    //    palabralrevez = palabralrevez + arr[i]
   //  }
   // console.log(palabralrevez)


//}

//revertirPalabra2("salir")//



function invertSentence(sentence) {
  // Elimina espacios extra al inicio y final, y divide la frase en palabras
  const words = sentence.trim().split(/\s+/);
  //Con trim() + split(/\s+/), siempre obtenemos un arreglo limpio de palabras, 
  // sin huecos vacíos, aunque la oración tenga muchos espacios extra.

  let inverted = "";

  // Recorre desde la última palabra hasta la primera
  for (let i = words.length - 1; i >= 0; i--) {
    inverted += words[i] + " ";
  }

  // Elimina el espacio extra al final
  return inverted.trim();
}

let text = "  vida mia ";
console.log(invertSentence(text)); 
