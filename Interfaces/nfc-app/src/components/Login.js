import React from 'react'
import { useState } from 'react'
import { useHistory } from 'react-router'
import { loginUsuario } from './firebaseconf'
import { Link } from 'react-router-dom'
import { RegistroUsuario } from './RegistroUsuario'


export const Login = () => {
    const [state, setState] = useState(false);
    // Cuatro
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    // Seis Errores
    const [errorEmail, setErrorEmail] = useState(null)
    const [errorPassword, setErrorPassword] = useState(null)

    // Nueve
    const history = useHistory();
    // Cinco
    const handleFormulario = async (e) => {
        e.preventDefault();

        let msgError = 'Error: ';

        // Validaciones
        if (!email.trim()) {
            alert('Ingrese un email');
            // Seis
            setErrorEmail('Ingrese un email')
            return
        }
        if (!password.trim()) {
            alert('Ingrese un password');
            // Seis
            setErrorPassword('Ingrese un password')
            return
        }
        // Validacion firebase
        if (password.length < 6) {
            alert('Ingrese un password mayor a 6 caracteres');
            // Seis
            setErrorPassword('Ingrese un password mayor a 6 caracteres')
            return
        }

        // Siete
        try {
            const user = await loginUsuario(email, password)
        } catch (error) {
            // console.dir(error);
            msgError = error.message
        }

        if (msgError.includes('auth/user-not-found')) {
            setErrorEmail('Email no corresponde')
            return
        }
        if (msgError.includes('auth/invalid-email')) {
            setErrorEmail('Email no valido')
            return
        }
        if (msgError.includes('auth/wrong-password')) {
            setErrorPassword('Password incorrecto')
            return
        }
        // Ocho

        setEmail('')
        setPassword('')
        setErrorEmail(null)
        setErrorPassword(null)
        history.push('/user')
    }
    const handleState = (e) => {
        e.preventDefault();
        setState(!state);
    }


    return (
        <>
            {state ? <RegistroUsuario />
                :
                <div className="align-items-center">

                    <div className="px-5 my-3" id="login">
                        <div className="text-center">
                            <img src="./images/logonegro.png" alt="logoNFC" srcSet style={{ width: 70 }} />
                            <h5>NFC Motors</h5>
                            <h5>!Bienvenido¡</h5>
                        </div>
                        <br />
                        <form onSubmit={handleFormulario}>
                            {/* usuario */}
                            <label htmlFor="email">Correo Electrónico:</label>
                            <input
                                type="text"
                                placeholder="Ingresa tu email"
                                className={`form-control mb-2 ` + (errorEmail ? 'is-invalid' : '')}
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                            />
                            {errorEmail ?
                                (
                                    <div className="invalid-feedback mb-2">
                                        {errorEmail}
                                    </div>
                                )
                                : null
                            }
                            <br />
                            {/* contraseña */}
                            <label htmlFor="username">Contraseña:</label>
                            <input
                                type="password"
                                placeholder="Ingresa tu password"
                                className={`form-control mb-2 ` + (errorPassword ? 'is-invalid' : '')}
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                            />
                            {errorPassword &&
                                (
                                    <div className="invalid-feedback mb-2">
                                        {errorPassword}
                                    </div>
                                )
                            }
                            <div className="my-3 pb-3 text-center">
                                {/* boton */}
                                <input className="btn btn-outline-dark form-control hover mb-3" href="/user" type="submit" value="Ingresar" />
                                <h6>Aún no tienes una cuenta?</h6>
                                <Link to='/registro-usuario' onClick={handleState}>Registrarse</Link>
                            </div>
                        </form>
                        <div>

                        </div>
                    </div>
                </div>}
        </>
    )
}
