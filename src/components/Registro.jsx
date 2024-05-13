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
    password: '',
    numeroControl: '',
    confirmPassword: '',
    carrera: '',
    fechaNacimiento: ''
  })

  const navegacion = useNavigate();
  const { first_name, last_name, email, username, password, numeroControl, confirmPassword, carrera, fechaNacimiento } = usuario

  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [passwordError2, setPasswordError2] = useState('');
  const [submitError, setSubmitError] = useState('');


  const onInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'numeroControl') {
      if (!isNaN(value)) {
        const trimmedValue = value.slice(0, 8);
        setUsuario({ ...usuario, [name]: trimmedValue });
      }
    } else {
      // Para otros campos, actualizar el estado directamente
      setUsuario({ ...usuario, [name]: value });

      if (name === 'email') {
        const isValidEmail = validateEmail(value);
        setEmailError(isValidEmail ? '' : 'El correo no es válido');
      }
    }

    // Validar contraseñas solo si ambos campos de contraseña tienen valor
    if (name === 'password') {
      const isValidLength = value.length >= 5;
      setPasswordError2(isValidLength ? '' : 'La contraseña debe tener al menos 5 caracteres');
    }

    // Validar la contraseña al cambiar el campo "Confirmar Contraseña"
    if (name === 'confirmPassword') {
      const isValid = value === usuario.password;
      setPasswordError(isValid ? '' : 'Las contraseñas no coinciden');
    }
  }

  const onSubmit = async (e) => {
    e.preventDefault();
    if (usuario.password !== usuario.confirmPassword) {
      setSubmitError('Las contraseñas no coinciden');
      return;
    }

    const urlB = "http://127.0.0.1:8000/registro/"
    await axios.post(urlB, usuario)

    navegacion('/login');

  }

  //Validaciones


  const validateEmail = (email) => {
    const regex = /^\d{8}@itoaxaca\.edu\.mx$/;
    return regex.test(email);
  };


  return (
    <>
      <section className="colorDiv">
        <div className="d-inline-block">
          <h1 className='text-white d-inline'><strong>Regístrate</strong></h1>
          <h1 className='d-inline ml-2' style={{ color: '#f81efe' }}><strong>Ahora!</strong></h1>
        </div>
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
                            <label className="form-label text-white fs-5 float-start" htmlFor="email">Numero de control</label>
                            <input
                              type="text"
                              required
                              className="form-control input-negroR "
                              id="numeroControl"
                              name="numeroControl"
                              value={numeroControl}
                              onChange={(e) => onInputChange(e)}
                            />
                          </div>
                          <div className="form-outline mb-2">
                            <label className="form-label text-white fs-5 float-start" htmlFor="email">Correo Institucional</label>
                            <input
                              type="text"
                              required
                              className="form-control input-negroR "
                              id="email"
                              name="email"
                              value={email}
                              onChange={(e) => onInputChange(e)}
                            />
                            <div className="text-danger">
                              {emailError}
                            </div>

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
                            <label className="form-label text-white fs-5 float-start" htmlFor="username">Carrera</label>
                            <select
                              required
                              className="form-control input-negroR"
                              id="carrera"
                              name="carrera"
                              value={carrera}
                              onChange={(e) => onInputChange(e)}
                            >
                              <option value="">Selecciona una carrera</option>
                              <option value="Ing. en Sistemas">Ing. en Sistemas</option>
                              <option value="Ing. Civil">Ing. Civil</option>
                              <option value="Ing. Mecanica">Ing. Mecanica</option>
                              <option value="Ing. Eléctrica">Ing. Eléctrica</option>
                              <option value="Ing. Electronica">Ing. Electronica</option>
                              <option value="Ing. Industrial">Ing. Industrial</option>
                              <option value="Ing. Quimica">Ing. Quimica</option>
                              <option value="Ing. Gestion Empresarial">Ing. Gestion Empresarial</option>
                              <option value="Lic. Administracion">Lic. Administracion</option>
                              <option value="Lic. Contabilidad">Lic. Contabilidad</option>
                            </select>
                          </div>

                          <div className="form-outline mb-2">
                            <label className="form-label text-white fs-5 float-start" htmlFor="fechaNacimiento">Fecha de nacimiento</label>
                            <input
                              type="date"
                              required
                              className="form-control input-negroR "
                              id="fechaNacimiento"
                              name="fechaNacimiento"
                              value={fechaNacimiento}
                              onChange={(e) => onInputChange(e)}
                            />
                          </div>
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
                            <div className="text-danger">{passwordError2}</div>
                          </div>
                          <div className="form-outline mb-4">
                            <label className="form-label text-white fs-5 float-start" htmlFor="password">Confirmar Contraseña</label>
                            <input
                              type="password"
                              required
                              className="form-control input-negroR "
                              id="confirmPassword"
                              name="confirmPassword"
                              value={confirmPassword}
                              onChange={(e) => onInputChange(e)}
                            />
                            <div className="text-danger">{passwordError}</div>

                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-lg-6">
                        <div className="text-center pt-1 mb-2 pb-3">
                          <div className="text-danger">{submitError}</div>

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
        <br />
      </section>
    </>
  )
}
