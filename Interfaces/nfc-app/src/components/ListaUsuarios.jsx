import React from 'react'
import { useEffect, useState } from 'react'
import { ActUsuario } from './ActUsuario';
import { actualizarDocumentoDatabase, consultarDatabase, consultarDocumentoDatabase, crearUsuario, datosUsuario, eliminarDocumentoDatabase, guardarDatabase, loginUsuario, logOutUsuario, usuario } from './firebaseconf';

export const ListaUsuarios = () => {
    const [listaUsuarios, setListaUsuarios] = useState([])
    const[state, setState] = useState(false);
    const[id, setId] = useState('');

    useEffect(() => {
        console.log(state);
        cargarDatos()
    }, [])

    const cargarDatos = async () => {
        const listaTemporal = await consultarDatabase('lista-usuarios')
        setListaUsuarios(listaTemporal)
    }

    const handleState = ()=> {
        setState(!state);
    }

    const changeModal = (idUser)=> {
        setId(idUser)
        handleState();
    }

    // onClick={handleCargarDatos}
    return (
        <>
           {state ? <ActUsuario userId={id}/>:
            <div className="bg-light pb-3">
                <div>
                    <h1 className="titulo text-center">NFC Busqueda de Usuarios</h1>
                </div>
                <section className="d-flex justify-content-center pt-3" id="Consulta">
                    <div className="d-flex w-100 justify-content-center pt-3">
                        <select className="form-select w-50" aria-label="Default select example">
                            <option selected>Seleccione criterio de consulta</option>
                            <option value={1}>MAIL</option>
                            <option value={2}>ROL</option>
                            <option value={3}>ESTADO</option>
                        </select>
                        <form className=" d-flex form-group" action>
                            <input className="form-control me-2" type="search" placeholder="Escribe Aquí" aria-label="Search" />
                            <button className="btn btn-dark me-2" type="submit">Buscar</button>
                            <input type="button" className="btn btn-dark" defaultValue="+" />
                        </form>
                    </div>
                </section>
                <div className="px-4 table-responsive  pt-3 ">
                    <table className="table table-bordered table-hover  table-hover table-dark">
                        <thead className="thead-dark">
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">EMAIL</th>
                                <th scope="col">ROL</th>
                                <th scope="col">ESTADO</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                listaUsuarios.map((usuario, index) => {
                                    // setId(usuario.id);
                                    // console.log(id);
                                    return (
                                        <tr key={usuario.id} onClick={()=>changeModal(usuario.id)}>
                                            <th scope="row">{index + 1}</th>
                                            <td>{usuario.email}</td>
                                            <td>{usuario.rol === null ? 'Indefinido': usuario.rol}</td>
                                            <td>{usuario.estado}</td>
                                        </tr>)
                                })
                            }

                        </tbody>
                    </table>
                </div>
            </div>}


        </>
    )
}
