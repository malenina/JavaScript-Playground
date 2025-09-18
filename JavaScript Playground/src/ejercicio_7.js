function calcularPuntajeTotal(tablero) {
  return Object.values(tablero).reduce((total, puntos) => total + puntos, 0);
}

let tablero = {
  Harry: 375,
  Luna: 300,
  Cedric: 220
};

let puntajeTotal = calcularPuntajeTotal(tablero);
console.log(puntajeTotal);