import React from "react";
import loading from "../assets/loading.svg";

const LoadingSpinner = () => (
  <div className="centeredPage">
    <h3>Loading</h3>
    <img src={loading} alt="Loading" />
  </div>
);

export default LoadingSpinner;
