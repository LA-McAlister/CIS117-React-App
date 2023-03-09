import React from "react";
import PropTypes from "prop-types";

export const ContactOutput = ({ contact }) => {
  return (
    <div className={contact ? "card mt-3" : ""}>
      <p>{contact ? contact.name : ""}</p>
      <p>{contact ? contact.email : ""}</p>
      <p>{contact ? contact.phonenumber : ""}</p>
    </div>
  );
};

ContactOutput.propTypes = {
  firstName: PropTypes.number,
  lastName: PropTypes.string,
  email: PropTypes.string,
  areacode: PropTypes.string,
  prefix: PropTypes.string,
  suffix: PropTypes.string,
};
