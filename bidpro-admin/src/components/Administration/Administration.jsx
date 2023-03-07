import React from "react";
import PropTypes from "prop-types";

/**
 * View component that displayes the administration header with a welcome message
 */

export function Administration({ name }) {
  return (
    <div className="col-6 col-lg-8">
      <h1 className="display-3">ADMINISTRATION</h1>
      <p className="lead">
        Hello {name}! A website dedicated to the administration of Airline data.
      </p>
    </div>
  );
}

Administration.propTypes = {
  name: PropTypes.string,
};
