import React from 'react';
import CurrencyFormat from 'react-currency-format';
import { getCartTotal } from '../../reducer';
import { useStateValue } from '../../StateProvider';
import "./Subtotal.css";
import { useNavigate } from 'react-router-dom';


export default function Subtotal() {

    const [{ myCart }] = useStateValue();
    const navigate=useNavigate();


    return (
        <div className='subtotal'>

            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                            Subtotal ({myCart?.length} items) :
                            <strong>{value}</strong>
                        </p>
                        <small className="subtotal_gift">
                            <input type="checkbox" />This order contains a gift
                        </small>
                    </>

                )}
                decimalScale={2}
                value={getCartTotal(myCart)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"Rs "}
            />
            <button className='subtotal_button' onClick={e=>navigate('/payment')}>Proceed to checkout</button>

        </div >

    )
}
