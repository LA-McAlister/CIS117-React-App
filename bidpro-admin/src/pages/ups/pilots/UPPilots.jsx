import React from "react";
import { Link } from "react-router-dom";
import SimpleMathResults from "../../../components/SimpleMathResults";
import { selectMathResults } from "../../../redux/mathSlice";

export const UPPilots = () => {
  return (
    <div className="container">
      <h1>UPS - Pilots</h1>
      <SimpleMathResults mathResults={selectMathResults} />
      <Link to="/">Home</Link>
    </div>
  );
};
