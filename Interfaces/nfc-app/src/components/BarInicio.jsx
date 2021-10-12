import React, { useState } from 'react'
import { NavBar } from './NavBar'

export const BarInicio = () => {

    return (
        <>
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
                        <a className='nav-link'>Sign in</a>
                    </li>
                </ul>
                <form className="d-flex ms-sm-5 px-lg-2">
                    <input className="form-control me-2" type="search" placeholder="Escribe Aquí" aria-label="Search" />
                    <button className="btn btn-light" type="submit">Buscar</button>
                </form>
            </div>

        </>
    )
}
