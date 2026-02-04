/* ===============================
   PALABRAS DEL CRUCIGRAMA
   👉 PODÉS MODIFICAR ESTO
================================ */

document.addEventListener("DOMContentLoaded", () => {

  const palabras = [
    { palabra: "JESUS", pista: "Hijo de Dios" },
    { palabra: "BIBLIA", pista: "Libro sagrado" },
    { palabra: "AMOR", pista: "Lo que Dios es" }
  ];

  const contenedor = document.getElementById("crucigrama");

  // Seguridad extra por si el div no existe
  if (!contenedor) {
    console.error("No se encontró el contenedor #crucigrama");
    return;
  }

  palabras.forEach((item, index) => {
    const fila = document.createElement("div");
    fila.className = "fila-crucigrama";

    const pista = document.createElement("span");
    pista.innerText = `${index + 1}. ${item.pista}`;

    const input = document.createElement("input");
    input.type = "text";
    input.dataset.respuesta = item.palabra;
    input.placeholder = "Escribí la respuesta";

    fila.appendChild(pista);
    fila.appendChild(input);
    contenedor.appendChild(fila);
  });

});

/* ===============================
   VERIFICAR RESPUESTAS
================================ */

function verificarCrucigrama() {
  const inputs = document.querySelectorAll("#crucigrama input");
  let correctas = 0;

  inputs.forEach(input => {
    if (input.value.trim().toUpperCase() === input.dataset.respuesta) {
      input.style.borderColor = "green";
      correctas++;
    } else {
      input.style.borderColor = "red";
    }
  });

  alert(`Respuestas correctas: ${correctas} de ${inputs.length}`);
}

