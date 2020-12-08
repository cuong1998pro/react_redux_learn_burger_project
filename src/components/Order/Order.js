import React from "react";
import classes from "./Order.css";

const Order = (props) => {
  const ingredients = [];
  for (let ingredientName in props.ingredients) {
    ingredients.push({
      name: ingredientName,
      amount: props.ingredients[ingredientName],
    });
  }
  const ingredientOutput = ingredients.map((ig) => {
    return (
      <span
        key={ig.key}
        style={{
          textTransform: "capitalize",
          display: "inline-block",
          margin: "0 8px",
        }}
      >
        {ig.name} ({ig.amount}),
      </span>
    );
  });
  return (
    <div className={classes.Order}>
      <p>Ingredients: {ingredientOutput}</p>
      <p>
        Price: <strong>{props.price.toFixed(2)}$</strong>
      </p>
    </div>
  );
};

export default Order;
