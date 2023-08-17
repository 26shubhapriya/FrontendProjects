import React,{ useReducer} from 'react'
import CartContext   from './cart-context';



const init_value={
  items:[],
  totalPrice:0
}
const reducer = (state, action) => {
  if (action.type === 'ADD') {
    const updatedtotalPrice = state.totalPrice + action.item.price * action.item.quantity;
    const existingCartItemIndex= state.items.findIndex((item)=> item.id === action.item.id);
    const existingCartItem= state.items[existingCartItemIndex];

    let updatedItems;
    if(existingCartItem){
      const updatedItem={
        ...existingCartItem,
        quantity: existingCartItem.quantity + action.item.quantity
      }
      updatedItems= [...state.items];
      updatedItems[existingCartItemIndex]= updatedItem;
    } else {
      updatedItems= state.items.concat(action.item);
     }
     console.log(state);
    return {
      items: updatedItems,
      totalPrice: updatedtotalPrice
    };
    
  }

  if(action.type==="REMOVE"){
    const existingCartItemIndex= state.items.findIndex((item)=> item.id === action.id);
    const exisitingItem= state.items[existingCartItemIndex]
    const updatedtotalPrice= state.totalPrice - exisitingItem.price;
    let updatedItems;
    if(exisitingItem.quantity===1){
      updatedItems= state.items.filter(item=>item.id !== action.id);
    } else {
      let updatedItem={...exisitingItem, quantity: exisitingItem.quantity-1};
      updatedItems=[...state.items];
      updatedItems[existingCartItemIndex]= updatedItem;
    }
    return {
      items : updatedItems,
      totalPrice: updatedtotalPrice
    }
  }
  
  return init_value;
};

const CartProvider = (props) => {
  const [myState, dispatcher]= useReducer(reducer, init_value);

  const addMedsToCart=(item)=>{
    dispatcher({type:"ADD", item:item})
  }
  const removeMedsFromCart=(id)=>{
    dispatcher({type:"REMOVE", id:id})
  }

  const data={
    items: myState.items,
    totalPrice: myState.totalPrice,
    addMeds: addMedsToCart,
    removeMeds:removeMedsFromCart
  }

  return (
    <div>
    <CartContext.Provider value={data}>
    {props.children}
    </CartContext.Provider>
    </div>
  )
}
export default CartProvider;