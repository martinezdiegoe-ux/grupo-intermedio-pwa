function irA(pagina) {
  window.location.href = pagina;
}

function enviarMensaje() {
  const correo = "grupo.intermedio@tudominio.com"; // 👈 CAMBIÁ ESTE MAIL
  const asunto = "Mensaje desde la app - Grupo Intermedio";
  const cuerpo = "Hola, quisiera comunicarme con el grupo intermedio.";

  const mailto = `mailto:${correo}?subject=${encodeURIComponent(asunto)}&body=${encodeURIComponent(cuerpo)}`;
  window.location.href = mailto;
}
