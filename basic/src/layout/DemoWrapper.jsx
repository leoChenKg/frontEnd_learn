import { useRef, useEffect } from 'react'
import styles from './DemoWrapper.module.css'
/**
 * @param {*} props { renderWebGL, title ,describe, children}
 * @returns
 */
export default function DemoWrapper(props) {
  const canvas = useRef()
  useEffect(() => {
    props.renderWebGL(canvas.current)
   
  }, [])

  return (
    <div className={styles['demo-con']}>
      <div className={styles['title-con']}>
        <h2>{props.title}</h2>
      </div>
      {props.describe}
      <div className={styles['canvas-con']}>
        <canvas ref={canvas}></canvas>
      </div>
      {props.children}
    </div>
  )
}
