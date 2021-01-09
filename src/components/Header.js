import SearchIcon from '@material-ui/icons/Search';
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
function Header(props) {

 const getCount=()=>{
 let count = 0 ;
 
 props.cartItems.forEach(item => {
   count += parseInt(item.cartItem.qty)
   
 });

 return count;
 }

 
    return (
        <div className="Header">
       {/*   Logo */}
       <Link to="/">
           <div className="Header-logo">
                    <img src={"https://mikekitko.com/wp-content/uploads/2019/10/amazon-logo-white-768x232.png"} />
                </div>
               </Link>
      {/*   address */}
         <div className="Header-optionAddress">
           <div className="Header-option">
           
              <span className="Header-optionLineTwo">Select your address
               <div className="Header-logo">
                    <img src={"https://mikekitko.com/wp-content/uploads/2019/10/amazon-logo-white-768x232.png"} />
                </div>
              </span>
           </div>
          </div>
       {/*   Serach Bar */}
      <div className="Header-search">
       <input className="Header-searchInput" type="text"/>
        <div className="Header-searchIconContainer">
         <SearchIcon/>

         </div>
        </div>
       <div className="Header-navItem">
        <div className="Header-option">
       <span className="Header-optionLineOne">Hello, Yub</span>
          <span className="Header-optionLineTwo">Account &List</span>
        </div>
        <div className="Header-option">
       <span className="Header-optionLineOne">Returns</span>
          <span className="Header-optionLineTwo">Orders</span>
        </div>
       </div>
     
        </div>
    )
}

export default Header
