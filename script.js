// Array de consejos
const consejos = [
    "Bebe agua con limón para fortalecer la inmunidad!",
    "Usa vinagre para limpiar superficies de vidrio.",
    "Agrega una pizca de sal a tu café para reducir la amargura.",
    "El aloe vera ayuda a calmar las quemaduras solares."
];

// Función para mostrar un consejo aleatorio
function mostrarConsejoAleatorio() {
    const consejoDiario = document.getElementById('consejo-diario');
    const indiceAleatorio = Math.floor(Math.random() * consejos.length);
    consejoDiario.textContent = consejos[indiceAleatorio];
}

// Ejecuta la función cuando se carga la página
window.onload = mostrarConsejoAleatorio;