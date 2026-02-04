/* ===============================
   PREGUNTAS OPCIÓN MÚLTIPLE
   👉 EDITAR ACA
================================ */

const preguntasOM = [
  {
    pregunta: "¿Quién construyó el arca?",
    opciones: ["Abraham", "Noé", "Moisés"],
    correcta: 1
  },
  {
    pregunta: "¿Cuántos días creó Dios el mundo?",
    opciones: ["5", "6", "7"],
    correcta: 1
  }
];

const contenedorOM = document.getElementById("om-container");

preguntasOM.forEach((item, index) => {
  const bloque = document.createElement("div");

  let opcionesHTML = "";
  item.opciones.forEach((op, i) => {
    opcionesHTML += `
      <label>
        <input type="radio" name="q${index}" value="${i}">
        ${op}
      </label><br>
    `;
  });

  bloque.innerHTML = `
    <p>${index + 1}. ${item.pregunta}</p>
    ${opcionesHTML}
  `;

  contenedorOM.appendChild(bloque);
});

function verificarOM() {
  let correctas = 0;

  preguntasOM.forEach((item, index) => {
    const seleccion = document.querySelector(`input[name="q${index}"]:checked`);
    if (seleccion && parseInt(seleccion.value) === item.correcta) {
      correctas++;
    }
  });

  alert(`Correctas: ${correctas} de ${preguntasOM.length}`);
}
