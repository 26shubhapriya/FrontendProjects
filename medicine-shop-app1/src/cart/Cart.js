import { useContext } from 'react';
import classes from './Cart.module.css';
import Modal from '../UI/Modal';
import CartContext from '../store/cart-context';
import CartItem from './CartItem';


const Cart = (props) => {
  const cartCtx= useContext(CartContext);

  const totalPrice= `$ ${cartCtx.totalPrice.toFixed(2)}` ;
  const hasItems = cartCtx.items.length>0;

  const cartItemRemoveHandler=(id)=>{
    cartCtx.removeMeds(id);
  }
  const cartItemAddandler=(item)=>{
    cartCtx.addMeds({...item, quantity:1})
  }

  const cartItems = (
    <ul className={classes['cart-items']}>
      {cartCtx.items.map((item) => (
        <CartItem key={item.id} name={item.name} quantity={item.quantity} price={item.price} 
        onRemove={cartItemRemoveHandler.bind(null, item.id)} onAdd={cartItemAddandler.bind(null, item)}/>
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalPrice}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
        {hasItems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;