import React from "react";
import { Link } from "react-router-dom";
import { HelloNameSelection } from "../../../components/HelloNameSelection/HelloNameSelection";

export const FABidTypes = () => {
  return (
    <div className="container">
      <h1>Frontier Airlines - BidTypes</h1>
      <HelloNameSelection />
      <Link to="/">Home</Link>
    </div>
  );
};
