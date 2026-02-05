const gridElement = document.getElementById("grid");

// grilla 10x10
const grid = Array.from({ length: 10 }, () => Array(10).fill(""));

// PALABRAS SEGÚN TABLA (13)
const palabras = {
  1: { texto: "NOE", fila: 1, col: 3, dir: "V" },
  2: { texto: "JOB", fila: 1, col: 6, dir: "H" },
  3: { texto: "BELEN", fila: 1, col: 8, dir: "V" },
  4: { texto: "JERUSALEM", fila: 3, col: 2, dir: "H" },
  5: { texto: "FE", fila: 4, col: 1, dir: "H" },
  6: { texto: "SION", fila: 5, col: 2, dir: "H" },
  7: { texto: "ENOC", fila: 5, col: 7, dir: "H" },
  8: { texto: "SALVACION", fila: 7, col: 2, dir: "H" },
  9: { texto: "ARCA", fila: 7, col: 3, dir: "V" },
 10: { texto: "AMOR", fila: 7, col: 6, dir: "V" },
 11: { texto: "ORAR", fila: 7, col: 9, dir: "V" },
 12: { texto: "PECADO", fila: 9, col: 1, dir: "H" },
 13: { texto: "JESUS", fila: 3, col: 2, dir: "V" }
};

function renderGrid() {
  gridElement.innerHTML = "";

  for (let r = 0; r < 10; r++) {
    for (let c = 0; c < 10; c++) {
      const cell = document.createElement("div");
      cell.classList.add("celda");

      if (grid[r][c] === "") {
        cell.classList.add("negra");
      } else {
        cell.classList.add("blanca");
        cell.textContent = grid[r][c];
      }

      gridElement.appendChild(cell);
    }
  }
}

function validar(num) {
  const input = document.getElementById(`resp-${num}`);
  const valor = input.value.toUpperCase().trim();
  const palabra = palabras[num];

  if (valor === palabra.texto) {
    colocarPalabra(palabra);
    input.disabled = true;
    renderGrid();
    alert("✅ Correcto");
  } else {
    alert("❌ Incorrecto");
  }
}

function colocarPalabra(p) {
  let r = p.fila - 1;
  let c = p.col - 1;

  for (let i = 0; i < p.texto.length; i++) {
    grid[r][c] = p.texto[i];
    if (p.dir === "H") c++;
    else r++;
  }
}

renderGrid();
