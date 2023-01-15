import React, { useContext } from "react";
import { CartContext } from "./CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
    const {cart, removeItem, clear, sumTotal, cartTotal} = useContext(CartContext);

    if (cartTotal() === 0) {
        return(
            <div className="container py-5">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <div className="alert alert-danger" role="alert">
                            No se encontraron productos en el carrito
                        </div>
                        <Link to={"/"} className="btn botonCarrito">Volver al menú principal</Link>
                    </div>
                </div>
            </div>
        )
    }

    return(
        <div className="container py-5">
            <div className="row">
                <div className="col-md-12">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col" className="text-end" colSpan={5}><Link onClick={clear} className="btn botonCarrito" title="Vaciar carrito">Vaciar carrito</Link></th>
                            </tr>
                            <tr>
                                <th scope="col">&nbsp;</th>
                                <th scope="col">Producto</th>
                                <th scope="col" className="text-center">Cantidad</th>
                                <th scope="col" className="text-center">Precio</th>
                                <th scope="col">&nbsp;</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart.map(item=> (
                                <tr key={item.id}>
                                    <td><img src={item.imagen} alt={item.nombre} width={48}></img></td>
                                    <td className="align-middle">{item.nombre}</td>
                                    <td className="text-center align-middle">{item.quantity}</td>
                                    <td className="text-center align-middle">${item.quantity * item.precio}</td>
                                    <td className="text-end align-middle"><Link onClick={() => {removeItem(item.id)}} title="Eliminar producto"><img src={"images/trash.svg"} alt={"borrar item"} width={32}/></Link></td>
                                </tr>
                            ))}
                            <tr>
                                <td colSpan={2}>&nbsp;</td>
                                <td className="text-center">Suma total</td>
                                <td className="text-center">${sumTotal()}</td>
                                <td className="text-end"><Link to={"/Checkout"} className="btn botonCarrito" title="Finalizar compra">Finalizar compra</Link></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Cart;