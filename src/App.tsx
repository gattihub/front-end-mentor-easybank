import { useState } from 'react'
import {Header} from './Components/Header'
import {BlockOne} from './Components/FirstBlock'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header />
      <BlockOne />
    </div>
  )
}

export default App
