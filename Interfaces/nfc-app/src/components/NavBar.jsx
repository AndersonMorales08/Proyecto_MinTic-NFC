
import React, { useState } from 'react'
// import { initializeApp } from 'firebase/app';
// import { getAuth, onAuthStateChanged, getRedirectResult } from 'firebase/auth';
// import { } from 'firebase/auth';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export const NavBar = () => {

    // const [state, setState] = useState(false)

    // const abrirModal = () => {
    //     if (state == false) {
    //         setState(true);
    //     }
    // }

    // const cerrarModal = () => {
    //     if (state == true) {
    //         setState(false);
    //     }
    // }

    // const firebaseApp = initializeApp({ /* config */ });
    // const auth = getAuth(firebaseApp);
    // onAuthStateChanged(auth, user => { /* check status */ });

    // const handleAuth = () => {
    //     const provider = new firebase.auth.GoogleAuthPrivider();
    //     firebase.auth().signInWithPopup(provider)
    // }


    return (
        <>
            <nav className="navbar navbar-expand-xl fixed-top bg-dark navbar-dark">
                <div className="container-fluid">
                    <div><img className="logo" src="Sources/NFC logo.png" alt="" srcSet="" /></div>
                    <a className="navbar-brand ps-3" href="/#">NFC Motors</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item mx-sm-2">
                                <a className="nav-link" aria-current="page" href="/#">Inicio</a>
                            </li>
                            <li className="nav-item mx-sm-2">
                                <a className="nav-link" href="/#">Vehiculos</a>
                            </li>
                            <li className="nav-item mx-sm-2">
                                <a className="nav-link" href="/#" target="_blank">Nosotros</a>
                            </li>

                            <li className="nav-item mx-sm-2">
                                <a className="nav-link" href="/#">Contacto</a>
                            </li>
                            <li className="nav-item mx-sm-2">
                                <button  className='btn btn-dark'>Sign in</button>
                            </li>

                        </ul>
                        <form className="d-flex ms-sm-5 px-lg-2">
                            <input className="form-control me-2" type="search" placeholder="Escribe Aquí" aria-label="Search" />
                            <button className="btn btn-light" type="submit">Buscar</button>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    )
}
