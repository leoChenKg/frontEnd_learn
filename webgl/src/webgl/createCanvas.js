let idIndex = 0
export default function (w, h) {
  let canvas = document.createElement('canvas')
  canvas.id = `canvas-${idIndex++}`
  canvas.width = w
  canvas.height = h
  document.body.appendChild(canvas)
  return canvas
}
