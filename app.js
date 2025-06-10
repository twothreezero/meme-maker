const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 800;
ctx.lineWidth = 2;

const colors = [
  "#3498db",
  "#3498db",
  "#9b59b6",
  "#f39c12",
  "#c0392b",
  "#34495e",
  "#2ecc71",
  "#2980b9",
  "#ecf0f1",
  "##7f8c8d",
];

function onClick(e) {
  ctx.beginPath();
  ctx.moveTo(0, 0);
  const color = colors[Math.floor(Math.random() * colors.length)];
  ctx.strokeStyle = color;
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
}

canvas.addEventListener("mousemove", onClick);