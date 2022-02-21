import React from 'react';
import { useStateValue } from '../../StateProvider';
import "./CheckoutProduct.css";

export default function CheckoutProduct({id, image, title, price, rating, hideButton}) {

    const [{myCart},dispatch]=useStateValue();

    const removeFromCart = ()=>{
        //remove the items from cart

        dispatch({
            type : "REMOVE_FROM_CART",
            id : id,
        })

    }

    return (
        <div className='checkoutProduct'>
            <img className='checkoutProduct_image' src={image} alt="product_image"></img>

            <div className="checkoutProduct_info">
                <p className="checkoutProduct_title">{title}</p>
                <p className="checkoutProduct_price">
                    <strong><i class="fa fa-inr"></i>{price}</strong>
                </p>
                <div className="checkoutProduct_rating">
                    {Array(rating).fill().map((_, i) => (<p>⭐ </p>))}
                </div>
                {!hideButton && (
                    
                    <button className='remove_button' onClick={removeFromCart}>Remove from Cart</button>
                )}

            </div>


        </div>
    )
}
