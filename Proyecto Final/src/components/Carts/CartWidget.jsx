import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./CartContext";

const CartWidget = () =>{
    const {cartTotal} = useContext(CartContext);

    return cartTotal() ? <Link to={"/cart"} className="btn botonCarrito position-relative" title="Ir al carrito">
            <img src={"/images/cart.svg"} alt={"icono del carrito"} width={16}/>
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{cartTotal()}</span>
        </Link> : "";
}

export default CartWidget;