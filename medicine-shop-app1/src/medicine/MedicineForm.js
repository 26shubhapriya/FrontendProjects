import React,{useRef, useState} from 'react'
import Input from '../UI/Input';
import classes from './MedicineForm.module.css';

const MedicineForm = (props) => {
    const [quantityValid, setQuantityValid]= useState(true)

    const quantityInputRef= useRef();

    const submitHandler=(e)=>{
        e.preventDefault();
        const medsQuantity= quantityInputRef.current.value;
        const medsQuantityNum= +(medsQuantity);
        if(medsQuantity.trim().length===0 ||medsQuantityNum<1 || medsQuantityNum>10 ){
            setQuantityValid(false);
        }
        props.onAddToCart(medsQuantityNum)
    }

    // const onClickHandler=(e,id)=>{
    //   e.stopPropagation()
    //   props.onDelete(id);
    // }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
      ref={quantityInputRef}
        label='Quantity'
        input={{
          id: 'quantity' + props.id,
          type: 'number',
          min: '1',
          max: '10',
          step: '1',
          defaultValue: '1',
        }}
      />
      <button className={classes.addBtn}>+ Add Meds</button>
       {/*<button className={classes.deleteBtn} onClick={onClickHandler}>Delete Meds</button>*/}
      {!quantityValid && <p><b>Please Enter a Valid Quantity of Medicine (1-10). </b></p>}
    </form>
  )
}
export default MedicineForm;





