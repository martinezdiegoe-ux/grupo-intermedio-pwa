const alabanzas = [
  {
    id: "alabanza1",
    titulo: "Te lo debo a Ti"
  },
  {
    id: "alabanza2",
    titulo: "Necesito de Ti"
  },
  {
    id: "alabanza3",
    titulo: "Un Milagro"
  }
];

// Render listado
const lista = document.getElementById("lista-alabanzas");

alabanzas.forEach(alabanza => {
  const div = document.createElement("div");
  div.className = "alabanza-item";
  div.textContent = alabanza.titulo;

  div.onclick = () => {
    window.location.href = `alabanza.html?id=${alabanza.id}`;
  };

  lista.appendChild(div);
});
