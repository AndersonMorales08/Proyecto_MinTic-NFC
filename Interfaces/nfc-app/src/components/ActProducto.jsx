import React, { useState, useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { actualizarDocumentoDatabase, consultarDocumentoDatabase } from './firebaseconf';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { UserPanel } from './UserPanel'

export const ActProducto = () => {

    const { id } = useParams()
    const [cantidad, setCantidad] = useState(0);
    const [modelo, setModelo] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [precio, setPrecio] = useState(0);
    const [fechaRegistro, setFechaRegistro] = useState('');
    const [fechaVenta, setFechaVenta] = useState('');
    const [estado, setEstado] = useState('');
    const [codAgencia, setCodAgencia] = useState('');
    const [color, setColor] = useState('');
    const [motor, setMotor] = useState('');
    const history = useHistory();

    useEffect(async () => {
        const productoTemp = await consultarDocumentoDatabase('lista-productos', id)

        setModelo(productoTemp.modelo)
        setCantidad(productoTemp.cantidad)
        setDescripcion(productoTemp.descripcion)
        setPrecio(productoTemp.precio)
        setFechaRegistro(productoTemp.fechaRegistro)
        setFechaVenta(productoTemp.fechaVenta)
        setEstado(productoTemp.estado)
        setCodAgencia(productoTemp.codAgencia)
        setColor(productoTemp.color)
        setMotor(productoTemp.motor)
    }, []);
    
    const [inter, setInter] = useState(true);

    const cerrarInter = async () => {
        setInter(false)
    }


    const handleActualizarProducto = async (e) => {
        e.preventDefault()

        const producto = {
            cantidad,
            modelo,
            descripcion,
            precio,
            fechaRegistro,
            fechaVenta,
            estado,
            codAgencia,
            color,
            motor,
        }


        actualizarDocumentoDatabase('lista-productos', id, producto)
        alert("El producto se actualizó correctamente")
        cerrarInter()
        console.log(inter)
    }



    return (
        <>
            <main>
                <div className="card-body">
                    <div className="card-header bg-white rounded border">
                        <h1 className="titulo text-center">Actualización de producto</h1>
                    </div>
                    <br />
                    <form>

                        <div className="w-100 d-flex pt-3">
                            <div className="w-50 pe-3 form-group">
                                <label className="form-label fw-bold" htmlFor="cantidad">Cantidad</label>
                                <input className="form-control" type="number" placeholder="Ingrese cantidad" id="cantidad" value={cantidad}
                                    onChange={(e) => {
                                        setCantidad(e.target.value);

                                    }} />
                            </div>
                            <div className="w-50 ps-3">
                                <label className="form-label col-8 fw-bold" htmlFor="Precio">Precio</label>
                                <input className="form-control" type="number" placeholder="Ingrese el precio" id="precio" value={precio}
                                    onChange={(e) => {
                                        setPrecio(e.target.value);

                                    }} />
                            </div>
                        </div>
                        <div className="w-100 pt-3 d-flex">
                            <div className="w-50 pe-3">
                                <label className="form-label fw-bold" htmlFor="desc">Descripción</label>
                                <div className="w-100">
                                    <textarea className="form-control" id="desc" value={descripcion} onChange={(e) => {
                                        setDescripcion(e.target.value);

                                    }} />
                                </div>
                            </div>

                            <div className="w-50 ps-3">
                                <label className="form-label fw-bold" htmlFor="model">Modelo</label>
                                <select name="modelo" className="form-control form-label" id="model" value={modelo} onChange={(e) => {
                                    setModelo(e.target.value);
                                }}>
                                    <option value="Mod_Default">Selecciona un Modelo</option>
                                    <option value="Sail ls">Chevrolet Sail</option>
                                    <option value="Spark Gt">Chevrolet Spark GT</option>
                                    <option value="Equinox">Chevrolet Equinox</option>
                                    <option value="Camaro SS">Chevrolet Camaro SS</option>
                                    <option value="Silverado">Chevrolet Silverado</option>
                                    <option value="Corvette">Chevrolet Corvette</option>
                                    <option value="Tracker">Chevrolet Tracker</option>
                                    <option value="Cruze">Chevrolet Cruze</option>
                                    <option value="Cobalt">Chevrolet Cobalt</option>
                                    <option value="Blazer">Chevrolet Blazer</option>
                                </select>
                            </div>
                        </div>

                        <div className="w-100 pt-3 d-flex">
                            <div className="w-50 pe-3">
                                <label className="form-label fw-bold" htmlFor="dateReg">Fecha de Registro</label>
                                <input className="form-control" type="datetime-local" id="dateReg" value={fechaRegistro} onChange={(e) => {
                                    setFechaRegistro(e.target.value);
                                }} />
                            </div>
                            <div className="w-50 ps-3">
                                <label className="form-label fw-bold" htmlFor="dateVen">Fecha de Venta</label>
                                <input className="form-control" type="date" placeholder="Ingrese fecha de venta" id="dateVen" value={fechaVenta}
                                    onChange={(e) => {
                                        setFechaVenta(e.target.value);
                                    }} />
                            </div>
                        </div>

                        <div className="w-100 pt-3 d-flex">
                            <div className="w-50 pe-3">
                                <label className="form-label fw-bold" htmlFor="state">Estado</label>
                                <select className="form-control" id="state" value={estado} onChange={(e) => {
                                    setEstado(e.target.value);
                                }}>
                                    <option value="Mod_Default">Seleccione el estado</option>
                                    <option value="disponible">Disponible</option>
                                    <option value="No_disponible">No disponible</option>
                                </select>
                            </div>
                            <div className="w-50 ps-3">
                                <label className="form-label fw-bold" htmlFor="codAgencia">Codigo de Agencia</label>
                                <input className="form-control" type="text" placeholder="codigo de agencia" value={codAgencia} id="codAgencia" onChange={(e) => {
                                    setCodAgencia(e.target.value);
                                }} />
                            </div>
                        </div>

                        <div className="w-100 pt-3 d-flex">
                            <div className="w-50 pe-3">
                                <label className="form-label fw-bold" htmlFor="color">Color</label>
                                <select className="form-control" id="color" value={color} onChange={(e) => {
                                    setColor(e.target.value);
                                }}>
                                    <option value="Mod_Default">Seleccione Color</option>
                                    <option value="Negro">Negro</option>
                                    <option value="Blanco">Blanco</option>
                                    <option value="Rojo">Rojo</option>
                                    <option value="Azul">Azul</option>
                                    <option value="Gris">Gris</option>
                                </select>
                            </div>
                            <div className="w-50 ps-3">
                                <label className="form-label fw-bold" htmlFor="motor">Modelo del Motor</label>
                                <input className="form-control" type="text" placeholder="ingrese modelo" id="motor" value={motor} onChange={(e) => {
                                    setMotor(e.target.value);
                                }} />
                            </div>
                        </div>
                        <div className="text-center pt-3 pb-3 ">
                            <Link a onClick={handleActualizarProducto} className="btn btn-dark btn-lg"
                                to={`/user`}>
                                Actualizar
                            </Link>
                        </div>
                    </form>
                </div>
            </main>
            <Router>
                <Switch >
                    <Route exact path="/user" component={UserPanel} />
                </Switch>
            </Router>


        </>
    )
}
