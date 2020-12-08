import React from "react";
import classes from "./BuilderController.css";

const builderController = (props) => {
  return (
    <div className={classes.BuildControl}>
      <div className={classes.Label} style={{ textTransform: "capitalize" }}>
        {props.label}
      </div>
      <button
        className={classes.Less}
        disabled={props.disable}
        onClick={props.remove}
      >
        Less
      </button>
      <button className={classes.More} onClick={props.add}>
        More
      </button>
    </div>
  );
};

export default builderController;
