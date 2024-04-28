import React, { useContext } from "react";
import { Navigate, Outlet, Route, useNavigate } from 'react-router-dom'
import { AuthContext } from "../context/AuthContext";

export default function PrivateRoute({ children }) {

    const { data } = useContext(AuthContext)
    const token = data.token
    console.log(token)

    if (token) {
        //console.log("entre")

        return children
    } else {
        return <Navigate to="/login" />
    }

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