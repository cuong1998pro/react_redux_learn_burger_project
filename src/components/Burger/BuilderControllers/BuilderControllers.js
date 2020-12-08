import React from "react";
import BuilderController from "./BuilderController/BuilderController";
import classes from "./BuilderControllers.css";

const builderControllers = (props) => {
  const controls = ["salad", "bacon", "cheese", "meat"];
  return (
    <div className={classes.BuilderControllers}>
      <p>
        <b>Total price: {props.totalPrice.toFixed(2)}</b>
      </p>
      {controls.map((item) => (
        <BuilderController
          add={() => props.add(item)}
          remove={() => props.remove(item)}
          label={item}
          key={item}
          disable={props.disableInfo[item]}
        />
      ))}
      <button
        disabled={!props.purchasable}
        onClick={() => props.updatePurchasingHandler(true)}
      >
        {props.isAuth ? "Order Now" : "SIGN UP TO ORDER"}
      </button>
    </div>
  );
};

export default builderControllers;
