export default function autoResize(renderer) {
  resizeRendererToDisplaySize(renderer)
  window.addEventListener('resize', () => {
    resizeRendererToDisplaySize(renderer)
  })
}

export function resizeRendererToDisplaySize(renderer) {
  const { width, height, clientWidth, clientHeight } = renderer.domElement
  const needResize = width !== clientWidth || height !== clientHeight
  if (needResize) {
    renderer.setSize(clientWidth, clientHeight, false)
  }
  return needResize
}
