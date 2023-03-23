import React from "react";
import { BidTypeSliceView } from "../BidTypeSliceView/BidTypeSliceView";

export const BidTypeListSliceView = ({ bidTypes }) => {
  return (
    <div className="table-responsive">
      <section className="sliceTable flex-table">
        <div className="sliceHeader sliceRow flex-row header">
          <div className="sliceColumn flex-column">ID</div>
          <div className="sliceColumn flex-column">Bid Type</div>
          <div className="sliceColumn flex-column">Status</div>
          <div className="sliceColumn flex-column">#Bid Periods</div>
          <div className="sliceColumn flex-column">Last Import</div>
          <div className="sliceColumn flex-column">&nbsp;</div>
        </div>

        {bidTypes.map((bidType) => {
          return <BidTypeSliceView key={bidType.id} bidType={bidType} />;
        })}
      </section>
    </div>
  );
};
