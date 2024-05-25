
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from '../components/Login'
import Home from '../components/Home'
import Menu from '../plantilla/Menu'
import Registro from '../components/Registro'
import PrivateRoute from './PrivateRoute'
import Estudiante from '../components/Estudiante'
import HomeE from '../components/HomeE'
import Encuesta from '../components/Encuesta'
import Mensaje from '../components/Mensaje'
import DatosE from '../components/DatosE'
import Resultados from '../components/Resultados'
import Recomendacion from '../components/Recomendacion'
import Grafica from '../components/Grafica'
//import PrivateRoute from './PrivateRoute'

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route
          exact path='/'
          element={<Login />}
        />
        {/* <Route 
          path='/home'
          element={<Home />}
        /> */}

        <Route
          path='/registro'
          element={<Registro />}
        />
        <Route
          path='/home'
          element={<PrivateRoute children={<Home />} />}
        />
        <Route
          path='/homee'
          element={<HomeE />}
        />

        <Route
          path='/datose/:id'
          element={<DatosE />}
        />

        <Route
          path='/encuesta/:id'
          element={<Encuesta />}
        />

        <Route
          path='/mensaje/:id'
          element={<Mensaje />}
        />
        <Route
          path='/resultados/:resultado'
          element={<Resultados/>}
        />

        <Route
          path='/recomendacion/:res'
          element={<Recomendacion/>}
        />

        <Route
          path='/grafica'
          element={<Grafica/>}
        />
        {/* <Route
          path='/homee'
          element={<PrivateRoute children={<HomeE />} />}
        /> */}

        <Route
          path='/estudiante'
          element={<PrivateRoute children={<Estudiante />} />}
        />

        {/*
        <Route
        path='/home'
        element={
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        }
        />*/}


      </Routes>
    </Router>
  )
}
