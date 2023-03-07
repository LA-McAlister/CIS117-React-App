import React from "react";
import { Administration } from "./Administration";

export default {
  title: "Components/Administration",
  component: Administration,
};

const Template = (args) => <Administration {...args} />;
export const ExampleWithName = Template.bind({});
ExampleWithName.args = {
  name: "Lillie McAlister",
};
