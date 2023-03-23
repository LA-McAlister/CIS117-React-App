import React from "react";

export const BidTypeSliceView = ({
  bidType: { id, fleet, seat, domicile, status, numOfBidPeriods, lastImported },
}) => (
  <div>
    <div className="sliceRow flex-row">
      <div className="sliceColumn flex-column">{id}</div>
      <div className="sliceColumn flex-column">
        {seat} {fleet} {domicile}
      </div>
      <div className="sliceColumn flex-column">{status}</div>
      <div className="sliceColumn flex-column">{numOfBidPeriods}</div>
      <div className="sliceColumn flex-column">{lastImported}</div>
      <div className="sliceColumn flex-column">
        <button classname="btn btn-primary btn-small btn-block">Import</button>
      </div>
    </div>
  </div>
);
