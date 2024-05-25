import React, { useContext, useEffect, useState } from 'react'
import Menu from '../plantilla/Menu'
import { AuthContext } from '../context/AuthContext'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import estres from "../IMG/estres.jpeg"


export default function Home() {

  const { data } = useContext(AuthContext);
  const [user, setUser] = useState(null);
  const url = 'https://taller-back-i5y5.onrender.com/'
  //const url = 'http://127.0.0.1:8000/'

  const navegacion = useNavigate();

  useEffect(() => {
    // Intenta obtener los datos del usuario desde el almacenamiento local
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) {
      setUser(storedUser);
    } else {
      // Si no hay datos almacenados, realiza la solicitud al servidor
      axios.get(`${url}usuario/`, {
        headers: {
          "Authorization": `Token ${data.token}`
        }
      }).then((res) => {
        setUser(res.data);
        // Almacena los datos del usuario en el almacenamiento local
        localStorage.setItem('user', JSON.stringify(res.data));
        if (!res.data.is_superuser) {
          navegacion('/homee'); // Cambia '/otra-ruta' por la ruta a la que quieras redirigir
        }
      }).catch(error => {
        console.error('Error al obtener los datos del usuario:', error);
      });
    }
  }, [data.token]);

  return (
    <>

      <Menu />
      <section className='colorDiv2'>
        <div className="container row d-flex justify-content-center align-items-center mi-div">
          <div className='col-xl-10 colorDiv m-5'>
            <div className='text-white'>
              <div className="container">
                <div className="row ">
                  <img src={estres} alt="" height="" width="" />

                  <h3>“Una de las mejores maneras de reducir el estrés es aceptar las cosas que no puedes controlar”</h3>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}
