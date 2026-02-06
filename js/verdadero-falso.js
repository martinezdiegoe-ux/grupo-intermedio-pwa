const preguntas = [
  { texto: "Moisés guió al pueblo de Israel fuera de Egipto.", correcta: true },
  { texto: "David fue rey antes que Saúl.", correcta: false },
  { texto: "Jesús nació en Belén.", correcta: true },
  { texto: "Pedro negó a Jesús cinco veces.", correcta: false },
  { texto: "Noé construyó el arca.", correcta: true },
  { texto: "Sansón fue derrotado por Goliat.", correcta: false },
  { texto: "Pablo escribió varias cartas del Nuevo Testamento.", correcta: true },
  { texto: "Jonás obedeció a Dios desde el primer momento.", correcta: false },
  { texto: "La fe sin obras está muerta.", correcta: true },
  { texto: "Jesús eligió a doce discípulos.", correcta: true }
];

const contenedor = document.getElementById("preguntas");

preguntas.forEach((p, i) => {
  const div = document.createElement("div");
  div.className = "pregunta";
  div.id = `pregunta-${i}`;

  div.innerHTML = `
    <p><strong>${i + 1}.</strong> ${p.texto}</p>
    <div class="opciones">
      <label>
        <input type="radio" name="p${i}" value="true"> V
      </label>
      <label>
        <input type="radio" name="p${i}" value="false"> F
      </label>
    </div>
  `;

  contenedor.appendChild(div);
});

function validar() {
  let correctas = 0;

  preguntas.forEach((p, i) => {
    const seleccion = document.querySelector(`input[name="p${i}"]:checked`);
    const div = document.getElementById(`pregunta-${i}`);

    div.classList.remove("correcta", "incorrecta");

    if (!seleccion) return;

    const valor = seleccion.value === "true";

    if (valor === p.correcta) {
      div.classList.add("correcta");
      correctas++;
    } else {
      div.classList.add("incorrecta");
    }
  });

  const resultado = document.getElementById("resultado");
  const porcentaje = Math.round((correctas / preguntas.length) * 100);

  let mensaje = "";

  if (correctas <= 3) {
    mensaje = "💡 Seguí estudiando la Palabra, Dios honra al que persevera.";
  } else if (correctas <= 6) {
    mensaje = "🙂 Buen comienzo, pero todavía hay mucho para crecer en la fe.";
  } else if (correctas <= 8) {
    mensaje = "🔥 Muy bien hecho, vas afirmándote en la verdad.";
  } else if (correctas === 9) {
    mensaje = "🙌 Excelente nivel, se nota tu compromiso con la Palabra.";
  } else {
    mensaje = "🏆 ¡Impresionante! Estás firme en la verdad de Dios.";
  }

  resultado.innerHTML = `
    Aciertos: ${correctas} / ${preguntas.length} (${porcentaje}%)<br>
    ${mensaje}
  `;
}
