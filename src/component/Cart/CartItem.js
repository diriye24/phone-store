import React from 'react';
import './CartItem.css';

export default function CartItem({ item, value }) {
    const { id, title, img, price, total, count } = item;
    const { increment, decrement, removeItem } = value;

    return (
        <div className="row me text-capitalize text-center">

            <div className="col-10 col-md-2 col-lg-2">
                <img src={img} style={{ width: '5rem', height:"5rem" }}
                    className="img-fluid" alt="product"
                />
            </div>

            <div className="col-10 col-md-2 col-lg-2">
                <span className="d-md-none d-lg-none">product:</span>
                {title}
            </div>

            <div className="col-10 col-md-2 col-lg-2">
                <span className="d-md-none d-lg-none">price:</span>
                {price} € 
            </div>

            <div className="col-10 col-md-2 col-lg-2 my-2 my-lg-0">

                <div className="d-flex justify-content-center">
                    <span className="btn btn-black mx-1"
                        onClick={() => decrement (id)}> - 
                    </span>

                    <span className="btn btn-black mx-1">{count}</span>

                    <span className="btn btn-black mx-1"
                        onClick={() => increment (id)}> + 
                    </span>
                </div>
            </div>

            <div className="col-10 col-md-2 col-lg-2">
                <div className="cart-icon" onClick={() => removeItem(id)}>
                    <i className="fas fa-trash" />
                </div>
            </div>

            <div className="col-10 col-md-2 col-lg-2">
                <strong>item total: {total}€</strong>
            </div>

        </div>
    )
}
