import React from "react";
import classes from "./Modal.css";
import Backdrop from "../Backdrop/Backdrop";

const modal = (props) => {
  return (
    <React.Fragment>
      <Backdrop show={props.enable} closeModal={props.closeModal}></Backdrop>
      <div
        className={classes.Modal}
        style={{
          transform: props.enable ? "translateY(0)" : "translateY(-100vh)",
        }}
      >
        {props.children}
      </div>
    </React.Fragment>
  );
};

export default modal;
