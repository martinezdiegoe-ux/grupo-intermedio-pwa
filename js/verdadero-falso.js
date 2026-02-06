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
  let total = Object.keys(respuestasCorrectas).length;

  for (let key in respuestasCorrectas) {
    const seleccion = document.querySelector(`input[name="${key}"]:checked`);
    if (seleccion && seleccion.value === respuestasCorrectas[key]) {
      aciertos++;
    }
  }

  const resultado = document.getElementById("resultado");
  let mensaje = "";

  if (aciertos === total) {
    mensaje = "🔥 ¡Impresionante! Estás firme en la verdad de la Palabra.";
  } else if (aciertos >= total * 0.7) {
    mensaje = "💪 Muy bien. Seguís creciendo en el conocimiento de Dios.";
  } else {
    mensaje = "📖 Seguí buscando en la Palabra, Dios siempre enseña.";
  }

  resultado.innerHTML = `Aciertos: ${aciertos} / ${total}<br>${mensaje}`;
}
