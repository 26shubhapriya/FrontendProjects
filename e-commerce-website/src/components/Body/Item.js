import React from "react";
const Items = (props) => {
  


  return (
    <div className="content" key={props.id}>
        <div className="container" >
          <h3>{props.title}</h3>
          <div className="image-container">
            <img className="prod-images" src={props.imageUrl} alt={"alb"+props.index+1} />
          </div>
          <div className="prod-details">
            
            <span>
              $<span>{props.price}</span>
            </span>
            <button className="shop-item-button" type="button" onClick={props.onAddHandler}>
              ADD TO CART
            </button>
           </div>
          </div>
        </div>
  )
}

export default Items