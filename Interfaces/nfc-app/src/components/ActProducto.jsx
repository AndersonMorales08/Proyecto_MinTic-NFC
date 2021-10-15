import React from 'react'

export const ActProducto = () => {


    
    return (
        <>
            <main>
                <div className="card-body">
                    <div className="card-header bg-white rounded border">
                        <h1 className="titulo text-center">Actualización de productos</h1>
                    </div>
                    <br />
                    <h2 className="card-subtitle mb-2 text-muted text-center">N° Producto: Asd323fds</h2>
                    <form action method="POST">
                        <br />
                        <label className="form-label col-8 fw-bold" htmlFor="Precio">Precio</label>
                        <div className="input-group">
                            <input className="form-control" type="input" placeholder="Ingrese el precio" disabled id="precio" />
                            <button className="btn btn-outline-dark btn-lg"><img src="/Interfaces/Sources/edit2.png" alt="editar" /></button>
                        </div>
                        <br />
                        <div className="form-group">
                            <label className="form-label col-8 fw-bold" htmlFor="desc">Descripción</label>
                            <div className="input-group mb-3">
                                <textarea className="form-control" id="desc" disabled defaultValue={""} />
                                <button className="btn btn-outline-dark btn-lg"><img src="/Interfaces/Sources/edit2.png" alt="editar" /></button>
                            </div>
                        </div>
                        <br />
                        <label className="form-label col-8 fw-bold" htmlFor="model">Modelo</label>
                        <div className="input-group mb-3">
                            <select name="modelo" className="form-control" id="model" disabled>
                                <option value="Mod_Default">Selecciona un Modelo</option>
                                <option value="Sentra Sr">Sentra Sr</option>
                                <option value="Mazda CX-9">Mazda CX-9</option>
                                <option value="Chevrolet Equinox">Chevrolet Equinox</option>
                            </select>
                            <button className="btn btn-outline-dark btn-lg"><img src="/Interfaces/Sources/edit2.png" alt="editar" /></button>
                        </div>
                        <br />
                        <label className="form-label col-8 fw-bold" htmlFor="state">Estado</label>
                        <div className="input-group mb-3">
                            <select className="form-control" id="state" disabled>
                                <option value="Mod_Default">Seleccione el estado</option>
                                <option value="disponible">Disponible</option>
                                <option value="No_disponible">No disponible</option>
                            </select>
                            <button className="btn btn-outline-dark btn-lg"><img src="/Interfaces/Sources/edit2.png" alt="editar" /></button>
                        </div>
                        <br />
                        <div className="text-center ">
                            <a href="/Interfaces/confirmacion-registrar-producto.html" role="button" className="btn btn-dark btn-lg">Actualizar</a>
                        </div>
                    </form>
                </div>
            </main>



        </>
    )
}
