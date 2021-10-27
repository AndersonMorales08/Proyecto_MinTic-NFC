import React, { useEffect } from 'react'
import { actualizarDocumentoDatabase, consultarDocumentoDatabase } from './firebaseconf';
import { useState } from 'react';
import { async } from '@firebase/util';

export const ActUsuario = ({userId}) => {
    const [user, setUser] = useState({});
    const[estado, setEstado] = useState('');
    const[rol, setRol] = useState('');

    useEffect(async ()=>{
        const docTemporal= await consultarDocumentoDatabase('lista-usuarios', userId);
        console.log(docTemporal);
        setUser(docTemporal);
        const state = docTemporal.estado
        const rolUser = docTemporal.rol
        setEstado(state);
        setRol(rolUser);
    }, []);

    const actualizarUsuario = async()=>{
        console.log('State: ', estado);
        console.log('Rol: ', rol);
        const usuario = {
            ...user,
            rol: rol,
            estado: estado
        }
        console.log(usuario);
        const doc = await actualizarDocumentoDatabase('lista-usuarios', user.id, usuario);
        alert('Usuario actualizado correctamente')
    }

    const handleEstado = (e) => {
        setEstado(e.target.value)
    }

    const handleRol = (e) => {
        setRol(e.target.value)
    }

    return (
        <>
            <div className="container-fluid bg-light pb-3">
                <section id="usuarios">
                        <div className="p-5 border rounded-3">
                            <h2>Actualización usuarios</h2>
                            <h4 className='mt-5'>Usuario:</h4>
                            <div className='text-center mb-3'>
                                <p>{user.nombre} {user.apellidos}</p>
                            </div>
                            <h4 className='mt-5'>Documento:</h4>
                            <div className='text-center mb-3'>
                                <p>{user.documento}</p>
                            </div>
                            <label htmlFor="estados">Estado:</label>
                            <select id="estados" onChange={handleEstado} className="form-control">
                                <option value='default'>Seleccione..</option>
                                <option value="Activo" selected={user.estado === 'Activo' ? true: false}> Activo</option>
                                <option value="Inactivo" selected={user.estado === 'Inactivo' ? true: false}>Inactivo</option>
                            </select>
                            <br />
                            <label htmlFor="roles">Roles:</label>
                            <select id="roles" onChange={handleRol} className="form-control me-2">
                                <option value='default'>Seleccione..</option>
                                <option value="Vendedor" selected={user.rol === 'Vendedor' ? true: false}>Vendedor</option>
                                <option value="Administrador" selected={user.rol === 'Administrador' ? true: false}>Administrador</option>
                            </select>
                            <br />
                            <br />
                            <a>
                                <button onClick={actualizarUsuario} className="btn btn-dark" type="submit">Actualizar Usuario</button>
                            </a>
                        </div>
                </section>
            </div>


        </>
    )
}
