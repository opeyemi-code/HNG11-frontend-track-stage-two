import React from "react";
import "../../styles/stepIndicator.css"; // CSS file for styling

const StepIndicator = ({ currentStep }) => {
  return (
    <div className="step-indicator">
      <div
        className={`step ${currentStep >= 1 ? "completed checked-step" : ""}`}
      >
        <span className="step-icon">{currentStep === 1 ? "✔" : ""}</span>
        <span className="step-label">Shipping</span>
      </div>
      <div
        className={`step ${currentStep >= 2 ? "completed checked-step" : ""}`}
      >
        <span className="step-icon">{currentStep === 2 ? "✔" : ""}</span>
        <span className="step-label">Payment</span>
      </div>
      <div className={`step ${currentStep >= 3 ? "completed" : ""}`}>
        <span className="step-icon">{currentStep === 3 ? "✔" : ""}</span>
        <span className="step-label">Review</span>
      </div>
    </div>
  );
};

export default StepIndicator;
