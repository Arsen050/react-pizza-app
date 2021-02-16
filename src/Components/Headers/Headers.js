import React from "react";
import { useSelector } from "react-redux";
import HeadersCart from "./HeadersCart.js";
import HeadersLogo from "./HeadersLogo.js";

function Headers() {
  const { totalCount, totalPrice } = useSelector(({ cart }) => cart);
  return (
    <div className="header">
      <div className="container">
        <HeadersLogo />
        <HeadersCart totalCount={totalCount} totalPrice={totalPrice} />
      </div>
    </div>
  );
}
export default Headers;
