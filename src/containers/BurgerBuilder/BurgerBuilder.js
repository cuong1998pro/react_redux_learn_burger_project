import React, { Component } from "react";
import Burger from "../../components/Burger/Burger";
import BuilderControllers from "../../components/Burger/BuilderControllers/BuilderControllers";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
import Spiner from "../../components/UI/Spiner/Spiner";
import withErrorHandler from "../../hoc/widthErrorHandler/withErrorHandler";
import { connect } from "react-redux";
import * as burgerBuilderActions from "../../store/actions/index";
import axios from "../../axios-orders";

class BurgerBuilder extends Component {
  state = {
    purchasing: false,
  };

  componentDidMount() {
    this.props.onInitIngredients();
  }

  updatePuchasableHandler = (ingredients) => {
    const sum = Object.keys(ingredients)
      .map((igkey) => ingredients[igkey])
      .reduce((sum, item) => sum + item, 0);
    return sum > 0;
  };

  updatePurchasingHandler = (value) => {
    if (value && this.props.isAuth) {
      this.setState({ purchasing: true });
      return;
    } else {
      if (value) {
        this.props.onSetRedirectPath("/checkout");
        this.props.history.push("/auth");
      }
    }

    this.setState({ purchasing: value });
  };

  continuePurchaseHandler = () => {
    this.props.onInitPurchase();
    this.props.history.push("/checkout");
  };

  render() {
    let disableInfo = { ...this.props.ings };

    for (let item in disableInfo) {
      disableInfo[item] = disableInfo[item] === 0;
    }
    let orderSummary = null;

    let burger = this.props.error ? (
      <p style={{ fontSize: "900px" }}>Lỗi server hãy thử lại sau!</p>
    ) : (
      <Spiner />
    );
    if (this.props.ings) {
      burger = (
        <React.Fragment>
          <Burger ingredients={this.props.ings} />
          <BuilderControllers
            add={this.props.onIngredientAdded}
            remove={this.props.onIngredientRemove}
            disableInfo={disableInfo}
            totalPrice={this.props.price}
            purchasable={this.updatePuchasableHandler(this.props.ings)}
            updatePurchasingHandler={this.updatePurchasingHandler}
            isAuth={this.props.isAuth}
          />
        </React.Fragment>
      );
      orderSummary = (
        <OrderSummary
          ingredients={this.props.ings}
          price={this.props.price.toFixed(2)}
          continuePurchase={this.continuePurchaseHandler}
          close={() => this.updatePurchasingHandler(false)}
        ></OrderSummary>
      );
    }

    return (
      <React.Fragment>
        <Modal
          enable={this.state.purchasing}
          closeModal={() => this.updatePurchasingHandler(false)}
        >
          {orderSummary}
        </Modal>
        {burger}
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ings: state.burgerBuilder.ingredients,
    price: state.burgerBuilder.totalPrice,
    error: state.burgerBuilder.error,
    isAuth: state.auth.token !== null,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onIngredientAdded: (ingName) =>
      dispatch(burgerBuilderActions.addIngredient(ingName)),
    onIngredientRemove: (ingName) =>
      dispatch(burgerBuilderActions.removeIngredient(ingName)),
    onInitIngredients: () => dispatch(burgerBuilderActions.initIngredient()),
    onInitPurchase: () => dispatch(burgerBuilderActions.purchaseInit()),
    onSetRedirectPath: (path) =>
      dispatch(burgerBuilderActions.setAuthRedirectPath(path)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withErrorHandler(BurgerBuilder, axios));
