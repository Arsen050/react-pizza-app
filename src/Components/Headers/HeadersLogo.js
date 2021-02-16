import React from "react";
import logo from "../../img/pizza-logo.svg";
import {Link} from "react-router-dom";
function HeadersLogo() {
  return <Link to='/'>
    <div className="header__logo">
      <img width="38" src={logo} alt="Pizza logo" />
      <div>
        <h1>React Pizza</h1>
        <p>самая вкусная пицца во вселенной</p>
      </div>
    </div>
  </Link>

}
export  default  HeadersLogo;