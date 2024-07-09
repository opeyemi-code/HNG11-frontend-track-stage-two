import React from "react";

export default function PaymentMethodSection() {
  return (
    <div className="payment-method-section mt-5 px-3 px-sm-5 py-4 section-rounded d-flex d-sm-block flex-column align-items-center">
      <h3 className="payment-method-heading">Payment Method</h3>
      <div className="address-container">
        <input type="checkbox" id="address2" className="d-none" />
        <label htmlFor="address2" className="d-flex align-items-center">
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
            <p className="customer-name mb-0">Kathryn Murphy</p>
            <address className="mb-0">
              2464 Royal Ln. Mesa, New Jersey 45463
              <br />
              (308) 555-0121
            </address>
          </div>
        </label>
      </div>
      <button className="payment-method-btn d-block px-2 py-1 my-3">
        Change Payment Method
        <span className="ms-2">
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.23215 11.3866C2.87631 11.3866 2.54381 11.2641 2.30465 11.0366C2.00131 10.7508 1.85548 10.3191 1.90798 9.85245L2.12381 7.96245C2.16465 7.60661 2.38048 7.13411 2.63131 6.87745L7.42048 1.80828C8.61631 0.542447 9.86465 0.507447 11.1305 1.70328C12.3963 2.89911 12.4313 4.14745 11.2355 5.41328L6.44631 10.4824C6.20131 10.7449 5.74631 10.9899 5.39048 11.0483L3.51215 11.3691C3.41298 11.3749 3.32548 11.3866 3.23215 11.3866ZM9.29298 1.69745C8.84381 1.69745 8.45298 1.97745 8.05631 2.39745L3.26715 7.47245C3.15048 7.59495 3.01631 7.88661 2.99298 8.05578L2.77715 9.94578C2.75381 10.1383 2.80048 10.2958 2.90548 10.3949C3.01048 10.4941 3.16798 10.5291 3.36048 10.4999L5.23881 10.1791C5.40798 10.1499 5.68798 9.99828 5.80465 9.87578L10.5938 4.80661C11.3171 4.03661 11.5796 3.32495 10.5238 2.33328C10.0571 1.88411 9.65465 1.69745 9.29298 1.69745Z"
              fill="#292D32"
            />
            <path
              d="M10.1146 6.38745C10.1029 6.38745 10.0854 6.38745 10.0738 6.38745C8.25377 6.20662 6.7896 4.82412 6.5096 3.01579C6.4746 2.77662 6.63794 2.55495 6.8771 2.51412C7.11627 2.47912 7.33794 2.64245 7.37877 2.88162C7.60044 4.29329 8.74377 5.37829 10.1671 5.51829C10.4063 5.54162 10.5813 5.75745 10.5579 5.99662C10.5288 6.21829 10.3363 6.38745 10.1146 6.38745Z"
              fill="#292D32"
            />
            <path
              d="M12.25 13.2709H1.75C1.51083 13.2709 1.3125 13.0725 1.3125 12.8334C1.3125 12.5942 1.51083 12.3959 1.75 12.3959H12.25C12.4892 12.3959 12.6875 12.5942 12.6875 12.8334C12.6875 13.0725 12.4892 13.2709 12.25 13.2709Z"
              fill="#292D32"
            />
          </svg>
        </span>
      </button>
    </div>
  );
}
