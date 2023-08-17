import { useContext } from 'react';
import classes from './Cart.module.css';
import Modal from '../../UI/Modal';
import CartItem from './CartItem';
import {MyContext} from '../../context/AppContext'

const Cart = (props) => {
   
  
    const {cart, removeItem} = useContext(MyContext);

    let totalPrice=0;
    cart.map((item)=>{
      return totalPrice+=item.price;
    })

  
  const cartItems= (
    <ul>
   {cart.map((product)=>(
        <CartItem key={product.id} imageUrl={product.imageUrl} title={product.title} price={product.price}
        itemRemoveHandler={()=>removeItem(product.id)}/>
    ))}
    </ul>

  )

  return (
    <Modal onClose={props.onClose}>
    <div> <h1 className={classes.mainHeading}>CART</h1>
    <div className={classes.actions}>
    <button className={classes['button--alt']} onClick={props.onClose}><h1>+</h1></button>
  </div></div>
    <div className={classes.cartHeadings}>
        
    <h5>ITEM</h5>  
    <h5>PRICE</h5>  
    <h5>QUANTITY</h5>  
    </div>
    <div className={classes.cartItemsContainer}>
    {cartItems}
    </div>
      
      
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalPrice}</span>
      </div>
     
    </Modal>
  );
};

export default Cart;