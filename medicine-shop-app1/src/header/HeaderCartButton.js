import React,{useContext} from 'react'
import classes from './HeaderCartButton.module.css'
import {BsFillCartCheckFill} from 'react-icons/bs'
import CartContext from '../store/cart-context'

const HeaderCartButton = (props) => {

 const data= useContext(CartContext);
 
 const {items}= data;

 const numberOfCartItems=items.reduce((currNumber, item)=>{
  return currNumber+item.quantity;
 }, 0);


  return (
    <button className={classes.button} onClick={props.onClick}>
    <span className={classes.icon}>
    <BsFillCartCheckFill/>
  </span>
  <span>Your Cart</span>
  <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  )
}
export default HeaderCartButton;