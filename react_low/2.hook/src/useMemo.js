import React, { useState, useCallback, useMemo } from 'react'

let S = ({ addAge, age }) => {
  console.log('子组件更新')
  return (
    <div>
      {age}
      <button onClick={addAge}>click</button>
    </div>
  )
}
S = React.memo(S)
export default function F() {
  const [name, setName] = useState('')
  const [data, setData] = useState({ age: 1 })
  const addAge = useCallback(() => {
    setData(n => ({
      age: n.age + 1
    }))
  }, [])
  return (
    <div>
      {name}
      <input value={name} onChange={e => setName(e.target.value)} />
      <S age={data.age} addAge={addAge} />
    </div>
  )
}
