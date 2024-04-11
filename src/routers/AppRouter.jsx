
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from '../components/Login'
import Home from '../components/Home'
import Menu from '../plantilla/Menu'
import Registro from '../components/Registro'
//import PrivateRoute from './PrivateRoute'

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route
          exact path='/login'
          element={<Login />}
        />
        <Route 
          path='/home'
          element={<Home />}
        />

        <Route
          path='/registro'
          element={<Registro />}
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
