import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

/**
 * Interactive component that displays a navigational drop down menu
 */

export function NavBarDropDown({ bidTypesPath, pilotsPath }) {
  return (
    <>
      <div className="NavDropdown.Item">
        <Link className="dropdown-item" to={bidTypesPath}>
          Bid Types
        </Link>
      </div>
      <div className="NavDropdown.Item">
        <Link className="dropdown-item" to={pilotsPath}>
          Pilots
        </Link>
      </div>
    </>
  );
}

NavBarDropDown.propTypes = {
  //airlineName: PropTypes.string.isRequired,
  bidTypesPath: PropTypes.string.isRequired,
  pilotsPath: PropTypes.string.isRequired,
};
