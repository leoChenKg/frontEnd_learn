import { useState, useEffect } from 'react'

export default function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    setTimeout(() => {
      console.log(count)
      setCount(count + 1)
    }, 5000)
  }, [])

  return (
    <div>
      <div>{count}</div>
      <button onClick={() => setCount(count + 1)}>click</button>
    </div>
  )
}
