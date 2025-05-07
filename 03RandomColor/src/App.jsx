import { useState } from 'react'
import './App.css'
import RandomColor from './RandomColor'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h2>Random Color Generator</h2>
      <RandomColor />
    </>
  )
}

export default App
