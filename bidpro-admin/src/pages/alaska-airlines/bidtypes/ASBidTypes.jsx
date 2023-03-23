import React from "react";
import { Link } from "react-router-dom";
import { BidTypeListSliceView } from "../../../components/BidTypeListSliceView/BidTypeListSliceView";

export const ASBidTypes = () => {
  return (
    <div className="container">
      <h1>Alaska Airlines - BidTypes</h1>
      <BidTypeListSliceView bidTypes={[]} />
      <Link to="/">Home</Link>
    </div>
  );
};
