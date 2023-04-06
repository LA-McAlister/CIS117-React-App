import React from "react";
import { Link } from "react-router-dom";
import { SimpleMathCalculator } from "../../../components/SimpleMathCalculator/SimpleMathCalculator";

export const FAPilots = () => {
  return (
    <div className="container justify-center">
      <div className="simpleRow flex-row justify-content-center">
        <h1 className=" px-5">Simple Math Calculator</h1>
      </div>
      <SimpleMathCalculator />
      <Link to="/">Home</Link>
    </div>
  );
};
