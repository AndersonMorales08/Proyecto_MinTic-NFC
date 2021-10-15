import React from 'react'
import { actualizarDocumentoDatabase, consultarDatabase, consultarDocumentoDatabase, crearUsuario, datosUsuario, eliminarDocumentoDatabase, guardarDatabase, loginUsuario, logOutUsuario, usuario } from './firebaseconf';

export const BusquedaVentas = () => {
    // Obtener todos los documentos de la colleccion
    consultarDatabase('usuarios')
    // console.log(await consultarDatabase('usuarios'));

    // Obtener un documento id=CEqaCqjBFnI0SQKRj0tI
    // consultarDocumentoDatabase('usuarios', 'CEqaCqjBFnI0SQKRj0tI')

    const usuarioDos = {
        nombre: 'Martha',
        edad: 15
    }

    // Actualizacion documento  id=CEqaCqjBFnI0SQKRj0tI
    // actualizarDocumentoDatabase('usuarios', 'CEqaCqjBFnI0SQKRj0tI', usuarioDos)

    // Eliminar documento  id=CEqaCqjBFnI0SQKRj0tI
    // eliminarDocumentoDatabase('usuarios', 'CEqaCqjBFnI0SQKRj0tI', usuarioDos)


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
                            <button className="btn btn-dark me-2" type="submit">Buscar</button>
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
                                <th scope="col">Fec_venc</th>
                                <th scope="col">ID_Cliente</th>
                                <th scope="col">Encargado</th>
                                <th scope="col">Estado</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>96.990.000</td>
                                <td>12345678</td>
                                <td>1</td>
                                <td>96.990.000</td>
                                <td>27/09/2021</td>
                                <td>97470859</td>
                                <td>Carlos Javier López Durán</td>
                                <td>En proceso</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>123.000.000</td>
                                <td>987654321</td>
                                <td>1</td>
                                <td>123.000.000</td>
                                <td>28/12/2021</td>
                                <td>52036580</td>
                                <td>Patricia Osorio Correa</td>
                                <td>En proceso</td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td />
                                <td />
                                <td />
                                <td />
                                <td />
                                <td />
                                <td />
                                <td />
                            </tr>
                            <tr>
                                <th scope="row">4</th>
                                <td />
                                <td />
                                <td />
                                <td />
                                <td />
                                <td />
                                <td />
                                <td />
                            </tr>
                            <tr>
                                <th scope="row">5</th>
                                <td />
                                <td />
                                <td />
                                <td />
                                <td />
                                <td />
                                <td />
                                <td />
                            </tr>
                            <tr>
                                <th scope="row">6</th>
                                <td />
                                <td />
                                <td />
                                <td />
                                <td />
                                <td />
                                <td />
                                <td />
                            </tr>
                            <tr>
                                <th scope="row">7</th>
                                <td />
                                <td />
                                <td />
                                <td />
                                <td />
                                <td />
                                <td />
                                <td />
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>


        </>
    )
}
