import createCanvas from './createCanvas'

// 入门
function basic() {
  // 设置背景颜色，清空绘制区域
  // 参数red green blue alpha 取值范围在0-1
  // 指定了就缓存到webl系统中，下次清除时没必要在指定清空的背景颜色
  gl.clearColor(0, 0, 0, 1)

  // 用之前指定的颜色清空背景
  // 会擦除已绘制的内容
  // COLOR_BUFFER_BIT 清空颜色缓冲区 该缓冲区被清除将导致
  // webgl清空页面上的canvas区域
  gl.clear(gl.COLOR_BUFFER_BIT)
}

// 绘制一个点
function Point1() {
  let canvas = createCanvas(400, 400)

  const gl = getWebGLContext(canvas)

  if (!gl) {
    console.log('failed to get canvas!')
  }
  /**
   * 顶点着色器
   * 顶点着色器用来描述定点特性（位置、颜色等）。顶点是指二维或三维空间中的一个点，
   * 如图形的端点或交点
   */

  /**
   * 片元着色器
   * 进行逐片元处理过程如光照的程序。片元是一个webgl术语，可以理解为像素（图像的单元）
   *
   */

  // 顶点着色器
  const VSHADER_SOURCE = `
    void main() { 
      gl_Position = vec4(0.0, 0.0, 0.0, 1.0); // 坐标
      gl_PointSize = 10.0; // 大小
    }`

  // 片元着色器
  const FSHADER_SOURCE = `
    void main() { 
      gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0); // point 颜色
    }`

  // 初始化着色器
  if (!initShaders(gl, VSHADER_SOURCE, FSHADER_SOURCE)) {
    console.log('Failed to intialize shaders.')
    return
  }

  gl.clearColor(0.0, 0.0, 0.0, 1.0)

  gl.clear(gl.COLOR_BUFFER_BIT)

  // Draw a point
  gl.drawArrays(gl.POINTS, 0, 1)

  /**
   * 1.齐次坐标？
   * 2.矩阵乘法描述顶点变换？
   */
}
// 绘制一个点
function Point2() {
  let canvas = createCanvas(400, 400)

  const gl = getWebGLContext(canvas)

  if (!gl) {
    console.log('failed to get canvas!')
  }
  /**
   * 顶点着色器
   * 顶点着色器用来描述定点特性（位置、颜色等）。顶点是指二维或三维空间中的一个点，
   * 如图形的端点或交点
   */

  /**
   * 片元着色器
   * 进行逐片元处理过程如光照的程序。片元是一个webgl术语，可以理解为像素（图像的单元）
   *
   */

  // 顶点着色器
  const VSHADER_SOURCE = `
    void main() { 
      gl_Position = vec4(0.0, 0.0, 0.0, 1.0); // 坐标
      gl_PointSize = 10.0; // 大小
    }`

  // 片元着色器
  const FSHADER_SOURCE = `
    void main() { 
      gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0); // point 颜色
    }`

  // 初始化着色器
  if (!initShaders(gl, VSHADER_SOURCE, FSHADER_SOURCE)) {
    console.log('Failed to intialize shaders.')
    return
  }

  gl.clearColor(0.0, 0.0, 0.0, 1.0)

  gl.clear(gl.COLOR_BUFFER_BIT)

  // Draw a point
  gl.drawArrays(gl.POINTS, 0, 1)

  /**
   * 1.齐次坐标？
   * 2.矩阵乘法描述顶点变换？
   */
}
