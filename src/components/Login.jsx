import React, { useContext, useState } from 'react'
import { AuthContext } from '../context/AuthContext'
import { useNavigate, Link } from 'react-router-dom';
import '../CSS/style.css'
import logo from '../IMG/logo.jpg';

export default function Login() {

  const { loginThunk } = useContext(AuthContext)
  const [formState, setFormState] = useState({
    username: '',
    password: '',
  })

  const navegacion = useNavigate();
  const { username, password } = formState

  const onInputChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value })
  }

  const onSubmit = (e) => {
    e.preventDefault();
    loginThunk(formState.username, formState.password)
      .then(() => {
        navegacion('/home')
      })
  }

  /*return (

    <div>
      <h1>Login llll</h1>
      <form onSubmit={(e) => onSubmit(e)}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Usuario</label>
          <input type="text" className="form-control" id="username" name='username' value={username}
           onChange={(e)=>onInputChange(e)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Contraseña</label>
          <input type="password" className="form-control" id="password" name='password' value={password}
            onChange={(e)=>onInputChange(e)} />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>

  )*/
  return (
    <section className=" colorDiv2" >
      <div className="container py-0">
        <div className="row d-flex justify-content-center align-items-center mi-div">
          <div className="col-xl-10 colorDiv">
            <div className="card rounded-3 text-black colorDiv">
              <div className="row g-0">
                <div className="col-lg-7 d-flex align-items-center" style={{}}>
                  <div className="text-white px-3 py-0 p-md-0 mx-md-4">
                    <h4 className="mb-0 text-center" style={{ color: 'black' }}></h4>
                    <h2>StressTest</h2>
                    <br/>
                    <p>¿Te sientes estresado?</p>                 
                    <br />
                    <p className="small mb-0">
                      <img src={logo} alt="" className='imagenR' height="350" width="" />
                    </p>
                  </div>
                </div>
                <div className="col-lg-5">
                  <div className="card-body p-md-2 mx-md-2">
                    <div className="text-center">
                    <br/><br/>
                    </div>
                    <form onSubmit={(e) => onSubmit(e)}>
                      <div className="form-outline mb-4">
                        <label className="form-label text-white fs-5 float-start" htmlFor="username">Usuario</label>
                        <input
                          type="text"
                          className="form-control input-negro"
                          id="username"
                          name="username"
                          value={username}
                          onChange={(e) => onInputChange(e)}
                        />
                      </div>
                      <div className="form-outline mb-4">
                        <label className="form-label text-white fs-5 float-start" htmlFor="password">Contraseña</label>
                        <input
                          type="password"
                          className="form-control input-negro "
                          id="password"
                          name="password"
                          value={password}
                          onChange={(e) => onInputChange(e)}
                        />
                      </div>
                      <div className="text-center pt-1 mb-2 pb-3">
                        <button type="submit" className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3">Ingresar</button>
                      </div>
                      <div className="text-center">
                        <p className="text-white d-inline">¿No tienes una cuenta? </p>
                        <Link className="d-inline ml-2" to="/registro">Regístrate</Link>
                      </div>
                    </form>                 
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
