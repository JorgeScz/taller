import React, { useEffect, useState } from 'react'
import Menu from '../plantilla/Menu'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default function Estudiante() {
  const url = "http://127.0.0.1:8000/ver_usuarios/"

  const [estudiantes, setEstudiantes] = useState([])

  useEffect(() => {
    cargarEstudiantes();
  }, []);

  const cargarEstudiantes = async () => {
    const resultados = await axios.get(url)
    setEstudiantes(resultados.data)

  }


  return (
    <>
      <Menu />
      <div className="container">
        <div className='container text-center' style={{ margin: "30px" }}>
          <h3 className='text-white'>Estudiantes</h3>
        </div>

        <table className="table table-striped table-hover align-middle table-primary">
          <thead className='table-dark'>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Nombre</th>
              <th scope="col">Apellido</th>
              <th scope="col">Correo</th>
              <th></th>
            </tr>
          </thead>
          <tbody >
            {
              estudiantes
              .filter(user => !user.is_superuser)
              .map((user, indice) => (
                <tr key={indice}>
                  <td></td>
                  <td scope="row">{user.first_name }</td>
                  <td>{user.last_name}</td>
                  <td>{user.email}</td>               
                  <td className='text-center'>
                    <div>
                      <Link to={``}
                        className='btn btn-warning btn-sm me-3'>Revisado</Link>

                    </div>
                  </td>
                </tr>
              ))
            }


          </tbody>
        </table>
      </div>
    </>


  )
}
