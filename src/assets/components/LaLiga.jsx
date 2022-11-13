import React, { useEffect, useState } from 'react'
import '../css/estilo_laliga.css'

function LaLiga() {

  const [anio, setAnio] = useState("2022");
  const [liga, setLiga] = useState({});
  const [equipos, setEquipos] = useState([]);

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
        setLiga(data.response[0].league);
        console.log(data.response[0].league.standings[0]);
        setEquipos(data.response[0].league.standings[0]);
      })
      .catch(error => console.log(error))
  }

  useEffect(() => {
    traerDatos(`https://v3.football.api-sports.io/standings?league=140&season=${anio}`)
  }, [anio])

  return (
    <>
      <div className='busqueda'>
        <label className='seleccione'>Seleccione la temporada que desea buscar:</label>
        <select name="anio_temporada" id="temporada" onChange={(e) => {
          setAnio(e.target.value)
        }}>
          <option value="2022">Temporada 2022-2023</option>
          <option value="2021">Temporada 2021-2022</option>
          <option value="2020">Temporada 2020-2021</option>
          <option value="2019">Temporada 2019-2020</option>
          <option value="2018">Temporada 2018-2019</option>
        </select>
      </div>
      <div>
        <div className='encabezado mb-5'>
          <h2>Tabla de Posiciones</h2>
          <img src={liga.logo} alt="" id='logo-liga' />
          <h2 className='nombre-liga'>{liga.name} Española</h2>
        </div>
        <div className='tabla-posiciones'>
          <table className='table table-secondary table-bordered table-responsive-sm'>
            <thead className='table-warning'>
              <tr>
                <th scope="col">Pos.</th>
                <th scope="col">Nombre de Equipo</th>
                <th scope="col">PJ</th>
                <th scope="col">PG</th>
                <th scope="col">PE</th>
                <th scope="col">PP</th>
                <th scope="col">GF</th>
                <th scope="col">GC</th>
                <th scope="col">DG</th>
                <th scope="col">PTS.</th>
              </tr>
            </thead>
            <tbody className='table-group-divider'>
              {
                equipos.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td><h3>{item.rank}</h3></td>
                      <td><img src={item.team.logo} alt="" id='img-equipo' /><h3>{item.team.name}</h3></td>
                      <td><h3>{item.all.played}</h3></td>
                      <td><h3>{item.all.win}</h3></td>
                      <td><h3>{item.all.draw}</h3></td>
                      <td><h3>{item.all.lose}</h3></td>
                      <td><h3>{item.all.goals.for}</h3></td>
                      <td><h3>{item.all.goals.against}</h3></td>
                      <td><h3>{item.goalsDiff}</h3></td>
                      <td><h3>{item.points}</h3></td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
        </div>
      </div>
      <div className="final"></div>
    </>
  )
}

export default LaLiga