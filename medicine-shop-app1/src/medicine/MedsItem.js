import React, { useContext } from 'react'
import classes from "./MedsItem.module.css";
import CartContext from '../store/cart-context';
import MedicineForm from './MedicineForm'


 const MedsItem = (props) => {
    
const myData = useContext(CartContext);

const price= `Rs. ${props.price.toFixed(2)}`;

const addToCartHandler=(quantity)=>{

myData.addMeds({
    id:props.id,
    name:props.name,
    price:props.price,
    quantity:quantity
})
}

  return (
    <li className={classes.meds}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.desc}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
      <MedicineForm onAddToCart={addToCartHandler}/>
      </div>
    </li>
  )
}
export default MedsItem;