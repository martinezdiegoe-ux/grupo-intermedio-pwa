/* ===============================
   PALABRAS DEL CRUCIGRAMA
   👉 PODÉS MODIFICAR ESTO
================================ */

const palabras = [
  { palabra: "JESUS", pista: "Hijo de Dios" },
  { palabra: "BIBLIA", pista: "Libro sagrado" },
  { palabra: "AMOR", pista: "Lo que Dios es" }
];

const contenedor = document.getElementById("crucigrama");

palabras.forEach((item, index) => {
  const fila = document.createElement("div");
  fila.className = "fila-crucigrama";

  const pista = document.createElement("span");
  pista.innerText = `${index + 1}. ${item.pista}`;

  const input = document.createElement("input");
  input.type = "text";
  input.dataset.respuesta = item.palabra;

  fila.appendChild(pista);
  fila.appendChild(input);
  contenedor.appendChild(fila);
});

function verificarCrucigrama() {
  const inputs = document.querySelectorAll("#crucigrama input");
  let correctas = 0;

  inputs.forEach(input => {
    if (input.value.toUpperCase() === input.dataset.respuesta) {
      input.style.borderColor = "green";
      correctas++;
    } else {
      input.style.borderColor = "red";
    }
  });

  alert(`Respuestas correctas: ${correctas} de ${inputs.length}`);
}
