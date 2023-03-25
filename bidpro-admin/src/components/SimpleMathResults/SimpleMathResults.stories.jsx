import React from "react";
import { SimpleMathResults } from "./SimpleMathResults";
import { Provider } from "react-redux";

const store = {
  getState: () => {
    return {
      mathResults: [],
    };
  },
  subscribe: () => 0,
};

export default {
  title: "Components/SimpleMathResults",
  component: SimpleMathResults,
};

const Template = (args) => (
  <Provider store={store}>
    <SimpleMathResults {...args} />
  </Provider>
);

export const Default = Template.bind({});
Default.args = {
  mathResult: {
    numberOne: 2,
    operator: "+",
    numberTwo: 2,
    answer: 4,
  },
};
