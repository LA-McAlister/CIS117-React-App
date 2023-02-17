import React from "react";
import { Link } from "react-router-dom";
import { SimpleMathCalculator } from "../../../components/SimpleMathCalculator/SimpleMathCalculator";

export const FAPilots = () => {
  return (
    <div className="container">
      <div className="px-3">
        <div className="px-5">
          <h1 className="px-5">Simple Math Calculator</h1>
        </div>
      </div>
      <SimpleMathCalculator />
      <Link to="/">Home</Link>
    </div>
  );
};
