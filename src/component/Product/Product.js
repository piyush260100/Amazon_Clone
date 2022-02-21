import React from 'react';
import "./Product.css";
import {useStateValue} from "../../StateProvider";

export default function Product({id,title,image,price,rating,vote}) {

    const [{myCart},dispatch] = useStateValue();

    //console all items in the cart
    console.log("this is the cart",myCart)


  const addToCart=()=>{
    //dispatch the item to data layer
    dispatch({

        type: "ADD_TO_CART",
        item: {
          id:id,
          title:title,
          image:image,
          price:price,
          rating:rating,
          vote:vote,

        },
    });

  }

  return (
    <div className='product'>
      <div className="product_info">
        <p>{title}</p>
        <p className='product_price'><strong><i class="fa fa-inr"></i>{price}</strong></p>
        <div className="product_rating">
            {Array(rating).fill().map((_,i)=>(<p>⭐ </p>))}        
            
          ({vote})
          
        </div>
      </div>

      <img src={image} 
      alt ={title}></img>

      <button className='product_button' onClick={addToCart}>Add to Cart</button>

    </div>
  )
}
