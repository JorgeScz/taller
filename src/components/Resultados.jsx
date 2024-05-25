import React from 'react'

import '../CSS/style.css'
import { Link, useParams } from 'react-router-dom'
import MenuE from '../plantilla/MenuE'

export default function Resultados() {
    const { resultado } = useParams();
    console.log(resultado)
    return (
        <>
            <MenuE />
            <section className='colorDiv2'>
                <div className="container row d-flex justify-content-center align-items-center mi-div">
                    <div className='col-xl-10 colorDiv m-5'>
                        <div className='text-white'>
                            <div className="container">
                                <h3><strong>Análisis y resultado</strong></h3>
                                <br />
                                <p>Puntos: {resultado}
                                </p>
                                <p>Estres: <strong>{resultado < 19 ? 'Bajo' : resultado < 37 ? 'Moderado' : 'Alto'}</strong></p>
                                {resultado<19 && (
                                    <p>
                                        Has experimentado un bajo nivel de estrés. ¡Felicitaciones! Continúa practicando hábitos saludables para mantener este equilibrio.
                                    </p>
                                )}
                                {resultado > 19 && resultado < 37 && (
                                    <p>
                                        Has experimentado un nivel moderado de estrés. Es importante prestar atención a cómo te
                                        sientes y cosiderar algunas estrategias para gestionar el estrés. Tu nivel de estrés es moderado.
                                        Puede ser útil explorar algunas técnicas de manejo del estrés para mantener tu bienestar
                                    </p>
                                )}

                                {resultado >= 37 && (
                                    <p>
                                        Has experimentado un alto nivel de estrés. Es crucial priorizar tu bienestar y buscar apoyo
                                         para gestionar el estrés de manera efectiva. Recuerda que no estás solo; hay recursos y personas
                                          dispuestas a ayudarte. Tómate el tiempo necesario para descansar, practicar técnicas de relajación 
                                          y cuidar tu salud mental.
                                    </p>
                                )}

                            </div>
                            <div className='container'>
                                <Link type="submit" className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3 mx-3"
                                    to={`/homee`}
                                >Inicio</Link>
                                <Link type="submit" className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3 mx-3"
                                    to={`/recomendacion/${resultado}`}
                                >Ver recomendaciones</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
