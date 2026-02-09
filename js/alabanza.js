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
    titulo: "Necesito de Ti",
    letra: `
Necesito de Ti
I
Muchas veces me pregunte
¿Qué quieres de mi Señor?
Si estando en luchas y pruebas mi vida quise seguir.
Pero no pude, Señor soy muy débil,
Necesito de ti
Y ahora no sé qué debo cambiar
Para poder continuar.
Coro:
Necesito de ti para seguir,
Yo quiero alabarte, también adorarte, quiero seguir;
“Necesitas de Mí, debes seguir
Yo quiero limpiarte, también perdonarte
¿Quieres seguir? Yo estoy junto a ti”.
II
Ahora comprendo Señor
Que quieres de mí
Pues no entendía cuando me querías,
Hoy te siento en mí.
Y ahora puedo continuar mi vida junto a Ti,
Señor me has librado, también perdonado
Y hoy puedo seguir.
    `,
    pdf: "pdf/Necesito-de-Ti.pdf",
    youtube: "https://youtu.be/t2x339dtz9w?si=UXRzz9src89a8D7D"
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
