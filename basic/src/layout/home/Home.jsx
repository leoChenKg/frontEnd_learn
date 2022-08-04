import { useState } from 'react'
import { useSeparator } from '../../utils/separator'

export default function Home() {
  const [count, setCount] = useState(1)
  const sep = useSeparator(id)
  const res = sep.xs(() => {
    return
  })

  return (
    <div>
      <h2>Three.js Learn...</h2>
      <div>{count}</div>
      <button onClick={() => setCount(x => x + 1)}>click</button>
    </div>
  )
}
