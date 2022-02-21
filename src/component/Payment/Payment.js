import React, { useEffect, useState } from 'react';
import { useStateValue } from '../../StateProvider';
import CheckoutProduct from '../CheckoutProduct/CheckoutProduct';
import "./Payment.css";
import FlipMove from 'react-flip-move';
import { Link, useNavigate } from 'react-router-dom';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import CurrencyFormat from 'react-currency-format';
import { getCartTotal } from '../../reducer';
import axios from './axios';
import { db } from '../../firebase';


export default function Payment() {

    const [{ myCart, user }, dispatch] = useStateValue();

    const stripe = useStripe();
    const elements = useElements();
    const navigate = useNavigate();

    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [processing, setProcessing] = useState("");
    const [succeeded, setSucceeded] = useState(false);
    const [clientSecret, setClientSecret] = useState(true);


    useEffect(() => {

        //whenever the mycart changes this code will  allows to charge a customer according to the changes.

        const getClientSecret = async () => {

            // const response = await Axios({
            const response = await axios({
                method: "post",
                url: `/payment/create?total=${getCartTotal(myCart) * 100}`,
            });


            setClientSecret(response.data.clientSecret)
        }

        getClientSecret();

    }, [myCart]);

    console.log('the secret is ', clientSecret)


    const handleSubmit = async (e) => {
        // Do all the fancy stripe stuff
        e.preventDefault();
        setProcessing(true);

        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        }).then(({ paymentIntent }) => {
            //payment Intent = Payment Confirmation

            db.collection('users')
                .doc(user?.uid)
                .collection('orders')
                .doc(paymentIntent.id)
                .set({
                    myCart: myCart,
                    amount: paymentIntent.amount,
                    created: paymentIntent.created
                })

            setSucceeded(true);
            setError(null)
            setProcessing(false);

            dispatch({
                type: "EMPTY_CART"
            })

            navigate('/orders', { replace: true });


        })

    }

    const handleChange = (event) => {
        //listen for changes inthe CardElement
        //and display any errors as the customer types their card details

        setDisabled(event.empty);
        setError(event.error ? event.error.message : "");
    }

    return (
        <div className='payment'>
            <div className="payment_container">
                <h1>
                    Checkout (
                    <Link to="/checkout">{myCart?.length} items</Link>
                    )
                </h1>
                <div className="payment_section">
                    {/* delivery address section */}
                    <div className="payment_title">
                        <h3>Delivery Address</h3>
                    </div>

                    <div className="payment_address">
                        <p>{user?.email}</p>
                        <p>123/2, Pkt-4, React Sector-5 </p>
                        <p>New Delhi, India</p>
                    </div>
                </div>

                <div className="payment_section">
                    {/* products sections */}
                    <div className="payment_title">
                        <h3>Review items & Delivery</h3>
                    </div>

                    <div className="payment_items">
                        <FlipMove typeName={null}>
                            {myCart.map((item, index) => (
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

                <div className="payment_section">

                    {/* payment method section */}
                    <div className="payment_title">
                        <h3>Payment Method</h3>
                    </div>

                    <div className="payment_details">
                        {/* Stripe stuff for payment goes here */}

                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange} />

                            <div className="payment_priceContainer">
                                <CurrencyFormat
                                    renderText={(value) => (
                                        <h3>Order Total : {value}</h3>
                                    )}
                                    decimalScale={2}
                                    value={getCartTotal(myCart)}
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    prefix={"Rs "}
                                />

                                <button disabled={processing || disabled || succeeded}>

                                    <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                                </button>
                            </div>

                            {/* Errors in payment  */}
                            {error && <div>{error}</div>}
                        </form>


                    </div>

                </div>

            </div>

        </div>

    )
}
