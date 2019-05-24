import React, { useState } from 'react'

function Test () {
  const [count, setCount] = useState(0)
  const [] = useState('banana')
  return (
    <div>
      <p>Click {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me to +</button>
      <button onClick={() => setCount(count - 1)}>Click me to -</button>
    </div>
  )
}

export default Test