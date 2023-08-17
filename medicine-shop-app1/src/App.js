import React,{useState} from "react";
import Cart from "./cart/Cart";
import CartProvider from "./store/CartProvider"
import Header from "./header/Header";
import Medicine from "./medicine/Medicine";


function App() {
  const[showCart, setShowCart]= useState(false);

  const showCartHandler=()=>{
    setShowCart(true);
  }
  const closeCartHandler=()=>{
    setShowCart(false);
  }
  return (
    <CartProvider>
    <Header onShowCart={showCartHandler}/>
    {showCart && <Cart onClose={closeCartHandler}/>}
    <main>
    <Medicine/>
    </main>
    </CartProvider>
  );
} 

export default App;