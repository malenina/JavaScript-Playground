function actualizarPuntaje(tablero, nombre, nuevosPuntos) {
  tablero[nombre] = nuevosPuntos;
  return tablero;
}
let tablero = {
  Harry: 250,
  Luna: 280,
  Cedric: 270
};

tablero = actualizarPuntaje(tablero, "Luna", 300);
console.log(tablero);