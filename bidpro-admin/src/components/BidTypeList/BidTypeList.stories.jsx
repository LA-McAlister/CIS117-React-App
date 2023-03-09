import React from "react";
import { BidTypeList } from "./BidTypeList";

export default {
  title: "Components/BidTypeList",
  component: BidTypeList,
};

const Template = (args) => <BidTypeList {...args} />;

export const Default = Template.bind({});
Default.args = {
  bids: [
    {
      id: "1",
      fleet: "73G",
      seat: "CAPTAIN",
      domicile: "ANC",
      status: "1",
      numBidPeriods: "1",
      importedOn: "March 8 2023 6:50PM",
    },
    {
      id: "2",
      fleet: "73G",
      seat: "CAPTAIN",
      domicile: "LAX",
      status: "1",
      numBidPeriods: "1",
      importedOn: "March 8 2023 6:50PM",
    },
    {
      id: "3",
      fleet: "73G",
      seat: "CAPTAIN",
      domicile: "PDX",
      status: "1",
      numBidPeriods: "1",
      importedOn: "March 8 2023 6:50PM",
    },
    {
      id: "4",
      fleet: "73G",
      seat: "CAPTAIN",
      domicile: "SEA",
      status: "1",
      numBidPeriods: "1",
      importedOn: "March 8 2023 6:50PM",
    },
    {
      id: "5",
      fleet: "73G",
      seat: "CAPTAIN",
      domicile: "ANC",
      status: "1",
      numBidPeriods: "1",
      importedOn: "March 8 2023 6:50PM",
    },
    {
      id: "6",
      fleet: "73G",
      seat: "CAPTAIN",
      domicile: "LAX",
      status: "1",
      numBidPeriods: "1",
      importedOn: "March 8 2023 6:50PM",
    },
  ],
};
