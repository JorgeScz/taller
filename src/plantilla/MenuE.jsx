import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext';
import sesion from '../IMG/sesion.png'

export default function MenuE() {
    const { data } = useContext(AuthContext);
    const [user, setUser] = useState(null);
    const url = 'https://taller-back-i5y5.onrender.com/usuario/'
    //const url = 'http://127.0.0.1:8000/usuario/'

    useEffect(() => {
        // Intenta obtener los datos del usuario desde el almacenamiento local
        const storedUser = JSON.parse(localStorage.getItem('user'));
        if (storedUser) {
            setUser(storedUser);
        } else {
            // Si no hay datos almacenados, realiza la solicitud al servidor
            axios.get(url, {
                headers: {
                    "Authorization": `Token ${data.token}`
                }
            }).catch(error => {
                console.error('Error al obtener los datos del usuario:', error);
            });
        }
    }, [data.token]);



    return (
        <div className="container">
            <nav className="navbar navbar-expand-lg navbar-dark gradient-custom-2">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/homee">StressTest</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">

                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/homee">Inicio</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={`/datose/${user?.id}`}>Datos del estudiante</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to={`/mensaje/${user?.id}`}>Encuesta</Link>
                            </li>
                        </ul>

                    </div>

                    <div className="dropdown ">
                        <button className="btn btnDr dropdown-toggle btn-lg" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <img src={sesion} alt="" height={30} />
                        </button>
                        <ul className="dropdown-menu text-center divDr">
                            <li><p className="dropdown-item">Estudiante </p></li>
                            <li><a className="dropdown-item" href="#">{user?.username}</a></li>
                            <form action="Validar" method="POST">
                                <Link className="dropdown-item" to='/'>Salir</Link>
                            </form>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
