const gridElement = document.getElementById("grid");

// MATRIZ 10x10
const grid = Array.from({ length: 10 }, () => Array(10).fill("#"));

// DEFINICIÓN DE PALABRAS
const palabras = {
  1: { texto: "JESUS", fila: 1, col: 2, dir: "H" },
  2: { texto: "AMOR", fila: 1, col: 4, dir: "V" },
  3: { texto: "NOE", fila: 3, col: 2, dir: "H" },
  4: { texto: "FE", fila: 1, col: 6, dir: "V" },
  5: { texto: "ORACION", fila: 5, col: 1, dir: "H" }
};

// LIMPIAR CELDAS DE PALABRAS
Object.values(palabras).forEach(p => {
  for (let i = 0; i < p.texto.length; i++) {
    if (p.dir === "H") grid[p.fila][p.col + i] = "";
    else grid[p.fila + i][p.col] = "";
  }
});

// RENDER
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

// VALIDAR
function validar(num) {
  const entrada = document.getElementById(`resp-${num}`).value.toUpperCase().trim();
  const p = palabras[num];

  if (entrada === p.texto) {
    for (let i = 0; i < p.texto.length; i++) {
      if (p.dir === "H") grid[p.fila][p.col + i] = p.texto[i];
      else grid[p.fila + i][p.col] = p.texto[i];
    }
    renderGrid();
    alert("✅ Correcto");
  } else {
    alert("❌ Incorrecto");
  }
}

renderGrid();
