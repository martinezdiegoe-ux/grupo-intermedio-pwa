const respuestasCorrectas = {
  q1: "V",
  q2: "F",
  q3: "V",
  q4: "F",
  q5: "V",
  q6: "F",
  q7: "V",
  q8: "F",
  q9: "V",
  q10: "V"
};

function validar() {
  let aciertos = 0;
  const total = Object.keys(respuestasCorrectas).length;

  for (let key in respuestasCorrectas) {
    const pregunta = document.querySelector(`input[name="${key}"]:checked`);
    const bloque = document.querySelector(`input[name="${key}"]`)?.closest(".pregunta");

    if (!bloque) continue;

    if (pregunta && pregunta.value === respuestasCorrectas[key]) {
      aciertos++;
      bloque.classList.add("ok");
      bloque.classList.remove("error");
    } else {
      bloque.classList.add("error");
      bloque.classList.remove("ok");
    }
  }

  let mensaje = "";

  if (aciertos <= 3) {
    mensaje = "📖 Seguí estudiando la Palabra, Dios siempre tiene más para enseñarte.";
  } else if (aciertos <= 6) {
    mensaje = "🙂 Buen comienzo, pero todavía hay espacio para crecer.";
  } else if (aciertos <= 8) {
    mensaje = "💪 Muy bien, estás firme en el conocimiento bíblico.";
  } else if (aciertos === 9) {
    mensaje = "🔥 ¡Sobresaliente! Gran manejo de la Palabra.";
  } else {
    mensaje = "🏆 ¡Excelente! Conocés muy bien la verdad bíblica.";
  }

  const resultado = document.getElementById("resultado");
  resultado.innerHTML =
    `<strong>Resultado:</strong> ${aciertos} / ${total}<br>${mensaje}`;

  /* 🔽 ESTO ES LO NUEVO (CLAVE PARA MOBILE) */
  resultado.scrollIntoView({ behavior: "smooth" });
}
