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
            <ul className={classes.header}>
            <li><NavLink to="/home.html">HOME</NavLink></li>
                <li><NavLink to="/">STORE</NavLink></li>
                <li><NavLink to="/about.html">ABOUT</NavLink></li>
                <button className={classes.cart_holder} id='cart' onClick={props.onShowCart}>cart</button>
                <span className={classes.cart_number}>{numberOfCartItems}</span>           
            </ul>
            <h1>The Generics</h1>
        </header>

  )
}

export default MyNavbar;
