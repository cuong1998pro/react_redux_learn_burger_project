import React from "react";
import classes from "./Toolbar.css";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import DrawToggle from "../SideDraw/DrawToggle/DrawToggle";

const Toolbar = (props) => (
  <header className={classes.Toolbar}>
    <DrawToggle click={props.drawToggleClick}></DrawToggle>
    <Logo></Logo>
    <nav className={classes.DesktopOnly}>
      <NavigationItems isAuth={props.isAuth}></NavigationItems>
    </nav>
  </header>
);

export default Toolbar;
