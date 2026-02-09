const datosAlabanzas = {
  alabanza1: {
    titulo: "Te lo debo a Ti",
    letra: `
I
Si vivo es porque Tú Vives,
Soy Salvo pues Tú me Salvaste,
Si canto Tú me diste alegría,
Si ando Tú me Levantaste.
Y es que tengo mil razones
Que declaran Tu Grandeza,
Lo que soy y lo que tengo
Te lo Debo a Ti.
Coro:
Te lo Debo a Ti que viniste a morir
Para darme alegría,
Tú cargabas la cruz, Tú sufrías por mí,
Tú pensabas en mí.
Tú viniste a cambiar mi tristeza en canción
Y mis noches en día,
Si hoy tengo un lugar, si me espera un hogar
Te lo Debo a Ti.
II
No tengo recuerdos amargos
Porque Todo Señor por amor lo has llevado;
Y aquello que fue en mi vida es historia,
De Tu Fidelidad solo tengo memoria.
Y es que tengo mil razones
Que declaran Tu Grandeza
Lo que soy y lo que tengo
Te lo Debo a Ti.
    `,
    pdf: "pdf/Te-lo-debo-a-Ti.pdf",
    youtube: "https://youtu.be/58pJyGiIjeM?si=opU4nilvjZTovfSO"
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
