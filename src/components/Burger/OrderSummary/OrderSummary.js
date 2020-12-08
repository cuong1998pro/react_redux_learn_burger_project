import React from "react";
import Button from '../../UI/Button/Button';

const OrderSummary = (props) => {
  let ingredientSummary = Object.keys(props.ingredients).map((igKey) => (
      <li style={{ textTransform: "capitalize" }}>{igKey}: {props.ingredients[igKey]}</li>
  ));
    
  return (
    <React.Fragment>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingradient</p>
      <ul>{ingredientSummary}</ul>
      <p><strong>Total Price: {props.price} </strong></p>
      <Button btnType='Danger' click={props.close}>Cancel</Button>
      <Button btnType='Success' click={props.continuePurchase}>Continue</Button>
      
    </React.Fragment>
  );
};

export default OrderSummary;
