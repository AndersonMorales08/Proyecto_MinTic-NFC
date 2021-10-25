import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home } from './Pages/Home';
import { UserDashBoard } from './Pages/UserDashBoard';
import { NotFound } from './Pages/NotFound';
import { App } from './App'
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "@firebase/auth";
import { auth } from "./components/firebaseconf";
import { Loading } from "./components/Loading.js";

function Rutas() {

    const [firebaseUser, setFirebaseUser] = useState(false);

    useEffect(() => {
        onAuthStateChanged(auth, (dataUser) => {

            if (dataUser) {
                const usuario = {
                    id: dataUser.uid,
                    email: dataUser.email
                }
                console.log(usuario);
                setFirebaseUser(usuario)
            } else {
                setFirebaseUser(null)
            }

        })
    }, [setFirebaseUser])


    return firebaseUser !== false ? (
        // Segundo
        <Router>
            <App usuario={firebaseUser} />
        </Router>
    )
        :
        <Loading />
        ;
}
export default Rutas;

