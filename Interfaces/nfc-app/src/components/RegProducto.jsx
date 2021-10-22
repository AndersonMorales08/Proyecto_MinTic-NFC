import React, { useState } from 'react'
import { v4 } from 'uuid'
import { guardarDatabase } from './firebaseconf';

export const RegProducto = () => {
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


    const validacionCampos = () => {
        if (cantidad === '' || precio === '' || descripcion === '' || modelo === 'Mod_Default' || estado === 'Mod_Default') {
            return false;
        }
        return true;
    }

    const handleFormulario = (e) => {
        e.preventDefault();
        if (validacionCampos()) {
            const producto = {
                id: v4(),
                cantidad: Number(cantidad),
                modelo: modelo,
                descripcion: descripcion,
                precio: Number(precio),
                fechaRegistro: fechaRegistro,
                fechaVenta: fechaVenta,
                estado: estado,
                codAgencia: codAgencia,
                color: color,
                motor: motor,
            }
            console.log(producto);
            guardarDatabase('lista-productos', producto)
            alert("El producto se registro correctamente")
        } else {
            console.log('¡Debe llenar todos los campos!');
        }
    }


    return (
        <>
            <div className="container-fluid bg-light">
                <main className="container">

                    <h1 className="titulo text-center">Registro de productos</h1>
                    <form onSubmit={handleFormulario} method="POST">
                        <div className="w-100 d-flex pt-3">
                            <div className="w-50 pe-3 form-group">
                                <label className="form-label fw-bold" htmlFor="cantidad">Cantidad</label>
                                <input className="form-control" type="number" placeholder="Ingrese cantidad" id="cantidad" onChange={(e) => {
                                    setCantidad(e.target.value);
                                }} />
                            </div>
                            <div className="w-50 ps-3">
                                <label className="form-label col-8 fw-bold" htmlFor="Precio">Precio</label>
                                <input className="form-control" type="number" placeholder="Ingrese el precio" id="precio" onChange={(e) => {
                                    setPrecio(e.target.value);
                                }} />
                            </div>
                        </div>
                        <div className="w-100 pt-3 d-flex">
                            <div className="w-50 pe-3">
                                <label className="form-label fw-bold" htmlFor="desc">Descripción</label>
                                <div className="w-100">
                                    <textarea className="form-control" id="desc" onChange={(e) => {
                                        setDescripcion(e.target.value);
                                    }} />
                                </div>
                            </div>

                            <div className="w-50 ps-3">
                                <label className="form-label fw-bold" htmlFor="model">Modelo</label>
                                <select name="modelo" className="form-control form-label" id="model" onChange={(e) => {
                                    setModelo(e.target.value);
                                }}>
                                    <option value="Mod_Default">Selecciona un Modelo</option>
                                    <option value="Sentra Sr">Sentra Sr</option>
                                    <option value="Mazda CX-9">Mazda CX-9</option>
                                    <option value="Chevrolet Equinox">Chevrolet Equinox</option>
                                </select>
                            </div>
                        </div>

                        <div className="w-100 pt-3 d-flex">
                            <div className="w-50 pe-3">
                                <label className="form-label fw-bold" htmlFor="dateReg">Fecha de Registro</label>
                                <input className="form-control" type="datetime-local" id="dateReg" onChange={(e) => {
                                    setFechaRegistro(e.target.value);
                                }} />
                            </div>
                            <div className="w-50 ps-3">
                                <label className="form-label fw-bold" htmlFor="dateVen">Fecha de Venta</label>
                                <input className="form-control" type="date" placeholder="Ingrese fecha de venta" id="dateVen" onChange={(e) => {
                                    setFechaVenta(e.target.value);
                                }} />
                            </div>
                        </div>

                        <div className="w-100 pt-3 d-flex">
                            <div className="w-50 pe-3">
                                <label className="form-label fw-bold" htmlFor="state">Estado</label>
                                <select className="form-control" id="state" onChange={(e) => {
                                    setEstado(e.target.value);
                                }}>
                                    <option value="Mod_Default">Seleccione el estado</option>
                                    <option value="disponible">Disponible</option>
                                    <option value="No_disponible">No disponible</option>
                                </select>
                            </div>
                            <div className="w-50 ps-3">
                                <label className="form-label fw-bold" htmlFor="codAgencia">Codigo de Agencia</label>
                                <input className="form-control" type="text" placeholder="codigo de agencia" id="codAgencia" onChange={(e) => {
                                    setCodAgencia(e.target.value);
                                }} />
                            </div>
                        </div>

                        <div className="w-100 pt-3 d-flex">
                            <div className="w-50 pe-3">
                                <label className="form-label fw-bold" htmlFor="color">Color</label>
                                <select className="form-control" id="color" onChange={(e) => {
                                    setColor(e.target.value);
                                }}>
                                    <option value="Mod_Default">Seleccione Color</option>
                                    <option value="Negro">Negro</option>
                                    <option value="Blanco">Blanco</option>
                                    <option value="Blanco">Rojo</option>
                                    <option value="Blanco">Azul</option>
                                    <option value="Blanco">Gris</option>
                                </select>
                            </div>
                            <div className="w-50 ps-3">
                                <label className="form-label fw-bold" htmlFor="motor">Modelo del Motor</label>
                                <input className="form-control" type="text" placeholder="ingrese modelo" id="motor" onChange={(e) => {
                                    setMotor(e.target.value);
                                }} />
                            </div>
                        </div>
                        <div className="text-center pt-3 pb-3 ">
                            <button className="btn btn-dark btn-lg">Registrar</button>
                        </div>
                    </form>
                </main>
            </div >
        </>
    )
}
