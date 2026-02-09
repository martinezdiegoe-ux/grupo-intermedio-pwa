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

  alabanza3: {
    titulo: "Un Milagro",
    letra: `
Un Milagro
I
“Si tan solo tocare sus vestiduras”
Dijo alguien que frustrada se sintió;
Su problema era tan grande
Pero en Jesús creyó
Y abriéndose paso en la gente fue y le tocó.
Como esa mujer quiero ser
Si tan solo pudiera creer
Un milagro hoy recibiría, si pudiera creer.
Coro:
Un milagro hoy yo necesito
Si pudiera creer,
Yo iría y le tocaría y virtud saldría de Él.
Un milagro hoy tú necesitas, si pudieras creer
Cambiaria la historia en tu vida
Si tan solo hoy pudieras creer.
II
Si tan solo pudiera Vencer yo mis dudas
Oraría en el ambiente del milagro,
De seguro hoy recibiría,
De mi Fe Dios se agradaría
Porque eso es lo que hoy necesito para recibir.
Y si hoy tú preguntas: “¿quien fue
Que extendió su mano de Fe?”
Yo quisiera decirte: “fui yo que creí y te toqué”.
    `,
    pdf: "pdf/Un-Milagro.pdf",
    youtube: "https://youtu.be/PndoQfL6eps?si=uM_vMS3U4Uc6Cydd"
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
