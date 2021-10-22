import React from 'react'
import { useEffect, useState } from 'react'
import { actualizarDocumentoDatabase, consultarDatabase, consultarDocumentoDatabase, crearUsuario, datosUsuario, eliminarDocumentoDatabase, guardarDatabase, loginUsuario, logOutUsuario, usuario } from './firebaseconf';

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

    const [listaProductos, setListaProductos] = useState([])

    useEffect(() => {
        cargarDatos()
    }, [])

    const cargarDatos = async () => {
        // console.log('Entro..!');
        const listaTemporal = await consultarDatabase('lista-Productos')
        // console.log(listaTemporal);
        setListaProductos(listaTemporal)
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
                            <option value={3}>Fecha de Venta</option>
                            <option value={4}>Estado</option>
                            <option value={5}>Cod_Agencia</option>
                            <option value={6}>Color</option>
                            <option value={7}>Mod_Motor</option>
                            <option value={8}>Id_Vehiculo</option>
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
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    listaProductos.map((producto, index) => {
                                        return (
                                            <tr key={producto.Id_Vehiculo}>
                                                <th scope="row">{index + 1}</th>
                                                <td>{producto.Unidades}</td>
                                                <td>{producto.Modelo}</td>
                                                <td>{producto.Fecha_Registro}</td>
                                                <td>{producto.Fecha_Venta}</td>
                                                <td>{producto.Estado}</td>
                                                <td>{producto.Cod_Agencia}</td>
                                                <td>{producto.Color}</td>
                                                <td>{producto.Mod_Motor}</td>
                                            </tr>)
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </section>
            </div>


        </>
    )
}
