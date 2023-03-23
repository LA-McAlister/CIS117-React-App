import React from "react";
import { BidTypeListSliceView } from "./BidTypeListSliceView";

export default {
  title: "Components/BidTypeListSliceView",
  component: BidTypeListSliceView,
};

const Template = (args) => <BidTypeListSliceView {...args} />;
export const Default = Template.bind({});
Default.args = {
  bidTypes: [
    {
      id: 1,
      airline: "AA",
      seat: "CAPTAIN",
      fleet: "73G",
      domicile: "SEA",
      status: "CURRENT",
      numOfBidPeriods: 3,
      lastImported: new Date().toDateString(),
    },
    {
      id: 2,
      airline: "AA",
      seat: "CAPTAIN",
      fleet: "73G",
      domicile: "GEG",
      status: "CURRENT",
      numOfBidPeriods: 2,
      lastImported: new Date().toDateString(),
    },
  ],
};
