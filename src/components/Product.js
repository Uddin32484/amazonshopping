import React from 'react';
import { db } from './Firebase';
import './Product.css';
function Product(props) {

  const addToCart = () =>{
 console.log(" I am inside here")
  const cartItem= db.collection('cart-items').doc(props.id);
   
     cartItem.set({
                    title: props.title,
                    image: props.image,
                    price: props.price,
                    qty: 1
                })
               .then(function() {
                console.log(" Document insert successfully");
               })
              .catch(function(error) {
                console.error(" Error occured :", error)

               });
        

}




    return (
       <div className="Product">
            <div className="Product-description">
                <span className="Product-name">{props.title}</span>
                <span className="Product-price">${props.price}</span>
                <span className="Product-rating">
                    <p>🌟</p><p>🌟</p><p>🌟</p><p>🌟</p><p>🌟</p>
                </span>
            </div>
            <img src={props.image} />
            <button onClick={addToCart} >Add to Cart</button>
        </div>
    )
}

export default Product
