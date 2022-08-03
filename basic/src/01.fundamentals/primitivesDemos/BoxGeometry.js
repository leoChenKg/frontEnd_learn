import * as THREE from 'three'
import addTitle from '../../utils/addTitle'

export function BoxGeometry(container) {
  addTitle(container, 'BoxGeometry-长方体')
  const renderer = new THREE.WebGLRenderer({ antialias: true })
  renderer.setSize(600, 300)
  container.appendChild(renderer.domElement)

  const camera = new THREE.PerspectiveCamera(75, 2, 0.1, 100)
  camera.position.z = 20

  const scene = new THREE.Scene()

  //给场景添加光源
  //自然光
  var ambientLight = new THREE.AmbientLight(0x606060)
  scene.add(ambientLight)
  const light = new THREE.DirectionalLight(0xffffff, 1)
  light.position.set(-1, 2, 4)
  scene.add(light)

  /**
   * 参数如下
   */
  const width = 10 // ui: width
  const height = 10 // ui: height
  const depth = 10 // ui: depth
  const widthSegments = 8 // ui: widthSegments 宽度分段
  const heightSegments = 8 // ui: heightSegments 高度分段
  const depthSegments = 8 // ui: depthSegments 长度分段
  const geometry = new THREE.BoxGeometry(width, height, depth, widthSegments, heightSegments, depthSegments)

  const material = new THREE.MeshPhongMaterial({ color: 0x44aa88 })
  const cube = new THREE.Mesh(geometry, material)
  scene.add(cube)

  requestAnimationFrame(render)

  function render(time) {
    time *= 0.001
    const speed = 1
    const rot = time * speed
    cube.rotation.x = rot
    cube.rotation.y = rot
    renderer.render(scene, camera)

    requestAnimationFrame(render)
  }
}
