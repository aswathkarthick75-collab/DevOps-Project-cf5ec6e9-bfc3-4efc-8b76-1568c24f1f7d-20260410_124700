import { useState } from 'react'
import './App.css'

export default function App() {
  const [count, setCount] = useState(0)
  return (
    <div className="App">
      <h1>DevOps-Project-cf5ec6e9-bfc3-4efc-8b76-1568c24f1f7d</h1>
      <button onClick={() => setCount(count + 1)}>Count: {count}</button>
    </div>
  )
}