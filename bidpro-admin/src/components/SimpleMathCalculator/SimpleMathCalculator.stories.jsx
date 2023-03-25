import React from "react";
import { SimpleMathCalculator } from "./SimpleMathCalculator";
import { Provider } from "react-redux";

export default {
  title: "Components/SimpleMathCalculator",
  component: SimpleMathCalculator,
};

const store = {
  getState: () => {
    return {
      mathResults: [],
    };
  },
  subscribe: () => 0,
};

const Template = (args) => (
  <Provider store={store}>
    <SimpleMathCalculator {...args} />
  </Provider>
);

export const Default = Template.bind({});
Default.args = {
  mathResults: [
    {
      numberOne: 2,
      operator: "+",
      numberTwo: 2,
      answer: 4,
    },
    {
      numberOne: 2,
      operator: "-",
      numberTwo: 2,
      answer: 0,
    },
    {
      numberOne: 2,
      operator: "*",
      numberTwo: 2,
      answer: 4,
    },
    {
      numberOne: 2,
      operator: "/",
      numberTwo: 2,
      answer: 1,
    },
    {
      numberOne: 2,
      operator: "%",
      numberTwo: 2,
      answer: 0,
    },
  ],
};
