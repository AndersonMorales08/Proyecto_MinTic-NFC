import React from 'react'

export const BusquedaProducto = () => {
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
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>0</td>
                                        <td>Sedan Sr</td>
                                        <td>28/08/2021</td>
                                        <td>28/09/2021</td>
                                        <td>Vendido</td>
                                        <td />
                                        <td>Negro</td>
                                        <td>nfcq55l98</td>
                                        <td>ssrn55458693</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td />
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
                                        <th scope="row">3</th>
                                        <td />
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
                                        <td />
                                    </tr>
                                    <tr>
                                        <th scope="row">8</th>
                                        <td />
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
                                        <th scope="row">9</th>
                                        <td />
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
                                        <th scope="row">10</th>
                                        <td />
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
                    </section>
                </div>


        </>
    )
}
