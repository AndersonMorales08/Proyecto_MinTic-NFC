import React, { useState } from 'react'
import { v4 } from 'uuid'
import { guardarDatabase } from './firebaseconf';

export const RegProducto = () => {
    const [cantidad, setCantidad] = useState(0);
    const [precio, setPrecio] = useState(0);
    const [Descripcion, setDescripcion] = useState('');
    const [modelo, setModelo] = useState('');
    const [estado, setEstado] = useState('');

    const validacionCampos = () => {
        if (cantidad === '' || precio === '' || Descripcion === '' || modelo === 'Mod_Default' || estado === 'Mod_Default') {
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
                precio: Number(precio),
                descripcion: Descripcion,
                modelo: modelo,
                estado: estado,
            }
            console.log(producto);
            guardarDatabase('lista-productos', producto)
        } else {
            console.log('¡Debe llenar todos los campos!');
        }
    }


    return (
        <>
            <div className="container-fluid bg-light">
                <main className="container">
                    <div className="card-body">
                        <div>
                            <h1 className="titulo text-center">Registro de productos</h1>
                        </div>
                        <br />
                        <form onSubmit={handleFormulario} method="POST">
                            <label className="form-label col-8 fw-bold" htmlFor="cantidad">Cantidad</label>
                            <input className="form-control" type="number" placeholder="Ingrese cantidad" id="cantidad" onChange={(e) => {
                                setCantidad(e.target.value);
                            }} />
                            <br />
                            <label className="form-label col-8 fw-bold" htmlFor="Precio">Precio</label>
                            <input className="form-control" type="number" placeholder="Ingrese el precio" id="precio" onChange={(e) => {
                                setPrecio(e.target.value);
                            }} />
                            <br />
                            <div className="form-group">
                                <label className="form-label col-8 fw-bold" htmlFor="desc">Descripción</label>
                                <div className="col-auto">
                                    <textarea className="form-control" id="desc" onChange={(e) => {
                                        setDescripcion(e.target.value);
                                    }} />
                                </div>
                            </div>
                            <br />
                            <label className="form-label col-8 fw-bold" htmlFor="model">Modelo</label>
                            <select name="modelo" className="form-control form-label col-8 col-md-6" id="model" onChange={(e) => {
                                setModelo(e.target.value);
                            }}>
                                <option value="Mod_Default">Selecciona un Modelo</option>
                                <option value="Sentra Sr">Sentra Sr</option>
                                <option value="Mazda CX-9">Mazda CX-9</option>
                                <option value="Chevrolet Equinox">Chevrolet Equinox</option>
                            </select>
                            <br />
                            <label className="form-label col-8 fw-bold" htmlFor="state">Estado</label>
                            <select className="form-control" id="state" onChange={(e) => {
                                setEstado(e.target.value);
                            }}>
                                <option value="Mod_Default">Seleccione el estado</option>
                                <option value="disponible">Disponible</option>
                                <option value="No_disponible">No disponible</option>
                            </select>
                            <br />
                            <div className="text-center ">
                                <button className="btn btn-dark btn-lg">Agregar</button>
                            </div>
                        </form>
                    </div>
                </main>
            </div>
        </>
    )
}
