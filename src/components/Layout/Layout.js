import React from "react";
import classes from "./Layout.css";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideDraw from "../Navigation/SideDraw/SideDraw";
import { Component } from "react";
import { connect } from "react-redux";

class Layout extends Component {
  state = {
    showSideDrawer: false,
  };
  sideDrawerCloseHandler = () => {
    this.setState({ showSideDrawer: false });
  };

  drawToggleClick = () => {
    this.setState((prevState) => {
      return { showSideDrawer: !prevState.showSideDrawer };
    });
  };

  render() {
    return (
      <React.Fragment>
        <Toolbar
          isAuth={this.props.isAuthenticated}
          drawToggleClick={this.drawToggleClick}
        ></Toolbar>
        <SideDraw
          isAuth={this.props.isAuthenticated}
          sideDrawClose={this.sideDrawerCloseHandler}
          open={this.state.showSideDrawer}
        ></SideDraw>
        <main className={classes.Content}>{this.props.children}</main>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.token !== null,
  };
};

export default connect(mapStateToProps)(Layout);
