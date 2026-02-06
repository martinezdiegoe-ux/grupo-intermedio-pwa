document.getElementById("validar").addEventListener("click", () => {
  const items = document.querySelectorAll(".vf-item");
  let correctas = 0;

  items.forEach((item, index) => {
    const correcta = item.dataset.correct;
    const seleccion = item.querySelector(`input[name="q${index+1}"]:checked`);

    item.classList.remove("correcto", "incorrecto");

    if (seleccion && seleccion.value === correcta) {
      item.classList.add("correcto");
      correctas++;
    } else {
      item.classList.add("incorrecto");
    }
  });

  const total = items.length;
  const porcentaje = Math.round((correctas / total) * 100);

  let mensaje = "";
  if (correctas <= 3) mensaje = "Debes seguir estudiando 📖";
  else if (correctas <= 6) mensaje = "Vas bien, pero se puede mejorar 🙂";
  else if (correctas <= 8) mensaje = "¡Muy bien hecho! 👏";
  else if (correctas === 9) mensaje = "¡WOW! Sobresaliente 🔥";
  else mensaje = "¡EXCELENTE! Dominás la Palabra 🙌";

  document.getElementById("resultado").innerHTML =
    `Resultado: ${correctas}/${total} (${porcentaje}%)<br>${mensaje}`;
});
