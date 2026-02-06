const preguntas = [
  {
    texto: "Jesús nació en Belén.",
    correcta: true
  },
  {
    texto: "Moisés cruzó el mar en un barco.",
    correcta: false
  },
  {
    texto: "David venció a Goliat con una honda.",
    correcta: true
  },
  {
    texto: "La Biblia tiene solo un libro.",
    correcta: false
  }
];

const contenedor = document.getElementById("preguntas");

preguntas.forEach((p, i) => {
  const div = document.createElement("div");
  div.className = "pregunta";

  div.innerHTML = `
    <p>${p.texto}</p>
    <div class="opciones">
      <label>
        <input type="radio" name="pregunta${i}" value="true">
        Verdadero
      </label>
      <label>
        <input type="radio" name="pregunta${i}" value="false">
        Falso
      </label>
    </div>
  `;

  contenedor.appendChild(div);
});

function validar() {
  let correctas = 0;

  preguntas.forEach((p, i) => {
    const respuesta = document.querySelector(
      `input[name="pregunta${i}"]:checked`
    );

    if (respuesta && respuesta.value === String(p.correcta)) {
      correctas++;
    }
  });

  document.getElementById("resultado").innerText =
    `Respuestas correctas: ${correctas} de ${preguntas.length}`;
}
