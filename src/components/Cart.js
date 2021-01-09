import React, { useEffect, useState } from 'react';
import './Cart.css';
import CartItems from './CartItems';
import CartTotal from './CartTotal';
import { db } from './Firebase';

function Cart(props) {

const [ cartItems, setCartItems ] = useState([]);

  useEffect(() => {
    db.collection('cart-items').onSnapshot((snapshot)=>{
    
      let tempCartItems = []
      snapshot.docs.map((doc)=>{
          tempCartItems.push({
              id: doc.id,
              cartItem: doc.data()
          })
      })
     
      setCartItems(tempCartItems)
    })
  }, [])

  

    return (
        <div className="Cart">
           {/*  <CartItems CartItems={props.CartItems}/>
            <CartTotal CartItems={props.CartItems}/> */}
            <CartItems cartItems={cartItems}   />
            <CartTotal cartItems={cartItems}  />
        </div>
    )
}

export default Cart
