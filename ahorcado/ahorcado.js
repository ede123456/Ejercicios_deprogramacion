const palabras = [
  "perro", "playa", "facebook", "computadora", "habitacion",
  "amor", "trabajar", "estudiante", "universidad", "cabeza", "instagram"
];

let palabraSecreta = "";
let letrasAcertadas = [];
let vidas = 6;

// Elementos del DOM
const palabraElemento = document.getElementById("palabra");
const mensajeElemento = document.getElementById("mensaje");
const tecladoElemento = document.getElementById("teclado");
const ahorcadoElemento = document.getElementById("ahorcado");
const reiniciarBtn = document.getElementById("reiniciar");

function iniciarJuego() {
  // Reinicia valores
  palabraSecreta = palabras[Math.floor(Math.random() * palabras.length)];
  letrasAcertadas = [];
  vidas = 6;
  mensajeElemento.textContent = "";
  mostrarPalabra();
  dibujarAhorcado();
  generarTeclado();
}

// Muestra palabra con guiones y letras acertadas
function mostrarPalabra() {
  const texto = palabraSecreta
    .split("")
    .map((letra) => (letrasAcertadas.includes(letra) ? letra : "_"))
    .join(" ");
  palabraElemento.textContent = texto;
}

// Generar botones A-Z
function generarTeclado() {
  tecladoElemento.innerHTML = "";
  const letras = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ".split("");
  letras.forEach((letra) => {
    const boton = document.createElement("button");
    boton.textContent = letra;
    boton.onclick = () => manejarIntento(letra.toLowerCase(), boton);
    tecladoElemento.appendChild(boton);
  });
}

// Procesar intento
function manejarIntento(letra, boton) {
  boton.disabled = true;
  if (palabraSecreta.includes(letra)) {
    letrasAcertadas.push(letra);
    mostrarPalabra();
    comprobarVictoria();
  } else {
    vidas--;
    dibujarAhorcado();
    comprobarDerrota();
  }
}

// Comprobar si ganó
function comprobarVictoria() {
  if (!palabraElemento.textContent.includes("_")) {
    mensajeElemento.textContent = "🎉 ¡Ganaste! La palabra era: " + palabraSecreta;
    deshabilitarTeclado();
  }
}

// Comprobar si perdió
function comprobarDerrota() {
  if (vidas <= 0) {
    mensajeElemento.textContent = "💀 Perdiste. La palabra era: " + palabraSecreta;
    deshabilitarTeclado();
  }
}

// Deshabilitar teclado al final
function deshabilitarTeclado() {
  const botones = tecladoElemento.querySelectorAll("button");
  botones.forEach((b) => (b.disabled = true));
}

// Dibujar ahorcado (ASCII simple)
function dibujarAhorcado() {
  const etapas = [
    `
     +---+
     |   |
     O   |
    /|\\  |
    / \\  |
         |
  =========`,
    `
     +---+
     |   |
     O   |
    /|\\  |
    /    |
         |
  =========`,
    `
     +---+
     |   |
     O   |
    /|\\  |
         |
         |
  =========`,
    `
     +---+
     |   |
     O   |
    /|   |
         |
         |
  =========`,
    `
     +---+
     |   |
     O   |
     |   |
         |
         |
  =========`,
    `
     +---+
     |   |
     O   |
         |
         |
         |
  =========`,
    `
     +---+
     |   |
         |
         |
         |
         |
  =========`
  ];
  ahorcadoElemento.innerHTML = `<pre>${etapas[6 - vidas]}</pre>`;
}

// Reiniciar juego
reiniciarBtn.addEventListener("click", iniciarJuego);

// Inicia al cargar
iniciarJuego();

