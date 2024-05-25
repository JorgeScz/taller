import React, { useContext, useEffect, useState } from 'react'
import MenuE from '../plantilla/MenuE'
import '../CSS/style.css'
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';
import { useParams } from 'react-router-dom';

export default function DatosE() {
  const { data } = useContext(AuthContext);
  const [estudiante, setEstudiante] = useState(null);
  const { id } = useParams();
  const url = 'https://taller-back-i5y5.onrender.com/'
  //const url = 'http://127.0.0.1:8000/'

  useEffect(() => {
    // Realiza la solicitud al servidor para obtener los datos del estudiante
    axios.get(`${url}estudiante/${id}/`, {
      headers: {
        "Authorization": `Token ${data.token}`
      }
    }).then((res) => {
      setEstudiante(res.data);
    }).catch(error => {
      console.error('Error al obtener los datos del estudiante:', error);
    });
  }, [data.token]);

  const edad = (fechaN) =>{
    const fechaActual = new Date();
    const fechaNa = new Date(fechaN);

    const diferenciaTiempo = fechaActual - fechaNa;
    const edadE = Math.floor(diferenciaTiempo / (1000 * 60 * 60 * 24 * 365))
    return edadE;
  }

  return (
    <>
      <MenuE />
      <section className='colorDiv2'>
        <div className="container row d-flex justify-content-center align-items-center mi-div">
          <div className='col-xl-10 colorDiv m-5'>
            <div className='text-white'>
              <div className="container">
                <h3>Datos del Estudiante</h3>
                <br />
                <div className="row ">
                  <div className="col-lg-6">
                    <div className="card-body p-md-2 mx-md-2">
                      <div className="form-outline mb-2">
                        <label className="form-label text-white fs-5 float-start" htmlFor="email">Correo</label>
                        <input
                          type="email"
                          disabled
                          className="form-control input-negroR "
                          id="email"
                          name="email"
                          value={estudiante?.email}
                        //onChange={(e) => onInputChange(e)}
                        />
                      </div>
                      <div className="form-outline mb-2">
                        <label className="form-label text-white fs-5 float-start" htmlFor="first_name">Nombre</label>
                        <input
                          type="text"
                          disabled
                          className="form-control input-negroR "
                          id="first_name"
                          name="first_name"
                          value={estudiante?.nombre}
                        //onChange={(e) => onInputChange(e)}
                        />
                      </div>
                      <div className="form-outline mb-2">
                        <label className="form-label text-white fs-5 float-start" htmlFor="last_name">Apellido</label>
                        <input
                          type="text"
                          disabled
                          className="form-control input-negroR "
                          id="last_name"
                          name="last_name"
                          value={estudiante?.apellidoP}
                        //onChange={(e) => onInputChange(e)}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="card-body p-md-2 mx-md-2">
                      <div className="form-outline mb-2">
                        <label className="form-label text-white fs-5 float-start" htmlFor="carrera">Carrera</label>
                        <input
                          type="text"
                          disabled
                          className="form-control input-negroR "
                          id="username"
                          name="username"
                          value={estudiante?.carrera}
                        //onChange={(e) => onInputChange(e)}
                        />
                      </div>
                      <div className="form-outline mb-2">
                        <label className="form-label text-white fs-5 float-start" htmlFor="control">Numero de control</label>
                        <input
                          type="text"
                          disabled
                          className="form-control input-negroR "
                          id="numeroc"
                          name="numeroc"
                          value={estudiante?.numeroControl}
                        //onChange={(e) => onInputChange(e)}
                        />
                      </div>
                      <div className="form-outline mb-4">
                        <label className="form-label text-white fs-5 float-start" htmlFor="edad">Edad</label>
                        <input
                          type="text"
                          disabled
                          className="form-control input-negroR "
                          id="edad"
                          name="edad"
                          value={edad(estudiante?.fecha_nacimiento)}
                        //onChange={(e) => onInputChange(e)}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>

  )
}
