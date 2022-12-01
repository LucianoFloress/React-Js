import React from "react";

const ItemListContainer = ({greeting}) =>{
    return (
        <div className="container py-5">
            <div className="row">
                <div className="col-md-12">
                    <div className="alert d-flex justify-content-center alert-danger" role="alert">
                        <p>{greeting}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ItemListContainer;