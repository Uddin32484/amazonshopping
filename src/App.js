
import { useEffect, useState } from "react";
import {
  BrowserRouter,

  Route, Switch
} from "react-router-dom";
import './App.css';
import Cart from './components/Cart';
import { db } from "./components/Firebase";
import Header from './components/Header';
import Home from './components/Home';
function App() {

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
   < BrowserRouter>
      <div className="App">
        <Header
        cartItems={cartItems} />
        <Switch>
          <Route   path="/cart">
            <Cart/>
          </Route>
          <Route  exact={true} path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </ BrowserRouter>
  );
}

export default App;
