import React, { useState } from 'react'
import estadio from '../images/CampNouStadium.png'
import trofeos from '../images/barcelona-trofeos.png'
import museo from '../images/museo_barca.jpg'
import messi from '../images/leyenda-1.jpg'
import '../css/estilo_nosotros.css'

function Nosotros() {

  const [estadoModal, setEstadoModal] = useState(true);

  return (
    <div>
      <div className='nosotros'>
        <h2>Sobre Nosotros</h2>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum tempore corrupti praesentium saepe. Recusandae aspernatur quia incidunt perferendis dolores cum laboriosam soluta dicta consectetur similique dolorem quas, cupiditate magnam. Debitis.
          Ducimus ipsa voluptas vel non voluptatem eius ex nam animi recusandae architecto quam earum aspernatur, est quisquam beatae libero quia fugiat nesciunt rem odit omnis deleniti eligendi delectus corrupti. Ducimus.</p>
      </div>
      <section>
        <h2 className='subtitulo'>Nuestro Estadio</h2>
        <div className='section-estadio'>
          <div className='campo'>
            <img src={estadio} alt="Estadio Camp Nou del Fc Barcelona" id='img-campnou' />
            <h3>Capacidad: 99.354 espectadores</h3>
          </div>
          <div className='info-estadio'>
            <ul>
              <li>Información de Creación 🏟️</li>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste quia eius, laudantium illo quae tempore velit laborum aspernatur delectus officiis exercitationem sapiente pariatur omnis, tempora quo! Neque voluptatem odit tenetur quisquam qui? Quod, quos consequatur.</p>
              <li>Hechos Importantes 📋</li>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea magni eveniet rem.</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, exercitationem?</p>
              <li>Ubicación 🗺️</li>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus deleniti illo praesentium.</p>
            </ul>
          </div>
        </div>
      </section>
      <section>
        <h2 className='subtitulo'>Nuestro Museo</h2>
        <div className='section-museo'>
          <img src={museo} alt="" id='img-museo' />
          <div className='info-museo'>
            <div className="card card-museo text-bg-warning mb-2">
              <div className="card-header"><h5><b>Inauguración</b></h5></div>
              <div>
                <h5 className='text-center p-2'>24 de septiembre de 1984</h5>
                <p className='ps-4 pe-4'>Está situado en las instalaciones del Camp Nou, en Barcelona. Allí podemos observar todos los trofeos conseguidos por las diferentes disciplinas a lo largo de la historia, así como también objetos representativos del club.</p>
              </div>
            </div>
            <div className="card horario card-museo text-bg-warning mb-3">
              <div className="card-header"><h5><b>Horario de Atención</b> ⌚</h5></div>
              <div>
                <ul>
                  <li>9h-19:30h (Verano y Semana Santa)</li>
                  <li>10h-18:30h (Lunes a sábado de noviembre a marzo)</li>
                  <li>10h-14:30h (Domingos y festivos de noviembre a marzo)</li>
                  <li>9:30h-19h (Lunes a sábado del resto del año)</li>
                  <li>9:30h-14:30h (Domingos y festivos del resto del año)</li>
                </ul>
              </div>
            </div>
            <div className="card tarifas card-museo text-bg-warning">
              <div className="card-header"><h5><b>Tarifas</b> 💶</h5></div>
              <div>
                <ul>
                  <li>Adultos, 23€</li>
                  <li>Estudiantes y menores de 13 años: 17€</li>
                  <li>Menores de 6 años: gratis</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 className='subtitulo'>El museo cuenta con:</h2>
        <div className='section-salas-museo'>
          <div className='img-sala trofeos'>
            <div className='info-sala'>
              <h3>01 Sala de Trofeos</h3>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam quod voluptatum natus labore. Repudiandae, illo.</p>
            </div>
          </div>
          <div className='img-sala audiovisual'>
            <div className='info-sala'>
              <h3>02 Sala Audiovisual</h3>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam quod voluptatum natus labore. Repudiandae, illo.</p>
            </div>
          </div>
          <div className='img-sala objetos'>
            <div className='info-sala'>
              <h3>03 Sala de Objetos</h3>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam quod voluptatum natus labore. Repudiandae, illo.</p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 className='subtitulo'>Nuestros Trofeos</h2>
        <div align="center">
          <img src={trofeos} alt="Trofeos del Fc Barcelona" id='img-trofeos' />
        </div>
        <div className="container mt-5">
          <div className="row">
            <div className="col-lg-4 col-sm-4 col-8 m-auto">
              <div className="card-trofeo bg-warning">
                <h3 className='titulo'>Champions League</h3>
                <h2 className='cantidad'>5</h2>
              </div>
            </div>
            <div className="col-lg-4 col-sm-4 col-8 m-auto">
              <div className="card-trofeo bg-warning">
                <h3 className='titulo'>Liga Española</h3>
                <h2 className='cantidad'>26</h2>
              </div>
            </div>
            <div className="col-lg-4 col-sm-4 col-8 m-auto">
              <div className="card-trofeo bg-warning">
                <h3 className='titulo'>Copa del Rey</h3>
                <h2 className='cantidad'>31</h2>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-4 col-sm-4 col-8 m-auto">
              <div className="card-trofeo bg-warning">
                <h3 className='titulo'>Mundial de Clubes</h3>
                <h2 className='cantidad'>3</h2>
              </div>
            </div>
            <div className="col-lg-4 col-sm-4 col-8 m-auto">
              <div className="card-trofeo bg-warning">
                <h3 className='titulo'>Supercopa de España</h3>
                <h2 className='cantidad'>13</h2>
              </div>
            </div>
            <div className="col-lg-4 col-sm-4 col-8 m-auto">
              <div className="card-trofeo bg-warning">
                <h3 className='titulo'>Supercopa de Europa</h3>
                <h2 className='cantidad'>5</h2>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='section-leyendas'>
        <h2 className='subtitulo'>Nuestras Leyendas</h2>
        <div className='galeria-leyendas'>
          <div className='img-leyenda messi' id='1'></div>
          <div className='img-leyenda ronaldinho' id='2'></div>
          <div className='img-leyenda puyol' id='3'></div>
          <div className='img-leyenda iniesta' id='4'></div>
          <div className='img-leyenda xavi' id='5'></div>
        </div>
      </section>

    </div>
  )
}

export default Nosotros