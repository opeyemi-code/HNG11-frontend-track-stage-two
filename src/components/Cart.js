import React from "react";
import "../styles/cart.css";
import { Link } from "react-router-dom";
import Header from "./sub-component/Header";
import ShoppingCart from "./sub-component/ShoppingCart";
import CheckOutSection from "./sub-component/CheckOutSection";
import arrowLeft from "../assets/icon/arrow-left.svg";

export default function Cart() {
  return (
    <>
      <Header />
      <main className="px-sm-5 px-3">
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <h2 className="cart-heading fw-bolder">My Cart</h2>
          </div>
          <button
            type="button"
            className="btn continue-shopping-btn d-flex align-items-center"
          >
            <Link
              to="/#produts"
              className="text-decoration-none continue-shopping-link"
            >
              <span>
                <img className="arrow-left-icon" src={arrowLeft} alt="" />
              </span>
              Continue Shopping
            </Link>
          </button>
        </div>
        <ShoppingCart />
        <CheckOutSection shippingFee="-" link="/PreviewOrder" />
      </main>
    </>
  );
}
