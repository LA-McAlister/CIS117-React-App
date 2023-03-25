import React from "react";
import { BidTypeListSliceView } from "./BidTypeListSliceView";
import { Provider } from "react-redux";

export default {
  title: "Components/BidTypeListSliceView",
  component: BidTypeListSliceView,
};

//Mock up our Redux store

const store = {
  getState: () => {
    return {
      bidTypes: [],
    };
  },
  subscribe: () => 0,
};

const Template = (args) => (
  <Provider store={store}>
    <BidTypeListSliceView {...args} />
  </Provider>
);
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
