import React,{useContext} from 'react'
import classes from "./Navbar.module.css";
import {MyContext} from '../../context/AppContext';
import { NavLink } from 'react-router-dom';

const MyNavbar = (props) => {
    const cartCtx= useContext(MyContext);
    let {cart}=cartCtx;
  
    const numberOfCartItems=cart.length;
  return (
    <header>
            <div className={classes.navbar}> 
       <ul className={classes.header}>
       <li><NavLink activeclassname={classes.active} to="/home">HOME</NavLink></li>
       <li><NavLink activeclassname={classes.active} to="/">STORE</NavLink></li>
       <li><NavLink activeclassname={classes.active} to="/about">ABOUT</NavLink></li>
       <li><NavLink activeclassname={classes.active} to="/contactUs">CONTACT US</NavLink></li>
       <div>
       <button className={classes.cart_holder} id='cart' onClick={props.onShowCart}>CART</button>
       <span className={classes.cart_number}>{numberOfCartItems}</span> 
       </div>

   </ul>
   </div>
            <h1>The Generics</h1>
        </header>

  )
}

export default MyNavbar;
