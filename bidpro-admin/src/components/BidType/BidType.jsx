import React from "react";
import PropTypes from "prop-types";

/**
 *
 * View component that displays one bid type.
 *
 */

export function BidType({
  id,
  fleet,
  seat,
  domicile,
  status,
  numBidPeriods,
  importedOn,
}) {
  return (
    <div className="row align-items-center bid-table">
      <hr className="bids-seperator" />
      <div className="col-1">{id}</div>
      <div className="col-2">
        {seat} {domicile} {fleet}
      </div>
      <div className="col-3 text-center">
        {status === 1 ? <p>Non-Current</p> : <p>Current</p>}
      </div>
      <div className="col-2 text-center">{numBidPeriods}</div>
      <div className="col-2">{importedOn}</div>
      <div className="col-2">
        <button className="bid-type col-12 btn btn-danger my-1">
          Retry Import
        </button>
        <button className="bid-type col-12 btn btn-danger my-1">
          Bid Periods
        </button>
        <button className="bid-type col-12 btn btn-danger my-1">
          Import History
        </button>
        <button className="col-12 btn btn-danger my-1">Delete</button>
      </div>
    </div>
  );
}

BidType.propTypes = {
  id: PropTypes.number,
  airline: PropTypes.string,
  fleet: PropTypes.string,
  seat: PropTypes.string,
  domicile: PropTypes.string,
  status: PropTypes.number,
  numBidPeriods: PropTypes.number,
  importedOn: PropTypes.string,
};
