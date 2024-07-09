import React from "react";
import arrowDown from "../../assets/icon/arrow-down.svg";
import filterEdit from "../../assets/icon/filter-edit.svg";
import Catalog from "../sub-component/Catalog";
import arrowLeft from "../../assets/icon/arrow-left.svg";
import arrowRight from "../../assets/icon/arrow-right.png";

export default function Products() {
  return (
    <section className="pt-5 px-4 px-sm-5">
      <div className="text-center">
        <h2 className="products-heading fw-bolder">Products Catalog</h2>
      </div>
      <div className="d-flex justify-content-between mt-3">
        <button
          type="submit"
          className="px-1 py-2 d-flex align-items-center products-search-btn"
        >
          Best Seller
          <span className="ms-1">
            <img className="arrow-down-icon" src={arrowDown} alt="" />
          </span>
        </button>
        <button
          type="submit"
          className="px-1 py-2 d-flex align-items-center products-filter-btn"
        >
          Filter
          <span className="ms-1">
            <img className="filter-edit-icon" src={filterEdit} alt="" />
          </span>
        </button>
      </div>
      <Catalog />
      <div className="d-flex justify-content-center my-5">
        <div aria-label="Page navigation example">
          <ul class="pagination">
            <li class="page-item me-3">
              <button
                class="page-link page-btn"
                type="button"
                aria-label="Previous"
              >
                <span aria-hidden="true">
                  <img src={arrowLeft} alt="" />
                </span>
              </button>
            </li>
            <li class="page-item me-3">
              <button class="page-link page-btn active-page" type="button">
                1
              </button>
            </li>
            <li class="page-item me-3">
              <button class="page-link page-btn" type="button">
                2
              </button>
            </li>
            <li class="page-item">
              <button class="page-link page-btn" type="button">
                <span aria-hidden="true">
                  <img src={arrowRight} alt="" />
                </span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
