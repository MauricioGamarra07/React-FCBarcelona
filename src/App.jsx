import React, { Fragment } from 'react'
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom'
import './App.css'
import Inicio from './assets/components/Inicio'
import Nosotros from './assets/components/Nosotros'
import Equipo from './assets/components/Equipo'
import LaLiga from './assets/components/LaLiga'
import logo from './assets/images/logoBarca.png'

function App() {

  const llamar = () => {
    let botonera = document.querySelector(".botonera");
    botonera.classList.toggle("botonera-open");

    let menu = document.getElementById("menu");
    menu.querySelector('.menu .cerrar').classList.toggle("fa-times");
  }

  return (
    <div className="App">
      <Fragment>
        <Router>
          <header >
            <div className="logotipo">
              <img src={logo} alt="" id="logo" />
              <h1>FC Barcelona</h1>
            </div>
            <div id="menu" className="menu" onClick={() => {
              llamar()
            }}>
              <span className="cerrar fa-solid fa-bars"></span>
            </div>
            <nav className='botonera'>
              <ul>
                <Link to='/React-FCBarcelona/' className='enlace'>Inicio</Link>
                <Link to='/React-FCBarcelona/nosotros' className='enlace'>Nosotros</Link>
                <Link to='/React-FCBarcelona/equipo' className='enlace'>Equipo</Link>
                <Link to='/React-FCBarcelona/laligaespañola' className='enlace'>La Liga</Link>
              </ul>
            </nav>
          </header>
          <Routes>
            <Route path='/React-FCBarcelona/' element={<Inicio />} />
            <Route path='/React-FCBarcelona/nosotros' element={<Nosotros />} />
            <Route path='/React-FCBarcelona/equipo' element={<Equipo />} />
            <Route path='/React-FCBarcelona/laligaespañola' element={<LaLiga />} />
          </Routes>
        </Router>
      </Fragment>
      <footer className="p-5 m-0">
        <h3 className="text-center">Derechos Reservados a &copy; <b>Mauricio Gamarra Soraluz</b></h3>
      </footer>
    </div>
  )
}

export default App
