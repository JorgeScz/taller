import React from 'react'
import { Link, Navigate } from 'react-router-dom'
import sesion from '../IMG/sesion.png'
export default function Menu() {

    const   cerrarSesion = () =>{
        //Navigate to=('/login')
    }


    return (
        <div className="container">
            <nav className="navbar navbar-expand-lg navbar-dark gradient-custom-2">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/home">StressTest</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/home">Inicio</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/estudiante">Estudiantes</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/grafica">Graficas</Link>
                            </li>
                        </ul>
                        
                    </div>
                    <div className="dropdown ">
                        <button className="btn btnDr dropdown-toggle btn-lg" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <img src={sesion} alt="" height={30} />
                        </button>
                        <ul className="dropdown-menu text-center divDr">
                            <li><p className="dropdown-item">Administrador </p></li>
                            <li><a className="dropdown-item" href="#"></a></li>
                            <form action="Validar" method="POST">
                                <Link className="dropdown-item" to='/login'>Salir</Link>
                            </form>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
