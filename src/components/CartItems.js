import React from 'react'
import './CartItems.css'
function CartItems() {
    return (
        <div className="CartItems">
         <h1>Shopping Cart</h1>
         <hr/>
        <div className="CartItems-items">
            <div className="CartItem">
            <div className="CartItem-image">
                 <img  src="https://m.media-amazon.com/images/I/519uVCvxliL._AC_SL520_.jpg"   />
            </div>
             <div className="CartItem-Info">
               <div className="cartItem-title">
                <h4>Tamil Movie</h4>
              </div>
              <div className="CartItem-action">
              <div className="CartItem-quantity">
               <select>
               <option value="1">Qty: 1</option>
                <option value="2">Qty: 2</option>
                <option value="2">Qty: 3</option>)
               </select>
               </div>
               <div className="CartItem-delete">
               <button className="primary">Delete</button>
             
               </div>
              </div>
             </div>
              <div className="CartItem-price">
             </div>
            </div>

          </div>
        </div>
    )
}

export default CartItems
