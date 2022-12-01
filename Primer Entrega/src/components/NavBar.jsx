import React from "react";
import CartWidget from "./CartWidget";

const NavBar = () =>{
    return(
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <nav className="navbar navbar-expand-lg">
                        <div className="container-fluid">
                            <a className="navbar-brand" href="/"><img src={"images/icon-page.jpg"} alt={"Logo de cell max"} width={80} /></a>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNav">
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="/Celulares">Celulares</a>
                                    </li>
                                    <li className="nav-item">
                                    <a className="nav-link" href="/Reparaciones">Reparaciones</a>
                                    </li>
                                    <li className="nav-item">
                                    <a className="nav-link" href="/SoporteTecnico">Soporte Tecnico</a>
                                    </li>
                                    <li className="nav-item">
                                    <a className="nav-link" href="/FAQ">FAQ</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
                <div className="col-md-6 d-flex justify-content-end align-items-center">
                    <CartWidget/>
                </div>
            </div>
        </div>
    )
}
export default NavBar;