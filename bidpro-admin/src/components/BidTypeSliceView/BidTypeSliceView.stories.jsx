import React from "react";

import { BidTypeSliceView } from "./BidTypeSliceView";

export default {
  title: "Components/BidTypeSliceView",
  component: BidTypeSliceView,
};

const Template = (args) => <BidTypeSliceView {...args} />;
export const Default = Template.bind({});
Default.args = {
  bidType: {
    id: 1,
    airline: "AA",
    seat: "CAPTAIN",
    fleet: "73G",
    domicile: "SEA",
    status: "CURRENT",
    numOfBidPeriods: 3,
    lastImported: new Date().toDateString(),
  },
};
