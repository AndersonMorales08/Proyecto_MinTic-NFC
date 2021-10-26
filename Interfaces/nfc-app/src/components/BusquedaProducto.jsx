import React from 'react'
import { useEffect, useState } from 'react'
import { actualizarDocumentoDatabase, consultarDatabase, consultarDocumentoDatabase, crearUsuario, datosUsuario, eliminarDocumentoDatabase, guardarDatabase, loginUsuario, logOutUsuario, usuario } from './firebaseconf';
import { Link } from 'react-router-dom'
import {

    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom'

import { Modal } from 'reactstrap';

import { ActProducto, id } from './ActProducto'



export const BusquedaProducto = () => {
    // Obtener todos los documentos de la colleccion
    // consultarDatabase('usuarios')
    // console.log(await consultarDatabase('usuarios'));

    // Obtener un documento id=CEqaCqjBFnI0SQKRj0tI
    // consultarDocumentoDatabase('usuarios', 'CEqaCqjBFnI0SQKRj0tI')

    // const usuarioDos = {
    //     nombre: 'Martha',
    //     edad: 15
    // }

    // Actualizacion documento  id=CEqaCqjBFnI0SQKRj0tI
    // actualizarDocumentoDatabase('usuarios', 'CEqaCqjBFnI0SQKRj0tI', usuarioDos)

    // Eliminar documento  id=CEqaCqjBFnI0SQKRj0tI
    // eliminarDocumentoDatabase('usuarios', 'CEqaCqjBFnI0SQKRj0tI', usuarioDos)

    // const handleCargarDatos = async () => {
    //     const listaTemporal = await consultarDatabase('lista-Ventas')
    //     console.log(listaTemporal);
    //     setListaVentas(listaTemporal)
    //   }
    const [ap, setap] = useState(false)
    const handleIterfazap = () => {
        setap(true)
    }

    const closeInterfaz = () => {

        setap(false)

    }
    const [listaProductos, setListaProductos] = useState([])

    useEffect(() => {
        cargarDatos()
    }, [])

    const cargarDatos = async () => {
        // console.log('Entro..!');
        const listaTemporal = await consultarDatabase('lista-productos')
        // console.log(listaTemporal);
        setListaProductos(listaTemporal)
        console.log(listaTemporal)
    }
    
    // onClick={handleCargarDatos}


    return (

        <>
            <div className="container-fluid bg-light rounded-3">
                <div className="d-flex justify-content-center text-center">
                    <h3>NFC lista de Vehiculos</h3>
                </div>
                <section id="Consulta">
                    <div className="d-flex">
                        <select className="form-select w-50" aria-label="Default select example">
                            <option selected>Seleccione metodo de consulta</option>
                            <option value={1}>Modelo</option>
                            <option value={2}>Fecha de Registro</option>
                            <option value={3}>Estado</option>
                            <option value={4}>Cod_Agencia</option>
                            <option value={5}>Color</option>
                            <option value={6}>Mod_Motor</option>
                            <option value={7}>Id_Vehiculo</option>

                        </select>
                        <form className="w-50 d-flex form-group" action>
                            <input className="form-control me-2" type="search" placeholder="Escribe Aquí" aria-label="Search" />
                            <button className="btn btn-dark me-2" type="submit">Buscar</button>
                            <input type="button" className="btn btn-dark" defaultValue="+" />
                        </form>
                    </div>
                </section>
                <section>
                    <div className="table-responsive my-3">
                        <table className="table table-bordered table-hover  table-hover table-light">
                            <thead className="table-dark text-light">
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Unidades</th>
                                    <th scope="col">Modelo</th>
                                    <th scope="col">Fecha de Registro</th>
                                    <th scope="col">Fecha de Venta</th>
                                    <th scope="col">Estado</th>
                                    <th scope="col">Cod_Agencia</th>
                                    <th scope="col">Color</th>
                                    <th scope="col">Mod_Motor</th>
                                    <th scope="col">Id_Vehiculo</th>
                                    <th scope="col">Accion</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    listaProductos.map((producto, index) => {
                                        return (
                                            <tr key={producto.id}>
                                                <th scope="row">{index + 1}</th>
                                                <td>{producto.cantidad}</td>
                                                <td>{producto.modelo}</td>
                                                <td>{producto.fechaRegistro}</td>
                                                <td>{producto.fechaVenta}</td>
                                                <td>{producto.estado}</td>
                                                <td>{producto.codAgencia}</td>
                                                <td>{producto.color}</td>
                                                <td>{producto.motor}</td>
                                                <td>{producto.idV}</td>
                                                {console.log(producto.id)}
                                                <td>
                                                <Link a onClick={handleIterfazap} className="dropdown-item" 
                                                to={`/lista-productos/${producto.id}`}>
                                                Editar
                                                </Link>
                                                    

                                                </td>
                                            </tr>)
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </section>
            </div>

            <Modal className=' modal-lg' isOpen={ap}>
                <div className='d-flex bg-light justify-content-end'>
                    <button onClick={closeInterfaz} className='btn btn-light btn-close'></button>
                </div>
                <Router>
                    <Switch >
                        <Route exact path="/lista-productos/:id" component={ActProducto} />
                    </Switch>

                </Router>
            </Modal>

        </>
    )

}
