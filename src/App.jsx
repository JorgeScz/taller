import axios from 'axios'
import './App.css'
import { AuthContext } from './context/AuthContext'
import AppRouter from './routers/AppRouter'
import { authReducer, LOGIN } from './reducers/authReducer'
import React, { useReducer, useEffect } from 'react';

function App() {

  const [data, dispatch] = useReducer(authReducer, {token: null})

  useEffect(() => {
    // Limpia el localStorage al cargar la aplicación
    localStorage.clear();
  }, []);

  const loginThunk = async (username, password) => {
    const res = await axios.post(
      'http://127.0.0.1:8000/login/',
      { username: username, password: password}
    )
    console.log(res.data.token)
    dispatch({ type: LOGIN, token: res.data.token})
  }
  return (

    <AuthContext.Provider
      value={{
        data,
        loginThunk
      }}
    >
      
      <AppRouter />
    </AuthContext.Provider>

  )
}

export default App
