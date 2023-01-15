import React from "react";
import { NavLink } from "react-router-dom";
import CartWidget from "../Carts/CartWidget";

const NavBar = () =>{
    return(
        <div className="container">
            <div className="row nav">
                <div className="col-md-6">
                    <nav className="navbar navbar-expand-lg">
                        <div className="container-fluid">
                            <NavLink className="navbar-brand" to="/"><img src={"images/icon-page.jpg"} alt={"Logo de cell max"} width={80} /></NavLink>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNav">
                                <ul className="navbar-nav catalogoSuperior">
                                    <li className="nav-item">
                                    <NavLink className="nav-link" aria-current="page" to={"/category/Samsung"}>Samsung</NavLink>
                                    </li>
                                    <li className="nav-item">
                                    <NavLink className="nav-link" to={"/category/Motorola"}>Motorola</NavLink>
                                    </li>
                                    <li className="nav-item">
                                    <NavLink className="nav-link" to={"/category/Xiaomi"}>Xiaomi</NavLink>
                                    </li>
                                    <li className="nav-item">
                                    <NavLink className="nav-link" to={"/category/Iphone"}>Iphone</NavLink>
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