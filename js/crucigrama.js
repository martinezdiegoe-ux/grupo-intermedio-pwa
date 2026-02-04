const gridElement = document.getElementById("grid");

// MATRIZ 10x10
const grid = Array.from({ length: 10 }, () => Array(10).fill(null));

// DEFINICIÓN DE PALABRAS
const palabras = {
  1: { texto: "JESUS", fila: 2, col: 2, dir: "H" },
  2: { texto: "AMOR", fila: 0, col: 4, dir: "V" },
  3: { texto: "CRUZ", fila: 2, col: 4, dir: "V" },
  4: { texto: "VIDA", fila: 4, col: 2, dir: "H" },
  5: { texto: "FE", fila: 6, col: 5, dir: "H" }
};

// RENDER GRILLA
function renderGrid() {
  gridElement.innerHTML = "";

  for (let r = 0; r < 10; r++) {
    for (let c = 0; c < 10; c++) {
      const cell = document.createElement("div");
      cell.className = "celda";

      if (grid[r][c] === "#") {
        cell.classList.add("bloque");
      } else if (grid[r][c]) {
        cell.textContent = grid[r][c];
      }

      gridElement.appendChild(cell);
    }
  }
}

// VALIDAR RESPUESTA
function validar(num) {
  const entrada = document.getElementById(`resp-${num}`).value.toUpperCase().trim();
  const palabra = palabras[num];

  if (entrada === palabra.texto) {
    colocarPalabra(palabra);
    renderGrid();
    alert("✅ Correcto");
  } else {
    alert("❌ Incorrecto");
  }
}

// COLOCAR EN LA GRILLA
function colocarPalabra(p) {
  for (let i = 0; i < p.texto.length; i++) {
    if (p.dir === "H") {
      grid[p.fila][p.col + i] = p.texto[i];
    } else {
      grid[p.fila + i][p.col] = p.texto[i];
    }
  }
}

// INICIAL
renderGrid();
