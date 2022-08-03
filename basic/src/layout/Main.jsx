import { useRef, useEffect } from 'react'

export default function Primitives({ demos }) {
  const containerRef = useRef()
  useEffect(initWebGL, [])

  function initWebGL() {
    demos.forEach(demo => {
      demo(containerRef.current)
    })
  }

  return <div ref={containerRef}></div>
}
