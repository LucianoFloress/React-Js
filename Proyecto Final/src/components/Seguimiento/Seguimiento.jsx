import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const Seguimiento = () => {
    const {id} = useParams();

    return (
        <div className="container py-5">
            <div className="row">
                <div className="col-md-12 text-center">
                    <div className="alert alert-primary" role="alert">
                        <h1>¡Muchas gracias por su compra!</h1>
                        <p>Su número de seguimiento es: <b>{id}</b>, pronto nos comunicaremos con usted para acordar el envío.</p>
                    </div>
                    <Link to={"/"} className="btn botonCarrito">Volver al inicio</Link>
                </div>
            </div>
        </div>
    )
}

export default Seguimiento;