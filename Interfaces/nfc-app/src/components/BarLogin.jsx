import React, { useState } from 'react'

export const BarLogin = () => {
    const [sesion, setSesion] = useState(false)

    const handleSesion = () => {
        setSesion(!sesion)
        console.log(sesion);
    }


    return (
        <>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item mx-sm-2">
                        <a className="nav-link" aria-current="page" href="NFCRegistro.html">Inicio</a>
                    </li>
                    <li className="nav-item dropdown mx-sm-2">
                        <a className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown"
                            aria-expanded="false" id="navbarDropdorwn" href="#">Ventas</a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdorwn">
                            <li ><a className="dropdown-item" >Registrar venta</a></li>
                            <li><a className="dropdown-item" target="_blank" href="busqueda_Venta.html">Listado ventas</a></li>
                        </ul>
                    </li>
                    <li className="nav-item dropdown mx-sm-2">
                        <a className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown"
                            aria-expanded="false" id="navbarDropdorwn" href="#">Productos</a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdorwn">
                            <li><a className="dropdown-item" target="_blank" href="registro-producto.html">Registrar producto</a></li>
                            <li><a className="dropdown-item" target="_blank" href="actualizacion-producto.html">Actualizar producto</a></li>
                            <li><a className="dropdown-item" target="_blank" href="invVehiculos.html">Control productos</a></li>
                        </ul>
                    </li>
                    <li className="nav-item dropdown mx-sm-2">
                        <a className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown"
                            aria-expanded="false" id="navbarDropdorwn" href="#">Usuarios</a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdorwn">
                            <li><a className="dropdown-item" target="_blank" href="Gest_Usuarios.html">Listado usuarios</a></li>
                        </ul>
                    </li>
                    <li className="nav-item dropdown mx-sm-2">
                        <a className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown"
                            aria-expanded="false" id="navbarDropdorwn" href="#">Usuario: NFC</a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdorwn">
                            <li><a className="dropdown-item" target="_blank" href="editarUsuario.html">Actualizar información</a></li>
                            <li onClick={handleSesion} >Cerrar sesión</li>
                        </ul>
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
