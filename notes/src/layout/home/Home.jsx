import { useState } from 'react'
import  './home.module.css'

export default function Home() {
  const [count, setCount] = useState(1)

  return (
    <div>
      <h2>FrontEnd Learn...</h2>
      <div>{count}</div>
      <button onClick={() => setCount(x => x + 1)}>click</button>
    </div>
  )
}
