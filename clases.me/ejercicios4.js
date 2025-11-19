
function aprendiendoloops (letras,numero,booleano){
    let contador = 0;
    if (letras === "a"){
        for (let i = 0; i<=numero; i++){
            console.log("la letra es a")
            
        }

    }
    if (numero === 5){
        while (contador < 10){
            console.log(letras);
            contador++
        }
    }
    if (booleano === true){
       let intentos = 5; 
       do{
        console.log(intentos);
        intentos++;
       } while (intentos<3)
    }

}
aprendiendoloops("a",5, true)