import React, { useContext, useEffect, useState } from 'react'
import MenuE from '../plantilla/MenuE'
import '../CSS/style.css'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';
export default function Mensaje() {
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


    return (
        <>
            <MenuE />
            <p>{estudiante?.id}</p>
            <section className='colorDiv2'>
                <div className="container row d-flex justify-content-center align-items-center mi-div">
                    <div className='col-xl-10 colorDiv m-5'>
                        <div className='text-white'>
                            <div className="container">
                                <h3>Escala de estrés percibido- (PSS)</h3>
                                <p>Las preguntas en esta escala hacen referencia a sus sentimientos y pensamiento
                                    durante el último mes. En cada caso, por favor seleccione la opcion con la que ustede se ha sentido o
                                    pensado en cada situacion
                                </p>
                                <p>La encuesta contiene 14 preguntas y cuanta con 10 minutos para responder</p>
                            </div>
                            <Link type="submit" className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3"
                                to={`/encuesta/${estudiante?.id}`}
                            >Iniciar</Link>

                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
