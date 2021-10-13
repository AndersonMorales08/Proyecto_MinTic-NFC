import React from 'react'

export const RegProducto = () => {
    return (
        <>
            <div className=" w-100 bg-light">
                <main>
                    <div className="card-body">
                        <div className="card-header bg-white rounded border">
                            <h1 className="titulo text-center">Registro de productos</h1>
                        </div>
                        <br />
                        <form action method="POST">
                            <label className="form-label col-8 fw-bold" htmlFor="identificador">Identificador único</label>
                            <input className="form-control" type="text" placeholder="Ingrese el identificador único" id="identiificador" />
                            <br />
                            <label className="form-label col-8 fw-bold" htmlFor="Precio">Precio</label>
                            <input className="form-control" type="text" placeholder="Ingrese el precio" id="precio" />
                            <br />
                            <div className="form-group">
                                <label className="form-label col-8 fw-bold" htmlFor="desc">Descripción</label>
                                <div className="col-auto">
                                    <textarea className="form-control" id="desc" defaultValue={""} />
                                </div>
                            </div>
                            <br />
                            <label className="form-label col-8 fw-bold" htmlFor="model">Modelo</label>
                            <select name="modelo" className="form-control form-label col-8 col-md-6" id="model">
                                <option value="Mod_Default">Selecciona un Modelo</option>
                                <option value="Sentra Sr">Sentra Sr</option>
                                <option value="Mazda CX-9">Mazda CX-9</option>
                                <option value="Chevrolet Equinox">Chevrolet Equinox</option>
                            </select>
                            <br />
                            <label className="form-label col-8 fw-bold" htmlFor="state">Estado</label>
                            <select className="form-control" id="state">
                                <option value="Mod_Default">Seleccione el estado</option>
                                <option value="disponible">Disponible</option>
                                <option value="No_disponible">No disponible</option>
                            </select>
                            <br />
                            <div className="text-center ">
                                <a href="/Interfaces/confirmacion-registrar-producto.html" role="button" className="btn btn-dark btn-lg">Agregar</a>
                            </div>
                        </form>
                    </div>
                </main>
            </div>


        </>
    )
}
