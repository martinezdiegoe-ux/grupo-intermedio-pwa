/* ===============================
   PREGUNTAS VERDADERO / FALSO
   👉 EDITAR ACA
================================ */

const preguntasVF = [
  { texto: "Jesús nació en Belén", correcta: true },
  { texto: "Moisés cruzó el mar caminando sobre el agua", correcta: false },
  { texto: "David venció a Goliat", correcta: true }
];

const contenedorVF = document.getElementById("vf-container");

preguntasVF.forEach((pregunta, index) => {
  const bloque = document.createElement("div");

  bloque.innerHTML = `
    <p>${index + 1}. ${pregunta.texto}</p>
    <label><input type="radio" name="p${index}" value="true"> Verdadero</label>
    <label><input type="radio" name="p${index}" value="false"> Falso</label>
  `;

  contenedorVF.appendChild(bloque);
});

function verificarVF() {
  let correctas = 0;

  preguntasVF.forEach((pregunta, index) => {
    const seleccion = document.querySelector(`input[name="p${index}"]:checked`);
    if (seleccion && seleccion.value === pregunta.correcta.toString()) {
      correctas++;
    }
  });

  alert(`Correctas: ${correctas} de ${preguntasVF.length}`);
}
