import { useState } from 'react'
import './App.css'
import init, { greet} from "../wasm/pkg"
import { useEffect } from 'react'

function App() {
  const lists = async () => {
    init().then(() => {
      console.log(greet())
    })
  }
  useEffect(() => {
    lists()

  }, [])

  return (
    <div>app</div>
  )
}

export default App
