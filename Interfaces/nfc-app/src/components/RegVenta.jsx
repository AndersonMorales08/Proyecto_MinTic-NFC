import React from 'react'
import { actualizarDocumentoDatabase, consultarDatabase, consultarDocumentoDatabase, crearUsuario, datosUsuario, eliminarDocumentoDatabase, guardarDatabase, loginUsuario, logOutUsuario, usuario } from './firebaseconf';

export const RegVenta = () => {

    const usuario = {
        nombre : 'Pedro',
        edad : 30
      }
      //guardar en base de datos 
      guardarDatabase('usuarios', usuario)

     



    return (
        <>
            <div className="w-100  bg-light p-3 ">
                <section className="panel panel-default">
                    <div>
                        <h1 className="titulo text-center">Control de Ventas</h1>
                    </div>
                    <div>
                        <h2 className="titulo text-center">Venta N° #</h2>
                        {/* Se agregara un contador para el numero de venta  */}
                    </div>
                    <div className="cuerpo">
                        <form className="form-control-sm" role="form">
                            <div className="form-group">
                                <label htmlFor="id-vehiculo" className="col-8 form-label fw-bold">Identificador Vehiculo</label>
                                <div className="col-auto">
                                    <input type="text" className="form-control  col-8 col-md-6" name="id-vehiculo" id="id-vehiculo" placeholder="Identificador Vehiculo" />
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="valor-total" className="col-8 form-label fw-bold">Valor Total</label>
                                <div className="col-auto">
                                    <input type="text" className="form-control  col-8 col-md-6" name="valor-total" id="valor-total" placeholder="Valor Total" />
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="cantidad" className="col-8 form-label fw-bold">Cantidad</label>
                                <div className="col-auto">
                                    <input type="text" className="form-control  col-8 col-md-6" name="cantidad" id="cantidad" placeholder="Cantidad" />
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="precio" className="col-8 form-label fw-bold">Precio Unitario</label>
                                <div className="col-auto">
                                    <input type="text" className="form-control  col-8 col-md-6" name="precioU" id="precioU" placeholder="Precio Unitario" />
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="documento" className="col-8 form-label fw-bold">Documento de Identificacion</label>
                                <div className="col-auto">
                                    <input type="text" className="form-control  col-8 col-md-6" name="documento" id="documento" placeholder="Documento de Identificacion" />
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="nombreC" className="col-8 form-label fw-bold">Nombre del Cliente</label>
                                <div className="col-auto">
                                    <input type="text" className="form-control  col-8 col-md-6" name="nombreC" id="nombreC" placeholder="Nombre del Cliente" />
                                </div>
                            </div>
                            <div className="row">
                                {/* PARA ELIGIR LA FECHA CON UN CALENDARIO HACE FALTA EL JAVASCRIP */}
                                <div className="col-8 col-sm-4 col-md-4">
                                    <label className="form-label col-8 fw-bold" htmlFor="fecha-inicial">Fecha de la Venta </label>
                                    <input type="text" className="form-control col-8 col-md-3" name="fecha" id="fecha" placeholder="DD/MM/AAAA" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="encargado" className="col-8 form-label fw-bold">Encargado</label>
                                    <div className="col-auto">
                                        <select name="Encargado" className="form-control form-label">
                                            <option value="Enc_Default">Seleccione el Encargado de la ventas</option>
                                            <option value="Anderson">Anderson David Morales Chila</option>
                                            <option value="CarlosJ">Carlos Javier López Durán</option>
                                            <option value="Sandra">Sandra Patricia Osorio Correa</option>
                                            <option value="Juan">Juan Esteban Sánchez Venegas</option>
                                            <option value="CarlosA">Carlos Alberto Reales Carpio</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="modalidad" className="col-8 form-label fw-bold">Estado de Venta</label>
                                        <div className="col-auto">
                                            <select name="estado" className="form-control form-label col-8 col-md-6">
                                                <option value="estado_Default">Selecciona el estado de la venta</option>
                                                <option value="en-proceso">En Proceso</option>
                                                <option value="cancelada">Cancelada</option>
                                                <option value="entregada">Entregada</option>
                                            </select>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="form-group">
                                        <div className="text-center">
                                            <button type="button" onclick="guardar();" className="btn btn-dark">Guardar</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </section>
            </div>

        </>
    )
}
