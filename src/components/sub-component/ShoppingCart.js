import pinkyCircleGlasses from "../../assets/images/pink-circl-glasses.png";
import summerStylishGlasses from "../../assets/images/summer-stylish-glasses.png";
import { DashLg } from "react-bootstrap-icons";
import { PlusLg } from "react-bootstrap-icons";

export default function ShoppingCart() {
  return (
    <section>
      <ShoppingCartForBigScreen />
      <ShoppingCartForMObile />
    </section>
  );
}

function ShoppingCartForBigScreen() {
  return (
    <div className="d-none d-sm-block">
      <table className="w-100">
        <tr className="table-heading horizontal-rule">
          <th className="text-end fw-normal">Item&#40;s&#41;</th>
          <th className="pe-5 ps-2 fw-normal">Price</th>
          <th className="pe-5 ps-2 fw-normal">QTY</th>
          <th className="fw-normal ps-2">Total</th>
        </tr>
        <tr className="horizontal-rule">
          <td className="d-flex align-items-center">
            <span className="me-4">
              <img
                className="item-img"
                src={pinkyCircleGlasses}
                alt="Pink Cirle Glasses"
              />
            </span>
            <div>
              <h3 className="item-name">Pinky Circle Glasses</h3>
              <h5 className="item-description">
                <span className="fw-bold">Color: </span>
                Pink // <span className="fw-bold">Material:</span> Metal
              </h5>
            </div>
          </td>
          <td className="item-price">
            <span className="me-1">₦</span>
            15,000
          </td>
          <td className="d-flex align-items-center">
            <button type="button" className="decrement-btn px-1 py-2 btn">
              <DashLg />
            </button>
            <p className="item-qty px-1 py-2 mb-0 mx-3">1</p>
            <button type="button" className="increment-btn px-1 py-2 btn">
              <PlusLg />
            </button>
          </td>
          <td className="total">
            <span className="me-1">₦</span>
            15,000
          </td>
        </tr>
        <tr>
          <td className="d-flex align-items-center">
            <span className="me-4">
              <img
                className="item-img"
                src={summerStylishGlasses}
                alt="Summer Stylish Glasses"
              />
            </span>
            <div>
              <h3 className="item-name">Summer Stylish Glasses</h3>
              <h5 className="item-description">
                <span className="fw-bold">Color: </span>
                Orange // <span className="fw-bold">Material:</span> Plastic
              </h5>
            </div>
          </td>
          <td className="item-price">
            <span className="me-1">₦</span>
            15,000
          </td>
          <td className="d-flex align-items-center px-2 ">
            <button type="button" className="decrement-btn px-1 py-2 btn">
              <DashLg />
            </button>
            <p className="item-qty px-1 py-2 mb-0 mx-3">2</p>
            <button type="button" className="increment-btn px-1 py-2 btn">
              <PlusLg />
            </button>
          </td>
          <td className="total">
            <span className="me-1">₦</span>
            15,000
          </td>
        </tr>
      </table>
    </div>
  );
}

function ShoppingCartForMObile() {
  return (
    <div className="d-sm-none">
      <div className="d-flex">
        <div>
          <span className="me-4">
            <img
              className="item-img"
              src={pinkyCircleGlasses}
              alt="Pink Circle Glasses"
            />
          </span>
        </div>
        <div>
          <h3 className="item-name">Pinky Circle Glasses</h3>
          <h5 className="item-description">
            <span className="fw-bold">Color: </span>
            Pink // Material: Metal
          </h5>
          <h4 className="item-price">
            <span className="me-1">₦</span>
            15,000
          </h4>
          <div className="d-flex align-items-center px-2 ">
            <button type="button" className="decrement-btn px-1 py-2 btn">
              <DashLg />
            </button>
            <h4 className="item-qty px-1 py-2 mb-0 mx-3">1</h4>
            <button type="button" className="increment-btn px-1 py-2 btn">
              <PlusLg />
            </button>
          </div>
          <h4 className="total">
            <span className="me-1">₦</span>
            15,000
          </h4>
        </div>
      </div>
      <div className="d-flex">
        <div>
          <span className="me-4">
            <img
              className="item-img"
              src={summerStylishGlasses}
              alt="Summer Stylish Glasses"
            />
          </span>
        </div>
        <div>
          <h3 className="item-name">Summer Stylish Glasses</h3>
          <h5 className="item-description">
            <span className="fw-bold">Color: </span>
            Orange // Material: Plastic
          </h5>
          <h4 className="item-price">
            <span className="me-1">₦</span>
            15,000
          </h4>
          <div className="d-flex align-items-center px-2 ">
            <button type="button" className="decrement-btn px-1 py-2 btn">
              <DashLg />
            </button>
            <h4 className="item-qty px-1 py-2 mb-0 mx-3">2</h4>
            <button type="button" className="increment-btn px-1 py-2 btn">
              <PlusLg />
            </button>
          </div>
          <h4 className="total">
            <span className="me-1">₦</span>
            15,000
          </h4>
        </div>
      </div>
    </div>
  );
}
