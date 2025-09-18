function obtenerParticipantes(tablero) {
  return Object.keys(tablero);
}

let tablero = {
    Harry: 375,
    Luna: 300,
    Cedric: 220
};

let participantes = obtenerParticipantes(tablero);
console.log(participantes);