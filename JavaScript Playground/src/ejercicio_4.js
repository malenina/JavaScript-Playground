function multiplicarPuntaje(tablero, nombre, factor) {
  tablero[nombre] *= factor;
  return tablero;
}
let tablero = {
  Harry: 250,
  Luna: 300,
  Cedric: 220
};
tablero = multiplicarPuntaje(tablero, "Harry", 1.5);
console.log(tablero);