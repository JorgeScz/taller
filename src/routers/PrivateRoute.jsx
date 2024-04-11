import React, { useContext} from "react";
import {Navigate, Route} from 'react-router-dom'
import { AuthContext } from "../context/AuthContext";

export default function PrivateRoute({component: Component, ...rest}) {

    const { data } = useContext(AuthContext)

  return (
    <Route { ...rest }
        component={(props) => (
            ( data.token )
                ? (<Component {...props}/>)
                : (<Navigate to='/login'/>)
        )} 
    />
  )
}

/*
import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { useContext } from 'react';

export default function PrivateRoute({ element, ...rest }) {
    const { data } = useContext(AuthContext);

    return (
        <Route
            {...rest}
            element={data.token ? element : <Navigate to="/login" />}
        />
    );
}*/