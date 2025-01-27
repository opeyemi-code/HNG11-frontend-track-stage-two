import { Link } from "react-router-dom";
import "../../styles/previewOrder.css";

import React from "react";

export default function ShippingAddress() {
  return (
    <div className="shipping-address-section section-rounded px-5 py-4 d-flex flex-column align-items-center">
      <h3 className="fw-bolder">Shipping Address</h3>
      <div>
        <div className="d-flex flex-column flex-sm-row justify-content-between align-items-sm-center">
          <div className="address-container">
            <input type="checkbox" id="address" className="d-none" />
            <label htmlFor="address">
              <div className="d-flex align-items-center mb-3">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="12" cy="12" r="12" fill="#00C853" />
                  <path
                    d="M10 13.5L7.5 11L6.66667 11.8333L10 15.1667L17.3333 7.83333L16.5 7L10 13.5Z"
                    fill="white"
                  />
                </svg>
                <div className="ms-3">
                  <h4 className="customer-name mb-0">Kathryn Murphy</h4>
                  <address className="mb-0">
                    2464 Royal Ln. Mesa, New Jersey 45463
                    <br />
                    (308) 555-0121
                  </address>
                </div>
              </div>
            </label>
          </div>
          <div className="ms-4">
            <h4 className="mb-3">
              <span className="d-sm-none">Total: </span>₦ 2,000
            </h4>
          </div>
        </div>
        <button className="shipping-address-btn px-1 px-sm-2 my-3">
          <Link className="text-decoration-none" to="/ChangeShpinngAddress">
            Change Shipping Address
            <span className="ms-2">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.53999 19.5201C4.92999 19.5201 4.35999 19.31 3.94999 18.92C3.42999 18.43 3.17999 17.69 3.26999 16.89L3.63999 13.65C3.70999 13.04 4.07999 12.23 4.50999 11.79L12.72 3.10005C14.77 0.930049 16.91 0.870049 19.08 2.92005C21.25 4.97005 21.31 7.11005 19.26 9.28005L11.05 17.97C10.63 18.42 9.84999 18.84 9.23999 18.9401L6.01999 19.49C5.84999 19.5 5.69999 19.5201 5.53999 19.5201ZM15.93 2.91005C15.16 2.91005 14.49 3.39005 13.81 4.11005L5.59999 12.8101C5.39999 13.0201 5.16999 13.5201 5.12999 13.8101L4.75999 17.05C4.71999 17.38 4.79999 17.65 4.97999 17.82C5.15999 17.99 5.42999 18.05 5.75999 18L8.97999 17.4501C9.26999 17.4001 9.74999 17.14 9.94999 16.93L18.16 8.24005C19.4 6.92005 19.85 5.70005 18.04 4.00005C17.24 3.23005 16.55 2.91005 15.93 2.91005Z"
                  fill="#3A3A3A"
                />
                <path
                  d="M17.3399 10.95C17.3199 10.95 17.2899 10.95 17.2699 10.95C14.1499 10.64 11.6399 8.26997 11.1599 5.16997C11.0999 4.75997 11.3799 4.37997 11.7899 4.30997C12.1999 4.24997 12.5799 4.52997 12.6499 4.93997C13.0299 7.35997 14.9899 9.21997 17.4299 9.45997C17.8399 9.49997 18.1399 9.86997 18.0999 10.28C18.0499 10.66 17.7199 10.95 17.3399 10.95Z"
                  fill="#292D32"
                />
                <path
                  d="M21 22.75H3C2.59 22.75 2.25 22.41 2.25 22C2.25 21.59 2.59 21.25 3 21.25H21C21.41 21.25 21.75 21.59 21.75 22C21.75 22.41 21.41 22.75 21 22.75Z"
                  fill="#292D32"
                />
              </svg>
            </span>
          </Link>
        </button>
      </div>
    </div>
  );
}
