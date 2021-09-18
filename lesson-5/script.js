const w = document.querySelector(".wrapp");
const matrix = [
  [
    '<span class="white">&#9814;</span>',
    '<span class="white">&#9816;</span>',
    '<span class="white">&#9815;</span>',
    '<span class="white">&#9812;</span>',
    '<span class="white">&#9813;</span>',
    '<span class="white">&#9815;</span>',
    '<span class="white">&#9816;</span>',
    '<span class="white">&#9814;</span>'
  ],
  [
    '<span class="white">&#9817;</span>',
    '<span class="white">&#9817;</span>',
    '<span class="white">&#9817;</span>',
    '<span class="white">&#9817;</span>',
    '<span class="white">&#9817;</span>',
    '<span class="white">&#9817;</span>',
    '<span class="white">&#9817;</span>',
    '<span class="white">&#9817;</span>'
  ],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [
    '<span class="black">&#9823;</span>',
    '<span class="black">&#9823;</span>',
    '<span class="black">&#9823;</span>',
    '<span class="black">&#9823;</span>',
    '<span class="black">&#9823;</span>',
    '<span class="black">&#9823;</span>',
    '<span class="black">&#9823;</span>',
    '<span class="black">&#9823;</span>'
  ],
  [
    '<span class="black">&#9820;</span>',
    '<span class="black">&#9822;</span>',
    '<span class="black">&#9821;</span>',
    '<span class="black">&#9818;</span>',
    '<span class="black">&#9819;</span>',
    '<span class="black">&#9821;</span>',
    '<span class="black">&#9822;</span>',
    '<span class="black">&#9820;</span>'
  ]
];
function createCell(color, figure) {
  const el = document.createElement("div");
  el.classList.add("cell");
  el.style.backgroundColor = color;
  el.innerHTML = figure === 0 ? "" : figure;
  return el;
}

const columnsLetters = ["a", "b", "c", "d", "e", "f", "g", "h"];
const rowsNumbers = [8, 7, 6, 5, 4, 3, 2, 1];

function g(arr, cn) {
  const wrapp = document.createElement("div");
  wrapp.classList.add(cn);
  arr.forEach((i) => {
    const el = document.createElement("div");
    el.innerText = i;
    wrapp.appendChild(el);
  });

  return wrapp;
}

for (let i = 0; i < 8; i++) {
  if (i === 0) {
    w.appendChild(g(rowsNumbers, "leftNumbers"));
    w.appendChild(g(columnsLetters, "topLetter"));
  }
  if (i === 7) {
    w.appendChild(g(rowsNumbers, "rightNumbers"));
    w.appendChild(g(columnsLetters, "bottomLetter"));
  }
  for (let j = 0; j < 8; j++) {
    let color = "#fff";
    let el = null;
    if (i % 2 === 0) {
      if (j % 2 === 0) {
        el = createCell(color, matrix[i][j]);
      } else {
        el = createCell("#000", matrix[i][j]);
      }
    } else {
      if (j % 2 === 0) {
        el = createCell("#000", matrix[i][j]);
      } else {
        el = createCell(color, matrix[i][j]);
      }
    }
    w.appendChild(el);
  }
}
