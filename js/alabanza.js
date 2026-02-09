const datosAlabanzas = {
  alabanza1: {
    titulo: "Cuán grande es Dios",
    letra: `
Cuán grande es Dios,
cántale cuán grande es Dios,
y todos lo verán,
cuán grande es Dios.
    `,
    pdf: "pdf/cuan-grande-es-dios.pdf",
    youtube: "https://www.youtube.com/watch?v=xxxxx"
  },

  alabanza2: {
    titulo: "Digno es el Cordero",
    letra: `
Digno es el Cordero,
que fue inmolado,
digno es de recibir
el poder y la gloria.
    `,
    pdf: "pdf/digno-es-el-cordero.pdf",
    youtube: "https://www.youtube.com/watch?v=yyyyy"
  }
};

// Obtener ID desde URL
const params = new URLSearchParams(window.location.search);
const id = params.get("id");

const data = datosAlabanzas[id];

if (data) {
  document.getElementById("titulo-alabanza").textContent = data.titulo;
  document.getElementById("texto-letra").innerText = data.letra;
  document.getElementById("btn-pdf").href = data.pdf;
  document.getElementById("btn-youtube").href = data.youtube;
}
