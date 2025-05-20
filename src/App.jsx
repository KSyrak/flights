import { useState } from 'react'
import './App.css'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Results from './pages/Results'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/results' element={<Results/>} />
    </Routes>
   
  )
}

export default App
