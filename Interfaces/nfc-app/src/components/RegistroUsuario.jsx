import React, { useState } from 'react'
import { crearUsuario, guardarDatabase } from './firebaseconf';
import { v4 } from 'uuid';

export const RegistroUsuario = () => {
    const[nombre, setNombre] = useState('');
    const[apellidos, setApellidos] = useState('');
    const[email, setEmail] = useState('');
    const[contrasena, setContrasena] = useState('');
    const[confContrasena, setConfContrasena] = useState('');
    const[documento, setDocumento] = useState('');
    const[fechaNac, setFechaNac] = useState('');

    const validacionCampos = () => {
        console.log(contrasena.split(''))
        if (nombre === '' || apellidos === '' || email === '' || documento === '' || fechaNac === '' || confContrasena === '' || contrasena === '') {
            return {
                state: false,
                mensaje: 'Tiene que llenar todos los campos'
            }
        }
        if(contrasena !== confContrasena){
            return {
                state: false,
                mensaje: 'Los campos de CONTRASEÑA y CONFIRMACIÓN DE CONTRASEÑA tienen que concordar.'
            }
        }
        if(contrasena.split('').length < 6){
            return {
                state: false,
                mensaje: 'La contraseña debe tener mínimo 6 caracteres.'
            }
        }
        return {
            state: true,
            mensaje: 'Se ha registrado con exito.'
        }
    }

    const handleFormulario = async (e) => {
        e.preventDefault();
        const estado = validacionCampos(); 
        // console.log(estado);
        if (estado.state) {
            const usuario = {
                id: v4(),
                nombre,
                apellidos,
                email,
                contraseña: contrasena,
                documento,
                fechaNacimiento: fechaNac,
                rol: 'vendedor'
            }
            console.log(usuario);
            const user = await crearUsuario(email, contrasena);
            console.log(user);
            guardarDatabase('lista-usuarios', usuario)
            alert("El usuario se registro correctamente")
        } else {
            console.log(estado.mensaje);
        }
    }

    return (
        <>
            <div className="w-100  bg-light p-3 ">
                <main className="container">
                    <section className="panel panel-default">
                        <div>
                            <h1 className="titulo text-center">Registro de usuarios</h1>
                        </div>
                        <div className="cuerpo">
                            <form onSubmit={handleFormulario} className="form-control-sm">
                                <div className="form-group">
                                    <label htmlFor="nombre-usuario" className="col-8 form-label fw-bold">Nombre:</label>
                                    <div className="col-auto">
                                        <input type="text" onChange={(e)=> {setNombre(e.target.value)}} className="form-control  col-8 col-md-6" name="nombre-usuario" id="nombre-usuari" placeholder="Ingrese su nombre" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="usuario-apellidos" className="col-8 form-label fw-bold">Apellidos:</label>
                                    <div className="col-auto">
                                        <input type="text" onChange={(e)=> {setApellidos(e.target.value)}} className="form-control  col-8 col-md-6" name="usuario-apellidos" id="usuario-apellidos" placeholder="Ingrese sus apellidos" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="usuario-email" className="col-8 form-label fw-bold">Email:</label>
                                    <div className="col-auto">
                                        <input type="email" onChange={(e)=> {setEmail(e.target.value)}} className="form-control  col-8 col-md-6" name="usuario-email" id="usuario-email" placeholder="Ingrese su email" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="usuario-contrasena" className="col-8 form-label fw-bold">Contraseña</label>
                                    <div className="col-auto">
                                        <input type="password" onChange={(e)=> {setContrasena(e.target.value)}} className="form-control  col-8 col-md-6" name="usuario-contrasena" id="usuario-contrasena" placeholder="Ingrese su contraseña" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="confirm-contrasena" className="col-8 form-label fw-bold">Confirmación de contraseña</label>
                                    <div className="col-auto">
                                        <input type="password" onChange={(e)=> {setConfContrasena(e.target.value)}} className="form-control  col-8 col-md-6" name="confirm-contrasena" id="confirm-contrasena" placeholder="Confirme su contraseña" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="documento" className="col-8 form-label fw-bold">Documento de Identificacion</label>
                                    <div className="col-auto">
                                        <input type="number" onChange={(e)=> {setDocumento(e.target.value)}} className="form-control  col-8 col-md-6" name="documento" id="documento" placeholder="Documento de Identificacion" />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-8 col-sm-4 col-md-4">
                                        <label className="form-label col-8 fw-bold" htmlFor="fecha-nacimiento">Fecha de nacimiento</label>
                                        <input type="date" onChange={(e)=> {setFechaNac(e.target.value)}} className="form-control col-8 col-md-3" name="fecha-nacimiento" id="fecha-nacimiento" placeholder="DD/MM/AAAA" />
                                    </div>
                                    <div className="form-group">
                                        <hr />
                                        <div className="form-group">
                                            <div className="text-center">
                                                <button className="btn btn-dark">Guardar</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </section>
                </main>
            </div>
        </>
    )
}
