import React from "react";
import NavigationItems from "../NavigationItems/NavigationItems";
import Logo from "../../Logo/Logo";
import classes from "./SideDraw.css";
import Backdrop from "../../UI/Backdrop/Backdrop";

const SideDraw = (props) => {
  let attachedClasses = [classes.SideDraw, classes.Close];
  if (props.open) {
    attachedClasses[1] = classes.Open;
  }
  return (
    <React.Fragment>
      <Backdrop closeModal={props.sideDrawClose} show={props.open}></Backdrop>
      <div className={attachedClasses.join(" ")}>
        <div style={{ height: "31%" }}>
          <Logo></Logo>
        </div>
        <nav>
          <NavigationItems isAuth={props.isAuth}></NavigationItems>
        </nav>
      </div>
    </React.Fragment>
  );
};

export default SideDraw;
