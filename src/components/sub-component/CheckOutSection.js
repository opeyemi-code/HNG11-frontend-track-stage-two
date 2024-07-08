import arrowRight from "../../assets/icon/arrow-right.png";
import { Link } from "react-router-dom";

export default function CheckOutSection() {
  return (
    <section className="d-flex flex-column flex-sm-row align-items-sm-center justify-content-sm-between checkout-section my-5 py-4 px-5 ">
      <div className="mb-3 mb-sm-0">
        <h3 className="checkout-heading">Choose Shipping Mode</h3>
        <div>
          <label htmlFor="door-step-delivery" className="d-block mb-2">
            <input
              className="check-box"
              type="checkbox"
              name="shipping-mode"
              id="door-step-delivery"
            />{" "}
            Door Step Delivery
          </label>
          <label htmlFor="store-pick-up-free" className="d-block">
            <input
              className="check-box"
              type="checkbox"
              name="shipping-mode"
              id="store-pick-up-free"
            />{" "}
            Store pick-up free
          </label>
        </div>
      </div>
      <div className="shipping-cost-section d-flex flex-column justify-content-sm-center">
        <div className="d-flex justify-content-between ">
          <h4>Sub total</h4>
          <h4>
            <span className="me-1">₦</span>
            45,000
          </h4>
        </div>
        <div className="d-flex justify-content-between">
          <h4>Shipping</h4>
          <h4>-</h4>
        </div>
        <div className="d-flex justify-content-between">
          <h4>Total</h4>
          <h4>
            <span className="me-1">₦</span>
            45,000
          </h4>
        </div>
        <button type="button" className="w-75 mx-auto checkout-btn mt-4">
          <Link
            className="text-decoration-none checkout-link"
            to="/ShippingAddress"
          >
            Checkout
            <span>
              <img className="arrow-right-icon" src={arrowRight} alt="" />
            </span>
          </Link>
        </button>
      </div>
    </section>
  );
}
