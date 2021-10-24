import React, { useState } from 'react'
import { Modal } from 'reactstrap';
import { RegVenta } from './RegVenta'
import { BusquedaVentas } from './BusquedaVentas'
import { RegProducto } from './RegProducto'
import { ActProducto } from './ActProducto'
import { BusquedaProducto } from './BusquedaProducto'
import { ListaUsuarios } from './ListaUsuarios'
import { ActUsuario } from './ActUsuario'
import { logOutUsuario } from './firebaseconf';


export const BarLogin = () => {
    const [rv, setrv] = useState(false)
    const [bv, setbv] = useState(false)
    const [rp, setrp] = useState(false)
    const [ap, setap] = useState(false)
    const [bp, setbp] = useState(false)
    const [lu, setlu] = useState(false)
    const [au, setau] = useState(false)

    const handleIterfazrv = () => {
        setrv(true)
    }
    const handleIterfazbv = () => {
        setbv(true)
    }
    const handleIterfazrp = () => {
        setrp(true)
    }
    const handleIterfazap = () => {
        setap(true)
    }
    const handleIterfazbp = () => {
        setbp(true)
    }
    const handleIterfazlu = () => {
        setlu(true)
    }
    const handleIterfazau = () => {
        setau(true)
    }

    const closeInterfaz = () => {
        setrv(false)
        setbv(false)
        setrp(false)
        setap(false)
        setbp(false)
        setlu(false)
        setau(false)
    }

    return (
        <>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item dropdown mx-sm-2">
                        <a className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown"
                            aria-expanded="false" id="navbarDropdorwn" href="#">Ventas</a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdorwn">
                            <li onClick={handleIterfazrv}><a className="dropdown-item" >Registrar venta</a></li>
                            <li onClick={handleIterfazbv}><a className="dropdown-item" >Listado ventas</a></li>
                        </ul>
                    </li>
                    <li className="nav-item dropdown mx-sm-2">
                        <a className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown"
                            aria-expanded="false" id="navbarDropdorwn" href="#">Productos</a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdorwn">
                            <li onClick={handleIterfazrp}><a className="dropdown-item">Registrar producto</a></li>
                            <li onClick={handleIterfazap}><a className="dropdown-item">Actualizar producto</a></li>
                            <li onClick={handleIterfazbp}><a className="dropdown-item">Control productos</a></li>
                        </ul>
                    </li>
                    <li className="nav-item dropdown mx-sm-2">
                        <a className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown"
                            aria-expanded="false" id="navbarDropdorwn" href="#">Usuarios</a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdorwn">
                            <li onClick={handleIterfazlu}><a className="dropdown-item" >Listado usuarios</a></li>
                        </ul>
                    </li>
                    <li className="nav-item dropdown mx-sm-2">
                        <a className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown"
                            aria-expanded="false" id="navbarDropdorwn" href="#">Usuario: NFC</a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdorwn">
                            <li onClick={handleIterfazau}><a className="dropdown-item">Actualizar información</a></li>
                            <li onClick={logOutUsuario}><a href="/home" className="dropdown-item">Cerrar sesión</a></li>
                        </ul>
                    </li>

                </ul>
                <form className="d-flex ms-sm-5 px-lg-2">
                    <input className="form-control me-2" type="search" placeholder="Escribe Aquí" aria-label="Search" />
                    <button className="btn btn-light" type="submit">Buscar</button>
                </form>
            </div>
            <Modal className='modal-lg p-5' isOpen={rv}>
                <div className='d-flex bg-light justify-content-end'>
                    <button className='btn btn-light' onClick={closeInterfaz}>X</button>
                </div>
                <RegVenta />
            </Modal>
            <Modal className=' modal-lg' isOpen={bv}>
                <div className='d-flex bg-light justify-content-end'>
                    <button className='btn btn-light' onClick={closeInterfaz}>X</button>
                </div>
                <BusquedaVentas />
            </Modal>
            <Modal className='modal-lg' isOpen={rp}>
                <div className='d-flex bg-light justify-content-end'>
                    <button className='btn btn-light' onClick={closeInterfaz}>X</button>
                </div>
                <RegProducto />
            </Modal>
            <Modal className=' modal-lg' isOpen={ap}>
                <div className='d-flex bg-light justify-content-end'>
                    <button className='btn btn-light' onClick={closeInterfaz}>X</button>
                </div>
                <ActProducto />
            </Modal>
            <Modal className='modal-lg' isOpen={bp}>
                <div className='d-flex bg-light justify-content-end'>
                    <button className='btn btn-light' onClick={closeInterfaz}>X</button>
                </div>
                <BusquedaProducto />
            </Modal>
            <Modal className='modal-lg' isOpen={lu}>
                <div className='d-flex bg-light justify-content-end'>
                    <button className='btn btn-light' onClick={closeInterfaz}>X</button>
                </div>
                <ListaUsuarios />
            </Modal>
            <Modal className=' modal-lg' isOpen={au}>
                <div className='d-flex bg-light justify-content-end'>
                    <button className='btn btn-light' onClick={closeInterfaz}>X</button>
                </div>
                <ActUsuario />
            </Modal>
        </>
    )
}
