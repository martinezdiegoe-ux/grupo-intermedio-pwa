// ✏️ ESCRIBÍ LOS COMUNICADOS ACÁ
const comunicados = [
  "Este sábado nos reunimos a las 18:30 hs. ¡No faltes!",
  "Recordamos traer Biblia y cuaderno para la próxima reunión.",
  "El grupo intermedio participará del culto especial el domingo."
];

// CONTENEDOR
const chat = document.getElementById("chat");

// FECHA Y HORA BS AS
function fechaHoraArgentina() {
  return new Date().toLocaleString("es-AR", {
    timeZone: "America/Argentina/Buenos_Aires",
    hour: "2-digit",
    minute: "2-digit",
    day: "2-digit",
    month: "2-digit",
    year: "numeric"
  });
}

// RENDER
comunicados.forEach(texto => {
  const burbuja = document.createElement("div");
  burbuja.className = "mensaje";

  const p = document.createElement("p");
  p.textContent = texto;

  const fecha = document.createElement("div");
  fecha.className = "fecha";
  fecha.textContent = fechaHoraArgentina();

  burbuja.appendChild(p);
  burbuja.appendChild(fecha);

  chat.appendChild(burbuja);
});
