/* ==================================================
   ✏️ EDITAR CRONOGRAMA DESDE ACÁ
   Agregá, quitá o modificá eventos sin tocar HTML
   ================================================== */

const eventos = [
  {
    fecha: "Domingo 18 de febrero",
    hora: "19:00 hs",
    titulo: "Reunión Grupo Intermedio",
    comentario: "Encuentro general con alabanza y reflexión."
  },
  {
    fecha: "Viernes 23 de febrero",
    hora: "20:30 hs",
    titulo: "Noche de jóvenes",
    comentario: "Actividad especial con juegos y palabra."
  },
  {
    fecha: "Sábado 2 de marzo",
    hora: "18:00 hs",
    titulo: "Ensayo de alabanza",
    comentario: "Ensayo general del grupo de música."
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
