import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ItemCount = ({stock, onAdd}) => {
    const [counter, setCounter] = useState(1);
    const [itemStock, setItemStock] = useState(stock);
    const [selled, setSelled] = useState(false);
    
    const incrementarStock = () =>{
        if (counter < itemStock)
        setCounter (counter + 1);
    }

    const restarStock = () =>{
        if (counter > 1)
        setCounter (counter - 1);
    }

    const addToCart = (quantity) =>{
        setItemStock(itemStock - quantity);
        setCounter(1);
        setSelled(true);
        onAdd(quantity);
    }

    useEffect(() => {
        setItemStock(stock);
    }, [stock]);

    return (
        <div className="container text-center">
            <div className="row mb-3">
                <div className="col-md-12">
                    <div className="btn-group counter" role="group" aria-label="Basic outlined example">
                        <button type="button" className="btn" onClick={restarStock}>-</button>
                        <button type="button" className="btn">{counter}</button>
                        <button type="button" className="btn" onClick={incrementarStock}>+</button>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    {selled ? <Link to={"/cart"} className="btn botonCarrito mb-4">Finalizar compra</Link> : <button className="btn botonCarrito mb-4" onClick={()=> {addToCart(counter)}}>Agregar al carrito</button>}
                </div>
            </div>
        </div>
    )
}

export default ItemCount;