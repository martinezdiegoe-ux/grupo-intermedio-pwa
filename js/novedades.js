function irA(pagina) {
  window.location.href = pagina;
}

function enviarMensaje() {
  const correo = "martinezdiegoe@gmail.com"; // 👈 CAMBIÁ ESTE MAIL
  const asunto = "Mensaje desde la app - Grupo Intermedio";
  const cuerpo = "Hola, quisiera hacer una consulta:";

  const mailto = `mailto:${correo}?subject=${encodeURIComponent(asunto)}&body=${encodeURIComponent(cuerpo)}`;
  window.location.href = mailto;
}
