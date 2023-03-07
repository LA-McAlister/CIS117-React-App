import React from "react";
import { Airline } from "./Airline";

export default {
  title: "Components/Airline",
  component: Airline,
};

const Template = (args) => <Airline {...args} />;
export const ExampleWithNameAndLink = Template.bind({});

ExampleWithNameAndLink.args = {
  name: "American Airlines",
  path: "/american-airlines/bidtypes",
};
