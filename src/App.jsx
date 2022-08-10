import { useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Inicio from './Pages/Inicio'
import Servicios from './Pages/Servicios'
import Header from './components/Header'
import Contactanos from './Pages/Contactanos'


const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />} >
        <Route index element={<Inicio />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/contactanos" element={<Contactanos />} />

        </Route>

      </Routes>
    
    </BrowserRouter>
  )
}

export default App

































