import React, { useState } from 'react'
import MenuE from '../plantilla/MenuE';
import '../CSS/style.css'
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios'

export default function Encuesta() {
    const url = "http://127.0.0.1:8000/test/";
    const { id } = useParams();
    const navegacion = useNavigate();

    const [answers, setAnswers] = useState(Array(14).fill());

    const [test, setTest] = useState({
        resultado: '',
        tiempo: "00:05:00"
    })

    const { resultado, tiempo } = test

    const handleChange = (index, value) => {
        const newAnswers = [...answers];
        newAnswers[index] = value;
        setAnswers(newAnswers);
        console.log(`resultado ${resultado}`)
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log('respuestas enviadas:', answers);

        const suma = answers.reduce((total, answer) => total + answer, 0);
        let cont = 0;
        const sum = answers.map((x) => {
            cont += x
        })
        console.log("la suma es xd ".concat(cont))

        // Actualizar el estado con el resultado
        const t = {
            ...test,
            resultado: cont
        };
        console.log(t)
        const urlB = `${url}${id}/`;


        await axios.post(urlB, t);

        navegacion(`/resultados/${t.resultado}`)

    };


    return (
        <>
            <MenuE />
            <div>Encuesta</div>
            <section className='colorDiv2'>
                <div className="container row d-flex justify-content-center align-items-center mi-div">
                    <div className='col-xl-10 colorDiv m-5'>
                        <div className='text-white'>
                            <div className="container">
                                <div><h2 className=''>Cuestionario</h2></div>

                                <form onSubmit={handleSubmit}>
                                    {[
                                        "1. En el último mes, ¿con qué frecuencia ha estado afectado por algo que ha ocurrido inesperadamente?",
                                        "2. En el último mes, ¿con qué frecuencia se ha sentido incapaz de controlar las cosas importantes en su vida?",
                                        "3. En el último mes, ¿con qué frecuencia se ha sentido nervioso?",
                                        "4. En el último mes, ¿con qué frecuencia ha manejado con éxito los pequeños problemas irritantes de la vida?",
                                        "5. En el último mes, ¿con qué frecuencia ha sentido que ha afrontado efectivamente los cambios importantes que han estado ocurriendo en su vida?",
                                        "6. En el último mes, ¿con qué frecuencia ha estado seguro sobre su capacidad para manejar sus problemas personales?",
                                        "7. En el último mes, ¿con qué frecuencia ha sentido que las cosas le van bien?",
                                        "8. En el último mes, ¿con qué frecuencia ha sentido que no podía afrontar todas las cosas que tenía que hacer?",
                                        "9. En el último mes, ¿con qué frecuencia ha podido controlar las dificultades de su vida?",
                                        "10. En el último mes, ¿con qué frecuencia se ha sentido que tenía todo bajo control?",
                                        "11. En el último mes, ¿con qué frecuencia ha estado enfadado porque las cosas que le han ocurrido estaban fuera de su control?",
                                        "12. En el último mes, ¿con qué frecuencia ha pensado sobre las cosas que le quedan por hacer?",
                                        "13. En el último mes, ¿con qué frecuencia ha podido controlar la forma de pasar el tiempo?",
                                        "14. En el último mes, ¿con qué frecuencia ha sentido que las dificultades se acumulan tanto que no puede superarlas?",
                                    ].map((question, index) => (
                                        <div className='preguntasF'>
                                            <div key={index} className="mb-3 my-4 preguntas">
                                                <label className="form-label">{question}</label>
                                                <div className="d-flex">
                                                    {index === 0 || index === 1 || index === 2 || index === 7 || index === 10 || index === 11 || index === 13 ? (
                                                        /* Para los ítems 1, 2, 3, 8, 11, 12 y 14 */
                                                        [0, 1, 2, 3, 4].map((option) => (
                                                            <div key={option} className="form-check me-4 m-2">
                                                                <input
                                                                    
                                                                    type="radio"
                                                                    className="form-check-input"
                                                                    id={`option-${index}-${option}`}
                                                                    value={option}
                                                                    checked={answers[index] === option}                                                              
                                                                    onChange={() => handleChange(index, option)}
                                                                />
                                                                <label className="form-check-label letras" htmlFor={`option-${index}-${option}`}>{
                                                                    option === 0 ? "Nunca" :
                                                                        option === 1 ? "Casi nunca" :
                                                                            option === 2 ? "De vez en cuando" :
                                                                                option === 3 ? "A menudo" : "Muy a menudo"
                                                                }</label>
                                                            </div>
                                                        ))
                                                    ) : (
                                                        /* Para los ítems 4, 5, 6, 7, 9, 10 y 13 */
                                                        [4, 3, 2, 1, 0].map((option) => (
                                                            <div key={option} className="form-check me-4 m-2">
                                                                <input
                                                                    
                                                                    type="radio"
                                                                    className="form-check-input"
                                                                    id={`option-${index}-${option}`}
                                                                    value={option}
                                                                    checked={answers[index] === option}
                                                                    onChange={() => handleChange(index, option)}
                                                                />
                                                                <label className="form-check-label letras" htmlFor={`option-${index}-${option}`}>{
                                                                    option === 4 ? "Nunca" :
                                                                        option === 3 ? "Casi nunca" :
                                                                            option === 2 ? "De vez en cuando" :
                                                                                option === 1 ? "A menudo" : "Muy a menudo"
                                                                }</label>
                                                            </div>
                                                        ))
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                    <button type="submit" className="btn btn-primary">Terminar</button>
                                </form>

                            </div>
                        </div>
                    </div>

                </div>
            </section>



        </>

    )
}
