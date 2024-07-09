import React from "react";
import data from "../../assets/data.json"; // Ensure the path is correct
import heart from "../../assets/icon/heart.svg";
import solarStarBold from "../../assets/icon/solar_star-bold.svg";
import solarStarGrey from "../../assets/icon/solar_star-grey.svg";

export default function Catalog() {
  return (
    <section>
      <div className="container mx-0 px-0">
        <div className="row">
          {data.map((product) => (
            <card className="col-6 col-sm-4 col-lg-3 mb-4" key={product.id}>
              <img
                className="product-img"
                src={product.image}
                alt={product.name}
              />
              <div className="card-body pt-3">
                <h4 className="product-name text-center">{product.name}</h4>
                <div className="product-rating-section d-flex justify-content-center">
                  {Array.from({ length: 5 }, (_, index) => (
                    <img
                      className="star-icon"
                      key={index}
                      src={
                        index < product.ratings ? solarStarBold : solarStarGrey
                      }
                      alt={
                        index < product.ratings ? "Filled star" : "Empty star"
                      }
                    />
                  ))}
                </div>
                <p className="product-price text-center mt-2">
                  {<span className="ms-1">₦</span>} {product.price}
                </p>
                <div className="d-flex justify-content-between">
                  <button
                    type="button"
                    className="add-to-cart-btn px-1 px-sm-2 py-1 text-center"
                  >
                    Add to Cart
                  </button>
                  <button type="button" className="like-btn px-2 py3">
                    <span>
                      <img
                        className="heart-icon"
                        src={heart}
                        alt="Heart icon"
                      />
                    </span>
                  </button>
                </div>
              </div>
            </card>
          ))}
        </div>
      </div>
    </section>
  );
}
