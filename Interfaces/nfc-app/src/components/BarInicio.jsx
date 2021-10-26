
import React, { useState } from 'react'
import { Login } from './Login'
import { Modal } from 'reactstrap';



export const BarInicio = ({estados}) => {
    const[state, setState] = useState(0);

    const handleState = () => {
            setState(!state)
    }

    return (
        <>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item mx-sm-2">
                        <a className="nav-link" aria-current="page" href="/home">Inicio</a>
                    </li>
                    <li className="nav-item mx-sm-2">
                        <a className="nav-link" href="#vehiculos">Vehiculos</a>
                    </li>

                    <li className="nav-item mx-sm-2">
                        <a className="nav-link" href="#contacto">Contacto</a>
                    </li>
                    <li onClick={handleState} className="nav-item mx-sm-2">
                        <a className='nav-link'>Sign in</a>
                    </li>
                </ul>
                <form className="ms-sm-5 px-lg-2">
                    <input className="me-2 rounded" type="search" placeholder="Escribe Aquí" aria-label="Search" />
                    <button className="btn btn-light" type="button">Buscar</button>
                </form>
            </div>
            <Modal isOpen={state}>
                <div className='d-flex justify-content-end mt-3 me-3'>
                    <button className='btn btn-light btn-close' onClick={handleState}></button>
                </div>
                <Login/>
            </Modal>
        </>
    )
}
