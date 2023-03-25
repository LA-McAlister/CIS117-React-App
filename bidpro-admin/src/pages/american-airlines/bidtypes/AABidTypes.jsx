import React from "react";
import { Link } from "react-router-dom";
import { BidTypeListSliceView } from "../../../components/BidTypeListSliceView/BidTypeListSliceView";

export const AABidTypes = () => {
  return (
    <div className="container">
      <h1>American Airlines - BidTypes</h1>
      <BidTypeListSliceView airline="AA" bidTypes={[]} />
      <Link to="/">Home</Link>
    </div>
  );
};
