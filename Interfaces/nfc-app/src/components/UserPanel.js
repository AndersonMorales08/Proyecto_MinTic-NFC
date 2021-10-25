
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
import { NavLink } from 'react-router-dom'

export const UserPanel = () => {
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
    const handleLogOut = () => {
        logOutUsuario()
    }

    return (
        <>
            <div className="d-flex bg-dark">
                <div className="text-light d-flex align-items-center m-0 p-0"><a className="navbar-brand text-light ps-3" href="/user">NFC Motors</a></div>

                <div className="container d-flex me-0 justify-content-end">
                    <div className="py-3">
                        <button className="btn btn-outline-light" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                            Menu
                        </button>
                    </div>

                    <div className="offcanvas offcanvas-end" tabIndex={-1} id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title" id="offcanvasExampleLabel">Panel de Administración</h5>
                            <button type="button" className="btn-close  text-reset" data-bs-dismiss="offcanvas" aria-label="Close" />
                        </div>
                        <div className="offcanvas-body">
                            <div className="accordion" id="accordionExample">
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingOne">
                                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                            Ventas
                                        </button>
                                    </h2>
                                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <a onClick={handleIterfazrv} className="dropdown-item" >Registrar venta</a>
                                            <a onClick={handleIterfazbv} className="dropdown-item" >Listado ventas</a>
                                        </div>
                                    </div>
                                </div>

                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="headingTwo">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                            Productos
                                        </button>
                                    </h2>
                                    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                            <a onClick={handleIterfazrp} className="dropdown-item">Registrar producto</a>
                                            <a onClick={handleIterfazap} className="dropdown-item">Actualizar producto</a>
                                            <a onClick={handleIterfazbp} className="dropdown-item">Control productos</a>
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="headingThree">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                            Usuarios
                                        </button>
                                    </h2>
                                    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                            <a onClick={handleIterfazlu} className="dropdown-item">Listado usuarios</a>
                                            <a onClick={handleIterfazau} className="dropdown-item">Actualizar información</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-3">
                                {<NavLink
                                    className="btn btn-outline-dark form-control"
                                    onClick={handleLogOut}
                                    to="/home" >
                                    Cerrar Sesion
                                </NavLink>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Modal className='modal-lg p-5' isOpen={rv}>
                <div className='d-flex bg-light justify-content-end'>
                    <button className='btn btn-light btn-close' onClick={closeInterfaz}></button>
                </div>
                <RegVenta />
            </Modal>
            <Modal className=' modal-lg' isOpen={bv}>
                <div className='d-flex bg-light justify-content-end'>
                    <button className='btn btn-light btn-close' onClick={closeInterfaz}></button>
                </div>
                <BusquedaVentas />
            </Modal>
            <Modal className='modal-lg' isOpen={rp}>
                <div className='d-flex bg-light justify-content-end'>
                    <button className='btn btn-light btn-close' onClick={closeInterfaz}></button>
                </div>
                <RegProducto />
            </Modal>
            <Modal className=' modal-lg' isOpen={ap}>
                <div className='d-flex bg-light justify-content-end'>
                    <button onClick={closeInterfaz} className='btn btn-light btn-close'></button>
                </div>
                <ActProducto />
            </Modal>
            <Modal className='modal-lg' isOpen={bp}>
                <div className='d-flex bg-light justify-content-end'>
                    <button className='btn btn-light btn-close' onClick={closeInterfaz}></button>
                </div>
                <BusquedaProducto />
            </Modal>
            <Modal className='modal-lg' isOpen={lu}>
                <div className='d-flex bg-light justify-content-end'>
                    <button className='btn btn-light btn-close' onClick={closeInterfaz}></button>
                </div>
                <ListaUsuarios />
            </Modal>
            <Modal className=' modal-lg' isOpen={au}>
                <div className='d-flex bg-light justify-content-end'>
                    <button className='btn btn-light btn-close' onClick={closeInterfaz}></button>
                </div>
                <ActUsuario />
            </Modal>
        </>
    )
}
