function agregarParticipante(tablero, nombre, puntos) {
  tablero[nombre] = puntos;
  return tablero;
}
let tablero = {
  Harry: 300,
  Luna: 280,
  Cedric: 270
};

tablero = agregarParticipante(tablero, "Clarisse", 260);
console.log(tablero);