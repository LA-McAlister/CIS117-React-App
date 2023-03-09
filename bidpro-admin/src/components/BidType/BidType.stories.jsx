import React from "react";
import { BidType } from "./BidType";

export default {
  title: "Components/BidType",
  component: BidType,
};

const Template = (args) => <BidType {...args} />;

export const Default = Template.bind({});
Default.args = {
  id: "1",
  fleet: "73G",
  seat: "CAPTAIN",
  domicile: "GEG",
  status: "1",
  numBidPeriods: "1",
  importedOn: "March 8 2023 6:50PM",
};
