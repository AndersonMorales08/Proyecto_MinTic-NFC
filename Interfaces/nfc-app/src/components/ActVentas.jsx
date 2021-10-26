import React, { useState, useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { actualizarDocumentoDatabase,  consultarDocumentoDatabase } from './firebaseconf';

export const ActVentas = () => {
    
    const { id } = useParams()
    const [valorTotal, setValorTotal] = useState(0);
    const [cantidad, setCantidad] = useState(0);
    const [precioUnitario, setPrecioUnitario] = useState(0);
    const [documentoIdentificacion, setDI] = useState('');
    const [nombreCliente, setNombreCliente] = useState('');
    const [fechaVenta, setFechaVenta] = useState('');
    const [encargado, setEncargado] = useState('');
    const [estadoVenta, setEstadoVenta] = useState('');
    const history = useHistory();

  

    useEffect(async ()=>{
        const ventaTemp = await consultarDocumentoDatabase('lista-ventas', id)

                setValorTotal(ventaTemp.valorTotal)
                setCantidad(ventaTemp.cantidad)
                setPrecioUnitario(ventaTemp.precioUnitario)
                setDI(ventaTemp.documentoIdentificacion)
                setNombreCliente(ventaTemp.nombreCliente)
                setFechaVenta(ventaTemp.fechaVenta)
                setEncargado(ventaTemp.encargado)
                setEstadoVenta(ventaTemp.estadoVenta)
                
                // valorTotal: Number(valorTotal),
                // cantidad: Number(cantidad),
                // precioUnitario: Number(precioUnitario),
                // documentoIdentificacion: DI,
                // nombreCliente: nombreCliente,
                // fechaVenta: fechaVenta, 
                // encargado: encargado,
                // estadoVenta: estadoVenta
        }, []);
        const handleActualizarVenta = async (e) => {
            e.preventDefault()
   
            const venta = {
                valorTotal,
                cantidad,
                precioUnitario,
                documentoIdentificacion,
                nombreCliente,
                fechaVenta, 
                encargado,
                estadoVenta,
            }

   
            actualizarDocumentoDatabase('lista-ventas', id, venta)
            history.push('/')
        }
   
    return (
        <>
            <div className="w-100  bg-light p-3 ">
                <section className="panel panel-default">
                    <div>
                        <h1 className="titulo text-center">Control de Ventas</h1>
                    </div>
                    
                    <div className="cuerpo">
                        <form>
                            <div className="form-group">
                                <label htmlFor="valor-total" className="col-8 form-label fw-bold">Valor Total</label>
                                <div className="col-auto">
                                    <input type="number" value={valorTotal} onChange={(e)=> {setValorTotal(e.target.value)}} className="form-control  col-8 col-md-6" name="valor-total" id="valor-total" placeholder="Valor Total" />
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="cantidad" className="col-8 form-label fw-bold">Cantidad</label>
                                <div className="col-auto">
                                    <input type="number" value={cantidad} onChange={(e)=> {setCantidad(e.target.value)}} className="form-control  col-8 col-md-6" name="cantidad" id="cantidad" placeholder="Cantidad" />
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="precio" className="col-8 form-label fw-bold">Precio Unitario</label>
                                <div className="col-auto">
                                    <input type="number" value={precioUnitario} onChange={(e)=> {setPrecioUnitario(e.target.value)}} className="form-control  col-8 col-md-6" name="precioU" id="precioU" placeholder="Precio Unitario" />
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="documento" className="col-8 form-label fw-bold">Documento de Identificacion</label>
                                <div className="col-auto">
                                    <input type="number" value={documentoIdentificacion} onChange={(e)=> {setDI(e.target.value)}} className="form-control  col-8 col-md-6" name="documento" id="documento" placeholder="Documento de Identificacion" />
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="nombreC" className="col-8 form-label fw-bold">Nombre del Cliente</label>
                                <div className="col-auto">
                                    <input type="text" value={nombreCliente} onChange={(e)=> {setNombreCliente(e.target.value)}} className="form-control  col-8 col-md-6" name="nombreC" id="nombreC" placeholder="Nombre del Cliente" />
                                </div>
                            </div>
                            <div className="row">
                                {/* PARA ELIGIR LA FECHA CON UN CALENDARIO HACE FALTA EL JAVASCRIP */}
                                <div className="col-8 col-sm-4 col-md-4">
                                    <label className="form-label col-8 fw-bold" htmlFor="fecha-inicial">Fecha de la Venta </label>
                                    <input type="date" value={fechaVenta} onChange={(e)=> {setFechaVenta(e.target.value)}} className="form-control col-8 col-md-3" name="fecha" id="fecha" placeholder="DD/MM/AAAA" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="encargado" className="col-8 form-label fw-bold">Encargado</label>
                                    <div className="col-auto">
                                        <select name="Encargado" value={encargado} onChange={(e)=> {setEncargado(e.target.value)}} className="form-control form-label">
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
                                            <select name="estado" value={estadoVenta} onChange={(e)=> {setEstadoVenta(e.target.value)}} className="form-control form-label col-8 col-md-6">
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
                                        <button className="btn btn-dark btn-lg" onClick={handleActualizarVenta}>Actualizar</button>
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


