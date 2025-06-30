import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {BrowserRouter, Routes, Route,Navigate} from 'react-router-dom'
import { Link } from 'react-router-dom'
import Home from './components/Home/Home.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path='/'
            element={
              <section className='mensajeInicial'>
                <h1>
                  Bienvenido al Ecommerce
                </h1>
                <div>
                  <Link to="/home" >Ingresar al sitio</Link>
                </div>
              </section>
            }
          />
          
          <Route path="/home/*" element={<Home/>} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
