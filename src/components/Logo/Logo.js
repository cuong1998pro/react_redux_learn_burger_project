import React from 'react';
import classes from './Logo.css';
import LogoPath from "../../assets/logo.jpg";

const Logo = props => (
    <div className={classes.Logo}>
        <img src={LogoPath} alt="My Burger"/>
    </div>
);

export default Logo;