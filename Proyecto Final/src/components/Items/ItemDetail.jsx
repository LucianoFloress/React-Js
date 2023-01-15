import React, { useContext } from "react";
import ItemCount from "./ItemCount";
import { CartContext } from "../Carts/CartContext";

const ItemDetail = ({item}) =>{
    const {addItem} = useContext(CartContext);

    const onAdd = (quantity) => {
        addItem(item, quantity);
    }

    return (
        <div className="row">
            <div className="col-md-6 offset-md-3 text-center">
                <h1 className="mt-4">{item.nombre}</h1>
                <img src={item.imagen} alt={item.nombre} className="img-fluid"/>
                <p>{item.descripcion}</p>
                <p className="precios"><b>${item.precio}</b></p>
            </div>
            <ItemCount stock={item.stock} onAdd={onAdd}/>
        </div>
    )
}

export default ItemDetail;