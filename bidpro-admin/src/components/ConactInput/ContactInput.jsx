import React, { useState } from "react";
import PropTypes from "prop-types";

export const ContactInput = ({ addContact }) => {
  /**
   * Javascript
   */

  const [contactInfo, setContactInfo] = useState({
    name: "",
    email: "",
    phonenumber: "",
  });

  const handleChange = (event) => {
    setContactInfo({ ...contactInfo, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addContact(contactInfo);
  };

  return (
    <div className="form-group">
      <form onSubmit={handleSubmit}>
        <div>
          <h3>Contact Form</h3>
        </div>
        <div className="mt-1">
          <input
            type="text"
            placeholder="Name"
            className="form-control"
            name="name"
            value={contactInfo.name}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="mt-1">
          <input
            type="email"
            placeholder="Email"
            className="form-control"
            name="email"
            value={contactInfo.email}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="mt-1">
          <input
            type="number"
            placeholder="Phone Number"
            className="form-control"
            name="phonenumber"
            value={contactInfo.phonenumber}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="mt-1">
          <button className="btn btn-primary">Submit Contact</button>
        </div>
      </form>
    </div>
  );
};

ContactInput.propTypes = {
  firstName: PropTypes.number,
  lastName: PropTypes.string,
  email: PropTypes.string,
  areacode: PropTypes.string,
  prefix: PropTypes.string,
  suffix: PropTypes.string,
};
