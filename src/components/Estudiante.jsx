import React, { useEffect, useState } from 'react'
import Menu from '../plantilla/Menu'
import axios from 'axios'
import '../CSS/style.css'

export default function Estudiante() {
  //const url = "http://127.0.0.1:8000/"
  const url = 'https://taller-back-i5y5.onrender.com/'

  const [estudiantes, setEstudiantes] = useState([])
  const [estudiantesSeleccionados, setEstudiantesSeleccionados] = useState([]);

  const [correo, setCorreo] = useState({
    to_email: [],
    subject: '',
    message: ''
  })

  const { to_email, subject, message } = correo

  useEffect(() => {
    cargarEstudiantes();
  }, []);

  const cargarEstudiantes = async () => {
    const resultados = await axios.get(`${url}estudiantes/`)
    setEstudiantes(resultados.data)

  }

  const handleCheckboxChange = (email) => {
    if (estudiantesSeleccionados.includes(email)) {
      setEstudiantesSeleccionados(estudiantesSeleccionados.filter(estudiante => estudiante !== email));
    } else {
      setEstudiantesSeleccionados([...estudiantesSeleccionados, email]);
    }

  };

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setCorreo({ ...correo, [name]: value });
  }

  const onSubmit = async (e) => {
    e.preventDefault();

    const c = {
      to_email: estudiantesSeleccionados,
      subject: subject,
      message: message
    }

    const urlB = "http://127.0.0.1:8000/enviarcorreo/"

    await axios.post(urlB, c)
    setCorreo({
      to_email: [],
      subject: '',
      message: ''
    });
    // Cerrar el modal después de enviar el correo
  }

  const revisadoES = async (id) => {
    const mensaje = `¿Estás seguro de marcar como revisado al estudiante con ID ${id}?`;
    const confirmacion = window.confirm(mensaje);

    if (confirmacion) {
      try {
        const response = await axios.put(`${url}/revisado/${id}/`);
        console.log(response.data);
        cargarEstudiantes();
      } catch (error) {
        console.error('Error al marcar estudiante como revisado:', error);
      }
    } else {
    }
  };

  return (
    <>
      <Menu />
      <div className="container">
        <div className='container text-center' style={{ margin: "30px" }}>
          <h3 className='text-white'>Estudiantes</h3>
        </div>
        <div className="row">
          <div className='text-end'>
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
              Enviar Correo
            </button>
          </div>
        </div>

        <table className="table table-striped table-hover align-middle table-primary">
          <thead className='table-dark'>
            <tr>
              <th scope="col">No. Cntrol</th>
              <th scope="col">Nombre</th>
              <th scope="col">Apellido</th>
              <th scope="col">Correo</th>
              <th scope='col'>Resultado</th>
              <th scope='col'>Nivel de estres</th>
              <th scope='col'>Estatus</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody >
            {
              estudiantes
                .map((estudiantes, index) => (
                  <tr key={index}>
                    <td>{estudiantes.numeroControl}</td>
                    <td scope="row">{estudiantes.nombre}</td>
                    <td>{estudiantes.apellidoP}</td>
                    <td>{estudiantes.email}</td>
                    <td>{estudiantes.resultado_test}</td>
                    <td style={{ color: estudiantes.resultado_test < 19 ? 'green' : estudiantes.resultado_test < 37 ? 'rgb(254,192,7,255)' : 'red' }}>
                      <strong>{estudiantes.resultado_test < 19 ? 'Leve' : estudiantes.resultado_test < 37 ? 'Moderado' : 'Alto'}</strong>
                      
                    </td>
                    <td>{estudiantes.revisadot ? 'Revisado' : 'Pendiente'}</td>
                    <td>
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value={estudiantes.email}
                        id={`checkbox-${index}`}
                        onChange={() => handleCheckboxChange(estudiantes.email)}
                        checked={estudiantesSeleccionados.includes(estudiantes.email)}
                      />
                    </td>
                    <td className='text-center'>

                      {!estudiantes.revisadot && (
                        <div>
                          <button className='btn btn-warning btn-sm me-3' onClick={() => revisadoES(estudiantes.idtest)}>
                            Revisado
                          </button>
                        </div>
                      )}

                    </td>
                  </tr>
                ))
            }


          </tbody>
        </table>
      </div>


      <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog colorDiv">
          <div className="modal-content colorDiv text-white">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="staticBackdropLabel">Enviar correo</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form onSubmit={(e) => onSubmit(e)}>
                <div className="form-outline mb-2">
                  <label className="form-label fs-5 float-start" htmlFor="email">Asunto</label>
                  <input
                    type="text"
                    required
                    className="form-control input-negroR "
                    id="subject"
                    name="subject"
                    value={subject}
                    onChange={(e) => onInputChange(e)}
                  />
                </div>
                <div className="form-outline mb-2">
                  <label className="form-label fs-5 float-start" htmlFor="email">Mensaje</label>
                  <input
                    type="text"
                    required
                    className="form-control input-negroR "
                    id="message"
                    name="message"
                    value={message}
                    onChange={(e) => onInputChange(e)}
                  />
                </div>
                <button type="submit" className="btn btn-primary">Enviar</button>
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>

            </div>
          </div>
        </div>
      </div>
    </>


  )
}
