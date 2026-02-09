/* ==================================================
   ✏️ EDITAR CRONOGRAMA DESDE ACÁ
   Agregá, quitá o modificá eventos sin tocar HTML
   ================================================== */

const eventos = [
  {
    fecha: "Sabado 21 de febrero",
    hora: "19:00 hs",
    titulo: "Culto Juvenil Arroyo Leyes",
    comentario: "Culto de Jovenes, al finalizar se compartirá momento de camaraderia cristiana."
  },
  {
    fecha: "Viernes 27 de febrero",
    hora: "20:00 hs",
    titulo: "Noche de jóvenes",
    comentario: "Juntada en el Terreno de la Iglesia. Actividad especial con juegos y palabra."
  },
  {
    fecha: "Sábado 28 de febrero",
    hora: "18:30 hs",
    titulo: "Ensayo de alabanza",
    comentario: "Ensayo general del grupo de intermedio."
  }
];

/* ==================================================
   Renderizado automático
   ================================================== */

const agenda = document.getElementById("agenda");

eventos.forEach(ev => {
  const div = document.createElement("div");
  div.className = "evento";

  div.innerHTML = `
    <div class="evento-fecha">📅 ${ev.fecha}</div>
    <div class="evento-hora">⏰ ${ev.hora}</div>
    <div class="evento-titulo">${ev.titulo}</div>
    <div class="evento-comentario">${ev.comentario}</div>
  `;

  agenda.appendChild(div);
});
