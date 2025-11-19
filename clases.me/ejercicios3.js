//Haz una función que reciba como parámetro un número x y una oración.
//La función se encargará  de mostrar por consola la oración tantas veces el número x. 

function RepetirOracion (x,oracion){

    if (oracion.length <= 10){
        console.log("error")
    } else{
        for (let i = 1; i<=x; i++){
        console.log(oracion)
    }  

    }
    

    
}
RepetirOracion( 3, "vida ")

function repetirOracion(x, oracion) {
  let contador = 1; 
  while (contador <= x) {
    console.log(oracion);
    contador++; 
  }
}
