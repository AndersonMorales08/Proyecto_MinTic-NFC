import React, { useState } from 'react'
import { Button, Modal } from 'reactstrap';
import { loginUsuario} from './firebaseconf';


export const BarInicio = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const validacionCampos = ()=>{
        if(email === '' || password === ''){
            return false;
        }
        return true;
    }

    const handleFormulario = (e)=> {
        e.preventDefault();
        if (validacionCampos()){
            const usuario = {
                email: email,
                password: password
            }
            console.log(usuario);
            loginUsuario(email,password);
            closeLogin()
        } else {
            alert('¡Debe llenar todos los campos!');
        }
    }


    // const handleClick = async () => {
    //     console.log('Entro');

    //     // Creacion Usuario
    //     // crearUsuario(email, password)

    //     // // Login
    //     // await loginUsuario("","")
    //     // console.log('datos usuario: ', usuario);

    //     //  salir -> LogOut
    //     // logOutUsuario()

    //     //  Datos Usuario
    //     // datosUsuario()
    // }


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
                        <a className="nav-link" aria-current="page" href="/home">Inicio</a>
                    </li>
                    <li className="nav-item mx-sm-2">
                        <a className="nav-link" href="#">Vehiculos</a>
                    </li>
                    <li className="nav-item mx-sm-2">
                        <a className="nav-link" href="#">Nosotros</a>
                    </li>

                    <li className="nav-item mx-sm-2">
                        <a className="nav-link" href="#">Contacto</a>
                    </li>
                    <li onClick={handleState} className="nav-item mx-sm-2">
                        <a className='nav-link'>Sign in</a>
                    </li>
                </ul>
                <form className="d-flex ms-sm-5 px-lg-2">
                    <input className="me-2 rounded" type="search" placeholder="Escribe Aquí" aria-label="Search" />
                    <button className="btn btn-light" type="submit">Buscar</button>
                </form>
            </div>

            <Modal className='w-25' isOpen={state}>
                <div className="align-items-center">
                    <div className='d-flex justify-content-end'>
                        <button className='btn' onClick={closeLogin} >X</button>
                    </div>
                    <div className="px-5" id="login">
                        <div className="text-center">
                            <img src="Sources/Logonegro.png" alt="logoNFC" srcSet style={{ width: '25%' }} />
                            <h5>NFC Motors</h5>
                        </div>
                        <br />
                        <form onSubmit={handleFormulario}>
                            {/* usuario */}
                            <label htmlFor="email">Correo Electrónico:</label>
                            <input className="form-control" onChange={(e)=> {setEmail(e.target.value)}} type="email" placeholder="Ingresa tu email" />
                            <br />
                            {/* contraseña */}
                            <label htmlFor="username">Contraseña:</label>
                            <input className="form-control" onChange={(e)=> {setPassword(e.target.value)}} type="password" placeholder="Ingresa tu contraseña" />
                            <div className="my-3 pb-3">
                                {/* boton */}
                            <button  className="btn btn-dark form-control" href="/user" type="submit">Ingresar</button>
                            </div>
                        </form>
                        {/* <div className="mx-auto d-flex justify-content-center" style={{ width: 50 }}>
                            <a href="NFCRegistro.html"><img src="Sources/GoogleIcon.png" alt="Google" srcSet style={{ width: 30 }} /></a>
                        </div>
                        <br />
                        <div><a href="#">Olvidó su contraseña</a>
                        </div>
                        <div><button onClick={handleClick}>Registrarse</button>
                        </div> */}
                    </div>
                </div>
            </Modal>

        </>
    )
}
