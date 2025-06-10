const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 800;
ctx.lineWidth = 2;

let isPainting = false;

function onMove(e) {
  if (isPainting) {
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    return;
  }
  // ctx.beginPath();
  ctx.moveTo(e.offsetX, e.effsetY);
}
function startPainting() {
  isPainting = true;
}
function cancelPainting() {
  isPainting = false;
}

canvas.addEventListener("mousemove", onMove);
canvas.addEventListener("mousedown", startPainting);
canvas.addEventListener("mouseup", cancelPainting);
canvas.addEventListener("mouseleave", cancelPainting)