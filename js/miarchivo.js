/****En este desafio el usuario tiene que ingresar una palabra clave "Hola" para que se le permita el acceso y luego adivinar un numero.
Como ayuda, cuanto mas se aproxime el numero ingresado al numero secreto, apareceran textos en la consola con el juego caliente, tibio y frio.
****/

//Solicitud de datos
let palabraIngresada = prompt("Comprobar si eres un Humano: \nIngresa el Captcha 'Hola' sin comillas.");
if(palabraIngresada !== "Hola") {
    alert("No eres un Humano, igual juguemos. Te llamare Androide.")
}
let numeroIngresado = parseInt(prompt("Bienvenid@ Humano o Androide!!! \nAdivina el numero de 4 cifras."));

// numero secreto
let numero = 1000; 

let diferencia = numero - numeroIngresado;

// Me aseguro que la diferencia sea siempre positiva
if(diferencia < 0) {
    diferencia = (diferencia * (-1))
}
//Imprimo la visualizacion de los datos en la consola, si el numero coincide se imprime en alert()
console.log("Ingresaste: " + numeroIngresado);
//console.log("Diferencia: " + diferencia); // lo deje desactivado, muestra la diferencia entre el numero elegido y el numero secreto (para que el usuario no la tenga tan facil)

if(numeroIngresado === numero) {
    alert("Excelente!!! "+ numeroIngresado + " era el numero secreto, te ganaste un 15% de descuento en CoderHouse ingresando el cupon 'coder.mauricio.6869'.")
}else if ((numeroIngresado < numero) && (diferencia <= 200) ){
    console.log("Caliente, caliente... el numero secreto es un poquito mayor.")
}else if ((numeroIngresado > numero) && (diferencia <= 200) ){
    console.log("Caliente, caliente... el numero secreto es un poquito menor.")
} else if ((numeroIngresado < numero) && (diferencia <= 500) ){
    console.log("Tibio, Tibio... el numero secreto es algo mayor.")
} else if ((numeroIngresado > numero) && (diferencia <= 500) ){
    console.log("Tibio, Tibio... el numero secreto es algo menor.")
} else if ((numeroIngresado < numero) && (diferencia > 500) ){
    console.log("Frio, Frio... el numero secreto es muchisimo mayor.")
} else {
    console.log("Frio, Frio... el numero secreto es muchisimo menor.")
}