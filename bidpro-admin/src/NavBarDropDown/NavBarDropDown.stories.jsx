import React from "react";
import { NavBarDropDown } from "./NavBarDropDown";
import { BrowserRouter as Router } from "react-router-dom";

export default {
  title: "Components/NavBarDropDown",
  component: NavBarDropDown,
};

const Template = (args) => <NavBarDropDown {...args} />;
export const ExampleWithNameAndLinks = Template.bind({});

ExampleWithNameAndLinks.args = {
  airlineName: "American Airlines",
  bidTypesPath: "/american-airlines/bidtypes",
  pilotsPath: "/american-airlines/pilots",
};
