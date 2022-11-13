import React, { useEffect, useState } from 'react'
import plantel from '../images/plantel_barca.jpg'
import primera_equipacion from '../images/equipo_primera_v.jpg'
import equipacion_dorada from '../images/equipo_v_dorada.jpg'
import equipacion_lila from '../images/equipo_v_lila.jpg'
import '../css/estilo_equipo.css'

function Equipo() {

  const [players, setPlayers] = useState([])

  const traerDatos = (url) => {
    fetch(url, {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "v3.football.api-sports.io",
        "x-rapidapi-key": "a9a767f7f8f12e5b0bac17841cdd47b8"
      }
    })
      .then(res => res.json())
      .then(data => {
        console.log(data.response[0].players);
        setPlayers(data.response[0].players);
      })
      .catch(error => console.log(error))
  }

  useEffect(() => {
    traerDatos("https://v3.football.api-sports.io/players/squads?team=529");
  }, [])

  return (
    <>
      <div id="carouselExampleIndicators" className="carousel slide container banner-equipo" data-bs-ride="true">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
        </div>
        <div className="carousel-inner">
          <div align="center" className="carousel-item active">
            <img src={plantel} alt="..." id='img-banner' />
          </div>
          <div align="center" className="carousel-item">
            <img src={primera_equipacion} alt="..." id='img-banner' />
          </div>
          <div align="center" className="carousel-item">
            <img src={equipacion_dorada} alt="..." id='img-banner' />
          </div>
          <div align="center" className="carousel-item">
            <img src={equipacion_lila} alt="..." id='img-banner' />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>


      <div className='section-jugadores'>
        {
          players.map((item, index) => {
            return (
              <div className='card-jugador' key={index}>
                <img src={item.photo} alt="" id='img-jugador' />
                <div className='info-jugador'>
                  <h2 className='nombre-jugador'>Nombre: {item.name}</h2>
                  <h4 className='text-center'>Posición: {item.position}</h4>
                  <h4 className='text-center'>Dorsal: {item.number}</h4>
                </div>
              </div>
            )
          })
        }
      </div>
      <div className='final'></div>
    </>
  )
}

export default Equipo