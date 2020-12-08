import React from "react";
import classes from "./Burger.css";
import BugerIngredient from "./BurgerIngredient/BurgerIngredient";

const burger = (props) => {
  let transformIngredient = Object.keys(props.ingredients)
    .map((igkey) =>
      [...Array(props.ingredients[igkey])].map((item, index) => (
        <BugerIngredient ingredientType={igkey} key={igkey + index} />
      ))
    )
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);
    
  if (transformIngredient.length === 0) {
    transformIngredient = <p>Hãy thêm nguyên liệu vào bánh</p>;
  }
  return (
    <div className={classes.Burger}>
      <BugerIngredient ingredientType="bread-top" />
      {transformIngredient}
      <BugerIngredient ingredientType="bread-bottom" />
    </div>
  );
};

export default burger;
