document.addEventListener("DOMContentLoaded", () => {
  const palabras = [
    { palabra: "JESUS", pista: "Hijo de Dios" },
    { palabra: "BIBLIA", pista: "Libro sagrado" },
    { palabra: "AMOR", pista: "Lo que Dios es" }
  ];

  const contenedor = document.getElementById("crucigrama");
  contenedor.innerHTML = "";

  palabras.forEach((item, index) => {
    const fila = document.createElement("div");
    fila.className = "fila-crucigrama";

    const pista = document.createElement("span");
    pista.textContent = `${index + 1}. ${item.pista}`;

    const input = document.createElement("input");
    input.type = "text";
    input.placeholder = "Respuesta";
    input.dataset.respuesta = item.palabra;

    fila.appendChild(pista);
    fila.appendChild(input);
    contenedor.appendChild(fila);
  });
});

function verificarCrucigrama() {
  const inputs = document.querySelectorAll("#crucigrama input");
  let correctas = 0;

  inputs.forEach(input => {
    if (input.value.trim().toUpperCase() === input.dataset.respuesta) {
      input.classList.add("ok");
      input.classList.remove("error");
      correctas++;
    } else {
      input.classList.add("error");
      input.classList.remove("ok");
    }
  });

  alert(`Respuestas correctas: ${correctas} de ${inputs.length}`);
}


