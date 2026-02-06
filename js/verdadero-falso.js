const afirmaciones = [
  { texto: "Jesús dijo que Él es el único camino al Padre.", correcta: "V" },
  { texto: "Moisés entró a la tierra prometida.", correcta: "F" },
  { texto: "La fe sin obras está muerta.", correcta: "V" },
  { texto: "David fue rey antes que Saúl.", correcta: "F" },
  { texto: "El apóstol Pablo escribió más de una carta del Nuevo Testamento.", correcta: "V" },
  { texto: "El arca de Noé fue construida en Egipto.", correcta: "F" },
  { texto: "Jesús fue crucificado en Jerusalén.", correcta: "V" },
  { texto: "El libro de los Salmos pertenece al Nuevo Testamento.", correcta: "F" },
  { texto: "La salvación es por gracia mediante la fe.", correcta: "V" },
  { texto: "Pedro negó a Jesús una sola vez.", correcta: "F" }
];

const lista = document.getElementById("lista");
const resultado = document.getElementById("resultado");

afirmaciones.forEach((a, index) => {
  const div = document.createElement("div");
  div.className = "afirmacion";
  div.dataset.respuesta = "";

  div.innerHTML = `
    <div class="texto">${index + 1}. ${a.texto}</div>
    <div class="opciones">
      <button class="opcion v">V</button>
      <button class="opcion f">F</button>
    </div>
  `;

  const botones = div.querySelectorAll(".opcion");

  botones.forEach(b => {
    b.addEventListener("click", () => {
      botones.forEach(x => x.classList.remove("seleccionada"));
      b.classList.add("seleccionada");
      div.dataset.respuesta = b.textContent;
    });
  });

  lista.appendChild(div);
});

document.getElementById("validarBtn").addEventListener("click", () => {
  let correctas = 0;

  document.querySelectorAll(".afirmacion").forEach((div, i) => {
    const respuesta = div.dataset.respuesta;
    const correcta = afirmaciones[i].correcta;

    div.classList.remove("correcta", "incorrecta");

    if (respuesta === correcta) {
      div.classList.add("correcta");
      correctas++;
    } else {
      div.classList.add("incorrecta");
    }
  });

  const porcentaje = Math.round((correctas / afirmaciones.length) * 100);
  let mensaje = "";

  if (correctas <= 3) mensaje = "Debés seguir estudiando la Palabra 📖";
  else if (correctas <= 6) mensaje = "Buen intento, pero se puede mejorar 💪";
  else if (correctas <= 8) mensaje = "¡Muy bien hecho! 👏";
  else if (correctas === 9) mensaje = "¡Wow! Nivel sobresaliente 🔥";
  else mensaje = "¡Excelente! Dominás muy bien la Palabra 🙌";

  resultado.textContent = `${porcentaje}/100 – ${mensaje}`;
});
