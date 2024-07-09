import React from "react";
import { Link } from "react-router-dom";
import "../styles/previewOrder.css";
import { CheckoutHeader } from "./ChangeShippingAddress";
import ShoppingCart from "./sub-component/ShoppingCart";
import ShippingAddress from "./sub-component/ShippingAddress";
import PaymentMethodSection from "./sub-component/PaymentMethodSection";
import CheckOutSection from "./sub-component/CheckOutSection";

export default function ReviewOrder() {
  return (
    <>
      <CheckoutHeader />
      <main className="px-3 px-sm-5">
        <div className="d-flex justify-content-between mt-5">
          <h2 className="preview-order-heading">Preview Order</h2>
          <button type="button" className="back-to-cart-btn px-2 py-1">
            <Link className="back-to-cart-link text-decoration-none" to="/cart">
              <span className="back-to-cart-icon me-2">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.9998 20.67C14.8098 20.67 14.6198 20.6 14.4698 20.45L7.94979 13.93C6.88979 12.87 6.88979 11.13 7.94979 10.07L14.4698 3.55002C14.7598 3.26002 15.2398 3.26002 15.5298 3.55002C15.8198 3.84002 15.8198 4.32002 15.5298 4.61002L9.00979 11.13C8.52979 11.61 8.52979 12.39 9.00979 12.87L15.5298 19.39C15.8198 19.68 15.8198 20.16 15.5298 20.45C15.3798 20.59 15.1898 20.67 14.9998 20.67Z"
                    fill="#3A3A3A"
                  />
                </svg>
              </span>
              Back to cart
            </Link>
          </button>
        </div>
        <ShoppingCart />
        <section>
          <ShippingAddress />
          <PaymentMethodSection />
          <CheckOutSection shippingFee="₦ 2000" link="" />
        </section>
      </main>
    </>
  );
}
