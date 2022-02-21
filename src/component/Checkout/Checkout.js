import React from 'react';
import { useStateValue } from '../../StateProvider';
import Subtotal from '../Subtotal/Subtotal';
import "./Checkout.css";
import CheckoutProduct from "../CheckoutProduct/CheckoutProduct";
import FlipMove from 'react-flip-move';

export default function Checkout() {

    const [{ myCart, user }] = useStateValue();
    // let username={user?.email}.substring(0, email.lastIndexOf("@"));


    return (
        <div className='checkout'>
            <div className="checkout_left">
                <img className='checkout_leftAd' src='https://m.media-amazon.com/images/G/01/AdProductsWebsite/images/ad-specs/ilb/ILB_WordCount_NotApproved._CB1613492740_._TTW_.jpg' alt='ad'></img>

                <div style={{ position: 'relative' }} >
                    <h3>Hello, {(user?.email).substring(0,user?.email.lastIndexOf("@"))}</h3>
                    <h2 className="checkout_title">Shopping Cart</h2>


                    <FlipMove typeName={null}>
                        {myCart.map((item,index) => (
                            <div key={index}>
                                <CheckoutProduct
                                    key={item.id}
                                    id={item.id}
                                    title={item.title}
                                    image={item.image}
                                    price={item.price}
                                    rating={item.rating}
                                />
                            </div>
                        ))}
                    </FlipMove>



                </div>

            </div>

            <div className="checkout_right">
                <Subtotal></Subtotal>

            </div>
        </div>
    )
}
