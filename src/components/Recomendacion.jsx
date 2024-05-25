import React from 'react'
import { Link, useParams } from 'react-router-dom'
import MenuE from '../plantilla/MenuE';

const YouTubeThumbnail = ({ videoUrl }) => {
    let videoId = videoUrl.split('v=')[1];
    const ampersandPosition = videoId.indexOf('&');
    if (ampersandPosition !== -1) {
        videoId = videoId.substring(0, ampersandPosition);
    }

    const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

    return (
        <a href={videoUrl} target="_blank" rel="noopener noreferrer">
            <img src={thumbnailUrl} alt="YouTube Video Thumbnail" style={{ width: '100%', height: 'auto' }} />
        </a>
    );
};


export default function Recomendacion() {
    const { res } = useParams();

    const video1 = 'https://www.youtube.com/watch?v=3rM4W-xXT6Q';
    const video2 = 'https://www.youtube.com/watch?v=9cULPJfGoRA';
    const video3 = 'https://www.youtube.com/watch?v=tUXzvOwDkXQ';
    const video4 = 'https://www.youtube.com/watch?v=i4dwATyTcCk';
    const video5 = 'https://www.youtube.com/watch?v=hwjmrWjuW5s';
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
                                        <h3>Recomendaciones</h3>
                                        <h4>Estres: Moderado o Agudo</h4>
                                        <br />
                                        <div className="row align-items-center m-4">
                                            <div className="col-4">
                                                <h4>
                                                    Cómo manejar el estrés - 5 claves
                                                </h4>
                                            </div>
                                            <div className="col-8">
                                                <YouTubeThumbnail videoUrl={video1} />
                                            </div>
                                        </div>
                                        <div className="row align-items-center m-4">
                                            <div className="col-8">
                                                <YouTubeThumbnail videoUrl={video2} />
                                            </div>
                                            <div className="col-4">
                                                <h4>
                                                    Auto-masaje zona abdominal y plexo solar

                                                </h4>
                                            </div>
                                        </div>
                                        <div className="row align-items-center m-4">
                                            <div className="col-4">
                                                <h4>
                                                    Tips de relajación para reducir el estrés y la ansiedad
                                                </h4>
                                            </div>
                                            <div className="col-8">
                                                <YouTubeThumbnail videoUrl={video3} />
                                            </div>
                                        </div>

                                        <div className="row align-items-center m-4">
                                            <div className="col-3">

                                            </div>
                                            <div className="col-6">
                                                <h4>
                                                    <a href='https://recomendacionesestresagudo.blogspot.com/2024/05/medidas-usar-en-caso-de-estres-agudo-1.html'
                                                    target="_blank">
                                                        Mas recomendaciones</a>
                                                </h4>


                                            </div>
                                            <div className="col-3">

                                            </div>
                                        </div>
                                    </div>
                                )}
                                {res > 36 && (
                                    <div>
                                        <h3>Recomendaciones</h3>
                                        <h4>Estres: Alto o Cronico</h4>
                                        <br />
                                        <div className="row align-items-center m-4">
                                            <div className="col-4">
                                                <h4>
                                                    Auto-masaje zona abdominal y plexo solar

                                                </h4>
                                            </div>
                                            <div className="col-8">
                                                <YouTubeThumbnail videoUrl={video2} />
                                            </div>
                                        </div>

                                        <div className="row align-items-center m-4">
                                            <div className="col-8">
                                                <YouTubeThumbnail videoUrl={video5} />
                                            </div>
                                            <div className="col-4">
                                                <h4>
                                                    3 Pasos para desintoxicar la mente y dejar de pensar tanto


                                                </h4>
                                            </div>
                                        </div>

                                        <div className="row align-items-center m-4">
                                            <div className="col-4">
                                                <h4>
                                                    Cómo manejar el estrés - 5 claves
                                                </h4>
                                            </div>
                                            <div className="col-8">
                                                <YouTubeThumbnail videoUrl={video1} />
                                            </div>
                                        </div>

                                        <div className="row align-items-center m-4">
                                            <div className="col-8">
                                                <YouTubeThumbnail videoUrl={video4} />
                                            </div>
                                            <div className="col-4">
                                                <h4>
                                                    Yoga para estrés y ansiedad- Ideal para calmar el
                                                    sistema nervioso y reducir el estrés- Anabel Otero

                                                </h4>
                                            </div>
                                        </div>

                                        <div className="row align-items-center m-4">
                                            <div className="col-4">
                                                <h4>
                                                    Tips de relajación para reducir el estrés y la ansiedad
                                                </h4>
                                            </div>
                                            <div className="col-8">
                                                <YouTubeThumbnail videoUrl={video3} />
                                            </div>
                                        </div>
                                        <div className="row align-items-center m-4">
                                            <div className="col-3">

                                            </div>
                                            <div className="col-6">
                                                <h4>
                                                    <a target="_blank"
                                                    href='https://recomendacionesestresagudo.blogspot.com/2024/05/medidas-para-lidiar-con-el-estres.html'>
                                                        Mas recomendaciones</a>
                                                </h4>


                                            </div>
                                            <div className="col-3">

                                            </div>
                                        </div>
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
