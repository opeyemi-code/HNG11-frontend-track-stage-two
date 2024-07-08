import React from "react";
import heroImg from "../../assets/images/pexels-bankole-ade-oni-2285063-7206287 1.png";

export default function HeroSection() {
  return (
    <section className="hero-section px-4 px-sm-5 d-flex flex-column flex-sm-row align-items-center pt-5 pt-sm-0">
      <div className="hero-content pb-4 pb-sm-0">
        <h2 className="hero-heading">Shade Your World in Style This Summer</h2>
        <p className="hero-description mt-4">
          Discover the perfect pair with us! We have amazing collection for this
          summer
        </p>
      </div>
      <div>
        <img
          className="hero-img"
          src={heroImg}
          alt="Potrait of a lady on dark shade"
        />
      </div>
    </section>
  );
}
