import React from 'react'
import { Link } from 'react-router-dom'

export default function Menu() {
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
                                <Link className="nav-link" to="">Encuesta</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
