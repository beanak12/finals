import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Signup from './components/Signup'
import Login from './components/Login'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Statebasics from './components/Statebasics'
import Counter from './components/Counter'
import Welcome from './components/Welcome'
import Api from './components/Api'
import Pokemon from './components/Pokemon'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <>
        <Navbar />
        <h1>Welcome to React</h1>
        <Routes>
          <Route path='/' element={<Signup />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/s' element={<Statebasics />}></Route>
          <Route path='/C' element={<Counter />}></Route>
          <Route path='/b' element={<Welcome />}></Route>
          <Route path='/h' element={<Api />}></Route>
          <Route path='/i' element={<Pokemon />}></Route>
        </Routes>

        
      
        
      </>
    </>
  )
}

export default App
