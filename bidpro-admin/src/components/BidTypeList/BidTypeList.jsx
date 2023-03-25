import React from "react";
import { BidType } from "../BidType/BidType";
import PropTypes from "prop-types";

/**
 *
 * View component that displays a list of all bids given to it via array
 *
 */

export function BidTypeList({ bids }) {
  return (
    <>
      <div className="row mb-2 fw-bold">
        <div className="col-1">ID</div>
        <div className="col-2">Bid Types</div>
        <div className="col-3 text-center">Status</div>
        <div className="col-2 text-center"># Bid Periods</div>
        <div className="col-2">Last Imported</div>
        <div className="col-2 text-end header-icons "></div>
      </div>
      <div>
        {bids.map((bid) => (
          <BidType
            id={bid.id}
            fleet={bid.fleet}
            seat={bid.seat}
            domicile={bid.domicile}
            status={bid.status}
            numBidPeriods={bid.numBidPeriods}
            importedOn={bid.importedOn}
          />
        ))}
      </div>
    </>
  );
}

BidTypeList.propTypes = {
  bids: PropTypes.array.isRequired,
};
