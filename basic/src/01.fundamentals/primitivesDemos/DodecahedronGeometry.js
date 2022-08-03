import * as THREE from 'three'
import addTitle from '../../utils/addTitle'

function createObj(geometryParams, color, x) {
  //   DodecahedronGeometry 参数 geometryParams
  //   const radius = 7 // ui: radius 多面体外切球半径
  //   const detail = 2 // ui: detail 多面体细节
  const geometry = new THREE.DodecahedronGeometry(...geometryParams)
  const material = new THREE.MeshPhongMaterial({ color, side: THREE.DoubleSide })
  const obj = new THREE.Mesh(geometry, material)
  obj.position.x = x
  return obj
}

// 圆柱体
export function DodecahedronGeometry(container) {
  addTitle(container, 'DodecahedronGeometry->12面体')
  const renderer = new THREE.WebGLRenderer({ antialias: true }) //  antialias：true 抗锯齿属性开启
  renderer.setSize(600, 300) // 设置canvas 大小设置后图形更清晰
  // renderer.setClearColor(new THREE.Color(0xdcdcdc)) //设置窗口背景颜色为黑
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

  const objMsg = [
    [[7], 0x8844aa, -8],
    [[7, 1], 0xaa8844, 8]
  ]

  let objs = []
  objMsg.forEach(args => {
    const obj = createObj(...args)
    objs.push(obj)
    scene.add(obj)
  })

  requestAnimationFrame(render)

  function render(time) {
    time *= 0.001
    const speed = 1
    const rot = time * speed

    objs.forEach((obj, index) => {
      obj.rotation.x = rot + index
      obj.rotation.y = rot + index
    })
    renderer.render(scene, camera)
    requestAnimationFrame(render)
  }
}
