import React from 'react'
import './FirstSection.css'

export const FirstSection = () => {
    return (
        <>
            <section className="pt-5 mt-5 pb-5 bg-white" id="vehiculos">
                <div>
                    <div className="p-5" style={{ height: 450 }}>
                        <h2>Vehiculos</h2>
                        <ul className="nav nav-pills py-1 bg-dark" style={{ height: 48 }} id="pills-tab" role="tablist">
                            <li className="nav-item mx-sm-2" role="presentation">
                                <button className="btn corpcolor text-light" id="pills-carro-tab" data-bs-toggle="pill"
                                    data-bs-target="#pills-carro" type="button" role="tab" aria-controls="pills-carro"
                                    aria-selected="true">Carros</button>
                            </li>
                            <li className="nav-item mx-sm-2" role="presentation">
                                <button className="btn corpcolor text-light" id="pills-camioneta-tab" data-bs-toggle="pill"
                                    data-bs-target="#pills-camioneta" type="button" role="tab"
                                    aria-controls="pills-camioneta" aria-selected="false">Camionetas</button>
                            </li>
                            <li className="nav-item mx-sm-2" role="presentation">
                                <button className="btn corpcolor text-light" id="pills-suv-tab" data-bs-toggle="pill"
                                    data-bs-target="#pills-suv" type="button" role="tab" aria-controls="pills-suv"
                                    aria-selected="false">SUV'S</button>
                            </li>
                            <li className="nav-item mx-sm-2" role="presentation">
                                <button className="btn corpcolor text-light" id="pills-deportivo-tab" data-bs-toggle="pill"
                                    data-bs-target="#pills-deportivo" type="button" role="tab"
                                    aria-controls="pills-deportivo" aria-selected="false">Deportivos</button>
                            </li>
                        </ul>
                        <div className="tab-content" id="pills-tabContent">
                            <div className="tab-pane fade show active" id="pills-carro" role="tabpanel"
                                aria-labelledby="pills-carro-tab">
                                <div className="row m-3">
                                    <div className="col-4 d-flex align-items-center justify-content-center"><a href="#"><img
                                        className="rounded-3 articulo imgGrid" src="./images/carro1.jpg" alt="" srcset="" /></a>
                                    </div>
                                    <div className="col-4 d-flex align-items-center justify-content-center"><a href="#"><img
                                        className="rounded-3 articulo imgGrid" src="./images/carro1.jpg" alt="" srcset="" /></a>
                                    </div>
                                    <div className="col-4 d-flex align-items-center justify-content-center"><a href="#"><img
                                        className="rounded-3 articulo imgGrid" src="./images/carro1.jpg" alt="" srcset="" /></a>
                                    </div>
                                </div>
                                <div className="row m-3">
                                    <div className="col-4 d-flex align-items-center justify-content-center">
                                        <p> sedan compacto se destaca su consumo de combustible que puede llegar en
                                            carretera a 70 km por galón-. el Beat tiene un corazón de 1.2L, 4 cilindros, que
                                            eroga 80 caballos
                                            de fuerza y va acoplado a una transmisión mecánica de 5 relaciones. </p>
                                    </div>
                                    <div className="col-4 d-flex align-items-center justify-content-center">
                                        <p>sedan compacto se destaca su consumo de combustible que puede llegar en
                                            carretera a 70 km por galón-. el Beat tiene un corazón de 1.2L, 4 cilindros, que
                                            eroga 80 caballos
                                            de fuerza y va acoplado a una transmisión mecánica de 5 relaciones.</p>
                                    </div>
                                    <div className="col-4 d-flex align-items-center justify-content-center">
                                        <p>sedan compacto se destaca su consumo de combustible que puede llegar en
                                            carretera a 70 km por galón-. el Beat tiene un corazón de 1.2L, 4 cilindros, que
                                            eroga 80 caballos
                                            de fuerza y va acoplado a una transmisión mecánica de 5 relaciones.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="pills-camioneta" role="tabpanel"
                                aria-labelledby="pills-camioneta-tab">
                                <div className="row m-3">
                                    <div className="col-4 d-flex align-items-center justify-content-center"><a href="#"><img
                                        className="rounded-3 articulo imgGrid" src="./images/camioneta1.jpg" alt=""
                                    /></a></div>
                                    <div className="col-4 d-flex align-items-center justify-content-center"><a href="#"><img
                                        className="rounded-3 articulo imgGrid" src="./images/camioneta1.jpg" alt=""
                                    /></a></div>
                                    <div className="col-4 d-flex align-items-center justify-content-center"><a href="#"><img
                                        className="rounded-3 articulo imgGrid" src="./images/camioneta1.jpg" alt=""
                                    /></a></div>
                                </div>
                                <div className="row m-3">
                                    <div className="col-4 d-flex align-items-center justify-content-center">
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim dicta dolorum
                                            beatae, illo commodi a maiores impedit minus et debitis consequuntur blanditiis
                                            quaerat, sit architecto nesciunt minima ullam, placeat nam.</p>
                                    </div>
                                    <div className="col-4 d-flex align-items-center justify-content-center">
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim dicta dolorum
                                            beatae, illo commodi a maiores impedit minus et debitis consequuntur blanditiis
                                            quaerat, sit architecto nesciunt minima ullam, placeat nam.</p>
                                    </div>
                                    <div className="col-4 d-flex align-items-center justify-content-center">
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim dicta dolorum
                                            beatae, illo commodi a maiores impedit minus et debitis consequuntur blanditiis
                                            quaerat, sit architecto nesciunt minima ullam, placeat nam.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="pills-suv" role="tabpanel" aria-labelledby="pills-suv-tab">
                                <div className="row m-3">
                                    <div className="col-4 d-flex align-items-center justify-content-center"><a href="#"><img
                                        className="rounded-3 articulo imgGrid" src="./images/suv1.jpg" alt="" srcset="" /></a>
                                    </div>
                                    <div className="col-4 d-flex align-items-center justify-content-center"><a href="#"><img
                                        className="rounded-3 articulo imgGrid" src="./images/suv1.jpg" alt="" srcset="" /></a>
                                    </div>
                                    <div className="col-4 d-flex align-items-center justify-content-center"><a href="#"><img
                                        className="rounded-3 articulo imgGrid" src="./images/suv1.jpg" alt="" srcset="" /></a>
                                    </div>
                                </div>
                                <div className="row m-3">
                                    <div className="col-4 d-flex align-items-center justify-content-center">
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim dicta dolorum
                                            beatae, illo commodi a maiores impedit minus et debitis consequuntur blanditiis
                                            quaerat, sit architecto nesciunt minima ullam, placeat nam.</p>
                                    </div>
                                    <div className="col-4 d-flex align-items-center justify-content-center">
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim dicta dolorum
                                            beatae, illo commodi a maiores impedit minus et debitis consequuntur blanditiis
                                            quaerat, sit architecto nesciunt minima ullam, placeat nam.</p>
                                    </div>
                                    <div className="col-4 d-flex align-items-center justify-content-center">
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim dicta dolorum
                                            beatae, illo commodi a maiores impedit minus et debitis consequuntur blanditiis
                                            quaerat, sit architecto nesciunt minima ullam, placeat nam.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="pills-deportivo" role="tabpanel"
                                aria-labelledby="pills-deportivo-tab">
                                <div className="row m-3">
                                    <div className="col-4 d-flex align-items-center justify-content-center"><a href="#"><img
                                        className="rounded-3 articulo imgGrid" src="./images/deportivo1.jpg" alt=""
                                        srcset="" /></a></div>
                                    <div className="col-4 d-flex align-items-center justify-content-center"><a href="#"><img
                                        className="rounded-3 articulo imgGrid" src="./images/deportivo1.jpg" alt=""
                                        srcset="" /></a></div>
                                    <div className="col-4 d-flex align-items-center justify-content-center"><a href="#"><img
                                        className="rounded-3 articulo imgGrid" src="./images/deportivo1.jpg" alt=""
                                        srcset="" /></a></div>
                                </div>
                                <div className="row m-3">
                                    <div className="col-4 d-flex align-items-center justify-content-center">
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim dicta dolorum
                                            beatae, illo commodi a maiores impedit minus et debitis consequuntur blanditiis
                                            quaerat, sit architecto nesciunt minima ullam, placeat nam.</p>
                                    </div>
                                    <div className="col-4 d-flex align-items-center justify-content-center">
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim dicta dolorum
                                            beatae, illo commodi a maiores impedit minus et debitis consequuntur blanditiis
                                            quaerat, sit architecto nesciunt minima ullam, placeat nam.</p>
                                    </div>
                                    <div className="col-4 d-flex align-items-center justify-content-center">
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim dicta dolorum
                                            beatae, illo commodi a maiores impedit minus et debitis consequuntur blanditiis
                                            quaerat, sit architecto nesciunt minima ullam, placeat nam.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="pb-5 d-flex justify-content-center align-items-center">
                        <img src="corp.jpeg" className="rounded-3" alt="" srcset="" />
                    </div>
                </div>
            </section>

        </>
    )
}
