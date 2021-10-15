import React from 'react'

export const ActUsuario = () => {
    return (
        <>
            <div className="container-fluid bg-light pb-3">
                <section id="usuarios">
                        <div className="p-5 border rounded-3">
                            <h2>Actualización usuarios</h2>
                            <h4>Usuario:  NFC </h4>
                            <label htmlFor="estados">Estado:</label>
                            <select id="estados" className="form-control">
                                <option value>Seleccione..</option>
                                <option value="Activo" selected="true"> Activo</option>
                                <option value="Inactivo">Inactivo</option>
                            </select>
                            <br />
                            <label htmlFor="roles">Roles:</label>
                            <select id="roles" className="form-control me-2">
                                <option value>Seleccione..</option>
                                <option value="Vendedor">Vendedor</option>
                                <option value="Administrador" selected="true">Administrador</option>
                            </select>
                            <br />
                            <br />
                            <a>
                                <button className="btn btn-dark" type="submit">Actualizar Usuario</button>
                            </a>
                        </div>
                </section>
            </div>


        </>
    )
}
