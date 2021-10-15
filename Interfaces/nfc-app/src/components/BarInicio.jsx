import React, { useState } from 'react'
import { Modal } from 'reactstrap';
import { actualizarDocumentoDatabase, consultarDatabase, consultarDocumentoDatabase, crearUsuario, datosUsuario, eliminarDocumentoDatabase, guardarDatabase, loginUsuario, logOutUsuario, usuario } from './firebaseconf';


export const BarInicio = () => {

    const handleClick = async () => {
        console.log('Entro');

        // Creacion Usuario
        // crearUsuario(email, password)

        // // Login
        // await loginUsuario("","")
        // console.log('datos usuario: ', usuario);

        //  salir -> LogOut
        // logOutUsuario()

        //  Datos Usuario
        // datosUsuario()
    }


        const [state, setState] = useState(false)


        const handleState = () => {
            setState(true)
        }
        const closeLogin = () => {
            setState(false)
        }
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
                        <li onClick={handleState} className="nav-item mx-sm-2">
                            <a className='nav-link'>Sign in</a>
                        </li>
                    </ul>
                    <form className="d-flex ms-sm-5 px-lg-2">
                        <input className="form-control me-2" type="search" placeholder="Escribe Aquí" aria-label="Search" />
                        <button className="btn btn-light" type="submit">Buscar</button>
                    </form>
                </div>

                <Modal className='w-25' isOpen={state}>
                    <div className="align-items-center">
                        <div className='d-flex justify-content-end'>
                            <button className='btn btn-light' onClick={closeLogin} >X</button>
                        </div>
                        <div className="form-control h-auto px-5" id="login">
                            <div className="text-center">
                                <img src="Sources/Logonegro.png" alt="logoNFC" srcSet style={{ width: '25%' }} />
                                <h5>NFC Motors</h5>
                            </div>
                            <br />
                            <form onSubmit={guardarDatos}>
                                {/* usuario */}
                                <label htmlFor="email">Correo Electrónico:</label>
                                <input value={email} className="form-control" type="email" placeholder="Ingresa tu email" />
                                <br />
                                {/* contraseña */}
                                <label htmlFor="username">Contraseña:</label>
                                <input value={password} className="form-control" type="password" placeholder="Ingresa tu contraseña" />
                                <div className="my-3">
                                    {/* boton */}
                                    <input className="btn btn-dark form-control" type="submit" defaultValue="Iniciar Sesión" href="#" />
                                </div>
                            </form>
                            <div className="mx-auto d-flex justify-content-center" style={{ width: 50 }}>
                                <a href="NFCRegistro.html"><img src="Sources/GoogleIcon.png" alt="Google" srcSet style={{ width: 30 }} /></a>
                            </div>
                            <br />
                            <div><a href="#">Olvidó su contraseña</a>
                            </div>
                            <div><button onClick={handleClick}>Registrarse</button>
                            </div>
                        </div>
                    </div>
                </Modal>

            </>
        )
    }
