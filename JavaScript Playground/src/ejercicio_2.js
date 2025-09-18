function eliminarParticipante(tablero, nombre) {
  delete tablero[nombre];
  return tablero;
}
let tablero = {
  Harry: 300,
  Luna: 280,
  Cedric: 270
};

tablero = eliminarParticipante(tablero, "Cedric");
console.log(tablero);