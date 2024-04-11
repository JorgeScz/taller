import React, { useContext, useState } from 'react'
import { AuthContext } from '../context/AuthContext'
import { Link, useNavigate } from 'react-router-dom';
import '../CSS/style.css'
import axios from 'axios'


export default function Registro() {

  const [usuario, setUsuario] = useState({
    first_name: '',
    last_name: '',
    email: '',
    username: '',
    password: ''
  })

  const navegacion = useNavigate();
  const { first_name, last_name, email, username, password } = usuario

  const onInputChange = (e) => {
    setUsuario({ ...usuario, [e.target.name]: e.target.value })
  }

  const onSubmit = async (e) => {
    e.preventDefault();
    const urlB = "http://127.0.0.1:8000/registro/"
    await axios.post(urlB, usuario)

    navegacion('/login');

  }


  return (
    <>
      <section className="colorDiv">
        <h1 className='text-white'>RegístrateAhora!</h1>
        <div className="container py-0">
          <div className="row d-flex justify-content-center align-items-center mi-div">
            <div className="col-xl-10">
              <div className="card rounded-3 text-black colorDiv2">
                <div className="row g-0">
                  <form onSubmit={(e) => onSubmit(e)}>
                    <div className="row ">
                      <div className="col-lg-6">
                        <div className="card-body p-md-2 mx-md-2">
                          <div className="form-outline mb-2">
                            <label className="form-label text-white fs-5 float-start" htmlFor="email">Correo</label>
                            <input
                              type="email"
                              required
                              className="form-control input-negroR "
                              id="email"
                              name="email"
                              value={email}
                              onChange={(e) => onInputChange(e)}
                            />
                          </div>
                          <div className="form-outline mb-2">
                            <label className="form-label text-white fs-5 float-start" htmlFor="first_name">Nombre</label>
                            <input
                              type="text"
                              required
                              className="form-control input-negroR "
                              id="first_name"
                              name="first_name"
                              value={first_name}
                              onChange={(e) => onInputChange(e)}
                            />
                          </div>
                          <div className="form-outline mb-2">
                            <label className="form-label text-white fs-5 float-start" htmlFor="last_name">Apellido</label>
                            <input
                              type="text"
                              required
                              className="form-control input-negroR "
                              id="last_name"
                              name="last_name"
                              value={last_name}
                              onChange={(e) => onInputChange(e)}
                            />
                          </div>
                        </div>
                      </div>

                      <div className="col-lg-6">
                        <div className="card-body p-md-2 mx-md-2">
                          <div className="form-outline mb-2">
                            <label className="form-label text-white fs-5 float-start" htmlFor="username">Usuario</label>
                            <input
                              type="text"
                              required
                              className="form-control input-negroR "
                              id="username"
                              name="username"
                              value={username}
                              onChange={(e) => onInputChange(e)}
                            />
                          </div>
                          <div className="form-outline mb-2">
                            <label className="form-label text-white fs-5 float-start" htmlFor="password">Contraseña</label>
                            <input
                              type="password"
                              required
                              className="form-control input-negroR "
                              id="password"
                              name="password"
                              value={password}
                              onChange={(e) => onInputChange(e)}
                            />
                          </div>
                          <div className="form-outline mb-4">
                            <label className="form-label text-white fs-5 float-start" htmlFor="password">Confirmar Contraseña</label>
                            <input
                              type="password"
                              required
                              className="form-control input-negroR "
                              id="password2"
                              name="password2"
                              onChange={(e) => onInputChange(e)}
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-lg-6">
                        <div className="text-center pt-1 mb-2 pb-3">
                          <button type="submit" className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3">Regístrate</button>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="text-center">
                          <p className="text-white d-inline">¿Tienes una cuenta? </p>
                          <Link className=" d-inline ml-2" to="/login">Ingresar</Link>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br/>
      </section>
    </>


  )
}
