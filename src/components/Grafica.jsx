import React from 'react'
import LineGrafica from './LineGrafica'
import BarGrafica from './BarGrafica'
import Menu from '../plantilla/Menu'

export default function Grafica() {
    return (
        <>
            <Menu />
            <div className="container mt-4">
                <div className="mb-4">
                    <div className="card border-primary">
                        <div className="card-body">
                            <h5 className="card-title">Cantidad de estudiantes en cada nivel de estrés</h5>
                            <div className="bg-light p-0">
                                <BarGrafica />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mb-4">
                    <div className="card border-primary">
                        <div className="card-body">
                            <h5 className="card-title">Resultados de test por estudiante</h5>
                            <div className="bg-light p-0">
                                <LineGrafica />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
