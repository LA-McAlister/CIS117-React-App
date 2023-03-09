import React from "react";
import { Pilot } from "./Pilot";

export default {
  title: "Components/Pilot",
  component: Pilot,
};

const Template = (args) => <Pilot {...args} />;

export const Default = Template.bind({});
Default.args = {
  id: "1",
  airline: "Rivera State 32/106",
  fleet: "737",
  seat: "CPT",
  domicile: "GEG",
  firstName: "John",
  lastName: "Smith",
  email: "goseahawks@outlook.com",
  areacode: "123",
  prefix: "456",
  suffix: "7890",
  address1: "795 Folsom Ave",
  address2: "Suite 600",
  city: "San Francisco",
  state: "CA",
  postalCode: "94107",
  photo: "john-smith.jpeg",
  socials: "Twitter, Inc.",
};
