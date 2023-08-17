import React from 'react'
import "./CartItem.css"

const CartItem = (props) => {
  return (
    <>
     <li className='cartList'>
    <div ><img src={props.imageUrl} alt="albumImage" className='image'/></div>
    <div className='title'>{props.title}</div>
    <h2 className='itemPrice'>{props.price}</h2>
    <span className='quantity'>1</span>
    <button className='removeBtn' onClick={props.itemRemoveHandler}>REMOVE</button>
    </li>
  </>
  )
}

export default CartItem;
