import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import View from './components/View'
import Add from './components/Add'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
        <Routes>
          <Route path='/View' element={<View/>}></Route>
          <Route path='/Add' element={<Add/>}></Route>
        </Routes>
  
    
    </>
  )
}

export default App
