import React, { useState } from 'react'
import { v4 } from 'uuid';
import { guardarDatabase } from './firebaseconf';

export const RegVenta = () => {
    const [identificador, setidentificador] = useState('');
    const [valorTotal, setValorTotal] = useState(0);
    const [cantidad, setCantidad] = useState(0);
    const [precioUnitario, setPrecioUnitario] = useState(0);
    const [DI, setDI] = useState('');
    const [nombreCliente, setNombreCliente] = useState('');
    const [fechaVenta, setFechaVenta] = useState('');
    const [encargado, setEncargado] = useState('');
    const [estadoVenta, setEstadoVenta] = useState('');

    const validacionCampos = ()=>{
        if(cantidad === '' || identificador === '' || valorTotal === '' || precioUnitario === '' || DI === '' || nombreCliente === '' || fechaVenta === '' || encargado === 'Enc_Default' || estadoVenta === 'estado_Default'){
            return false;
        }
        return true;
    }

    const handleFormulario = (e)=> {
        e.preventDefault();
        console.log(fechaVenta);
        if (validacionCampos()){
            const venta = {
                idVenta: v4(),
                identificadorVehiculo: identificador,
                valorTotal: Number(valorTotal),
                cantidad: Number(cantidad),
                precioUnitario: Number(precioUnitario),
                documentoIdentificacion: DI,
                nombreCliente: nombreCliente,
                fechaVenta: fechaVenta, 
                encargado: encargado,
                estadoVenta: estadoVenta
            }
            alert("Venta Registrada");
            guardarDatabase('lista-ventas', venta)
        } else {
            alert('¡Debe llenar todos los campos!');
        }
    }

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
                        <form onSubmit={handleFormulario} className="form-control-sm">
                            <div className="form-group">
                                <label htmlFor="id-vehiculo" className="col-8 form-label fw-bold">Identificador Vehiculo</label>
                                <div className="col-auto">
                                    <input type="text" onChange={(e)=> {setidentificador(e.target.value)}} className="form-control  col-8 col-md-6" name="id-vehiculo" id="id-vehiculo" placeholder="Identificador Vehiculo" />
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="valor-total" className="col-8 form-label fw-bold">Valor Total</label>
                                <div className="col-auto">
                                    <input type="number" onChange={(e)=> {setValorTotal(e.target.value)}} className="form-control  col-8 col-md-6" name="valor-total" id="valor-total" placeholder="Valor Total" />
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="cantidad" className="col-8 form-label fw-bold">Cantidad</label>
                                <div className="col-auto">
                                    <input type="number" onChange={(e)=> {setCantidad(e.target.value)}} className="form-control  col-8 col-md-6" name="cantidad" id="cantidad" placeholder="Cantidad" />
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="precio" className="col-8 form-label fw-bold">Precio Unitario</label>
                                <div className="col-auto">
                                    <input type="number" onChange={(e)=> {setPrecioUnitario(e.target.value)}} className="form-control  col-8 col-md-6" name="precioU" id="precioU" placeholder="Precio Unitario" />
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="documento" className="col-8 form-label fw-bold">Documento de Identificacion</label>
                                <div className="col-auto">
                                    <input type="number" onChange={(e)=> {setDI(e.target.value)}} className="form-control  col-8 col-md-6" name="documento" id="documento" placeholder="Documento de Identificacion" />
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="nombreC" className="col-8 form-label fw-bold">Nombre del Cliente</label>
                                <div className="col-auto">
                                    <input type="text" onChange={(e)=> {setNombreCliente(e.target.value)}} className="form-control  col-8 col-md-6" name="nombreC" id="nombreC" placeholder="Nombre del Cliente" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-8 col-sm-4 col-md-4">
                                    <label className="form-label col-8 fw-bold" htmlFor="fecha-inicial">Fecha de la Venta </label>
                                    <input type="date" onChange={(e)=> {setFechaVenta(e.target.value)}} className="form-control col-8 col-md-3" name="fecha" id="fecha" placeholder="DD/MM/AAAA" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="encargado" className="col-8 form-label fw-bold">Encargado</label>
                                    <div className="col-auto">
                                        <select name="Encargado" onChange={(e)=> {setEncargado(e.target.value)}} className="form-control form-label">
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
                                            <select name="estado" onChange={(e)=> {setEstadoVenta(e.target.value)}} className="form-control form-label col-8 col-md-6">
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
                                            <button className="btn btn-dark">Guardar</button>
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
