import React from 'react'
import { Link, useParams } from 'react-router-dom'
import MenuE from '../plantilla/MenuE';

export default function Recomendacion() {
    const { res } = useParams();
    return (
        <>
            <MenuE />
            <section className='colorDiv2'>
                <div className="container row d-flex justify-content-center align-items-center mi-div">
                    <div className='col-xl-10 colorDiv m-5'>
                        <div className='text-white'>
                            <div className="container">

                                {res >= 19 && res <= 36 && (
                                    <div>
                                        <h3>Estres Moderado o Agudo</h3>
                                        <p>1. Respiración rítmica para disminuir la ansiedad: inspiración y espiración nasal
                                            y de forma lenta, con los ojos cerrados y esperando que la frecuencia cardiaca disminuya
                                            y el resto de los síntomas simpáticos (sudor, aceleramiento cerebral...) se reduzcan.
                                            Después la apertura de los ojos debe mantener la sensación de tranquilidad. Al iniciar
                                            cualquier actividad el rimo respiratorio no debe perderse
                                        </p>
                                        <p>
                                            2. Realizar un masaje del plexo solar, localizado en la “boca del estómago”, mediante
                                            inspiraciones muy profundas sobre la región costo abdominal provocando una gran expansión
                                            hacia fuera de la región abdominal; se mantiene la apnea en inspiración durante 3 segundos;
                                            se permite la salida por la boca del aire de forma suave. Se repite el proceso por tres veces.
                                            Después de realizar este masaje se produce una gran bradicardia, gran tranquilidad e incluso
                                            un poco sensación de mareo.
                                        </p>
                                        <p>
                                            3. Frenar con nuestra inteligencia, con autocontrol o control mental, la reacción de estrés,
                                            es decir, no preocuparse hasta que no llegue el momento. No hay que olvidar que la mayor parte
                                            de las veces, el estrés se controla mediante un ejercicio de nuestra razón: el control de
                                            cualquier comportamiento aprendido puede ser hecho mediante la activación de mecanismos
                                            inteligentes. Este control mental debe apoyarse en estos principios:
                                            •	Interrumpir las cadenas de pensamiento destructivo: decir ¡STOP!
                                            •	Cambiar los pensamientos negativos a positivos.
                                            •	Abstraerse del marco estresante con escenarios futuros.
                                            •	Solución posible a los problemas en 5 pasos: análisis de la causa, análisis del efecto,
                                            buscar diversas soluciones, estudiar el efecto que produciría una solución, analizar resultados
                                        </p>
                                        <p>
                                            4. Eliminar la energía acumulada mediante una actividad física (pasear, correr, bailar, práctica
                                            deportiva, hablar para contar lo que uno siente...). Si hay que hablar en ese momento lo mejor
                                            es hablar con movimiento, con melodía de la voz. Este es un buen momento para exagerar el
                                            movimiento melódico, ya que soltará todas las tensiones.
                                        </p>
                                        <p>
                                            5. Buscar respuestas de relajación (de parada, de descarga hormonal). Soltar la musculatura y
                                            el espíritu con la relajación.
                                        </p>
                                        <p>
                                            6. Practicar una actividad de desconexión con el exterior o interior. Evasión. (reposo, leer,
                                            escuchar música, tumbarse en el sofá, dormir, estar con poca gente, darse una ducha de agua
                                            caliente, tomar el sol, cualquier ejercicio en la piscina, imágenes positivas vividas:
                                            paisajes, animales..., dedicarse un tiempo a uno mismo, ir de compras, actividades culturales,
                                            dobles actividades: leer y escuchar música simultáneamente).
                                        </p>
                                    </div>
                                )}
                                {res > 36 && (
                                    <div>
                                        <h3>Estres Alto o Cronico</h3>
                                        <p>
                                            1. Practicar un deporte y/o realizar una mayor vida al aire libre.
                                        </p>
                                        <p>
                                            2. Fomentar las actividades culturales (leer, acudir a exposiciones...).
                                        </p>
                                        <p>
                                            3. Salir de uno mismo: hablar con la gente, ser comunicativo, preocuparse por los demás, cambiar la
                                            televisión por tus amigos. Participar en actividades de voluntariado.
                                        </p>
                                        <p>
                                            4. Hacer cambios frecuentes de actividad y de preocupaciones. Romper monotonías, empezar.
                                        </p>
                                        <p>
                                            5. Rememorar imágenes mentales agradables de lugares, de personas, de sensaciones, de música
                                            (real o imaginaria) que disparan sensaciones placenteras y paran el ritmo de la actividad.
                                        </p>
                                        <p>
                                            6. Si nuevos factores estresantes hacen difícil para ti afrontar las situaciones o si las medidas
                                            de cuidado personal no te alivian el estrés, quizá desees considerar terapia o asesoramiento psicológico.
                                            La terapia también puede ser una buena idea si te sientes abrumado o atrapado. También puedes pensar en la
                                            terapia si te preocupas mucho, o si tienes problemas para llevar a cabo las rutinas diarias o cumplir con
                                            tus obligaciones en el trabajo, en casa o en la escuela. Los consejeros o terapeutas profesionales pueden
                                            ayudarte a encontrar las fuentes de tu estrés y a aprender nuevos medios para afrontar situaciones
                                            difíciles.
                                        </p>
                                    </div>
                                )}
                            </div>
                            <div className='container'>
                                <Link type="submit" className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3 mx-3"
                                    to={`/homee`}
                                >Inicio</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
