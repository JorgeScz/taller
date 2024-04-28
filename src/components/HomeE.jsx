import React, { useContext, useEffect, useState } from 'react'
import MenuE from '../plantilla/MenuE'
import '../CSS/style.css'
import estres from "../IMG/estres.jpeg"

export default function HomeE() {

  return (
    <>
    <MenuE />

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
