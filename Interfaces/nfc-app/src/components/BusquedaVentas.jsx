import React from 'react'
import { useEffect, useState } from 'react'
import { actualizarDocumentoDatabase, consultarDatabase, consultarDocumentoDatabase, crearUsuario, datosUsuario, eliminarDocumentoDatabase, guardarDatabase, loginUsuario, logOutUsuario, usuario } from './firebaseconf';

export const BusquedaVentas = () => {
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

    const [listaVentas, setListaVentas] = useState([])

    useEffect(() => {
        cargarDatos()
    }, [])

    const cargarDatos = async () => {
        // console.log('Entro..!');
        const listaTemporal = await consultarDatabase('lista-Ventas')
        // console.log(listaTemporal);
        setListaVentas(listaTemporal)
    }
    // onClick={handleCargarDatos}

    return (
        <>
            <div className="bg-light">
                <div>
                    <h1 className="titulo text-center">NFC Busqueda de Ventas</h1>
                </div>
                <section className="d-flex justify-content-center pt-3" id="Consulta">
                    <div className="d-flex w-100 ps-2">
                        <select className="form-select w-50" aria-label="Default select example">
                            <option selected>Seleccione criterio de consulta</option>
                            <option value={1}>ID</option>
                            <option value={2}>Valor Venta</option>
                            <option value={3}>ID Vehiculo</option>
                            <option value={4}>Cantidad</option>
                            <option value={5}>Valor Unitario</option>
                            <option value={6}>Fecha vencimiento</option>
                            <option value={7}>ID Cliente</option>
                            <option value={8}>Encargado</option>
                        </select>
                        <form className="w-50 d-flex form-group px-2" action>
                            <input className="form-control me-2" type="search" placeholder="Escribe Aquí" aria-label="Search" />
                            <button  className="btn btn-dark me-2" type="submit">Buscar</button>
                            <input type="button" className="btn btn-dark" defaultValue="+" />
                        </form>
                    </div>
                </section>
                <div className="container table-responsive pt-4 w-100">
                    <table className="table table-bordered table-hover  table-hover table-dark">
                        <thead className="thead-dark">
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">V_Venta</th>
                                <th scope="col">ID_Vehic</th>
                                <th scope="col">Cantidad</th>
                                <th scope="col">V_Unitario</th>
                                <th scope="col">Fecha</th>
                                <th scope="col">ID_Cliente</th>
                                <th scope="col">Encargado</th>
                                <th scope="col">Estado</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                listaVentas.map((venta, index) => {
                                    return (
                                        <tr key={venta.id}>
                                            <th scope="row">{index + 1}</th>
                                            <td>{venta.V_Venta}</td>
                                            <td>{venta.ID_Vehic}</td>
                                            <td>{venta.Cantidad}</td>
                                            <td>{venta.V_Unitario}</td>
                                            <td>{venta.Fecha}</td>
                                            <td>{venta.ID_Cliente}</td>
                                            <td>{venta.Encargado}</td>
                                            <td>{venta.Estado}</td>
                                        </tr>)
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>


        </>
    )
}
