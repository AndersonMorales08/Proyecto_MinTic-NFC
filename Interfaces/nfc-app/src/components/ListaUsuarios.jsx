import React from 'react'

export const ListaUsuarios = () => {
    return (
        <>
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
                                <th scope="col">MAIL</th>
                                <th scope="col">ROL</th>
                                <th scope="col">ESTADO</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>patosoc@gmail.com</td>
                                <td>ADMIN</td>
                                <td>PENDIENTE</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>pepito@hotmail.com</td>
                                <td>VEND</td>
                                <td>PENDIENTE</td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>pepita@gmail.com</td>
                                <td>ADMIN</td>
                                <td>AUUTORIZADO</td>
                            </tr>
                            <tr>
                                <th scope="row">4</th>
                                <td>jacinto@yahoo.es</td>
                                <td>VEND</td>
                                <td>AUTORIZADO</td>
                            </tr>
                            <tr>
                                <th scope="row">5</th>
                                <td />
                                <td />
                                <td />
                            </tr>
                            <tr>
                                <th scope="row">6</th>
                                <td />
                                <td />
                                <td />
                            </tr>
                            <tr>
                                <th scope="row">7</th>
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
