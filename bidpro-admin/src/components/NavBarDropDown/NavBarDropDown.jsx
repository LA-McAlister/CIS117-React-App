import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export const NavBarDropDown = ({ airlineName, bidTypesPath, pilotsPath }) => (
  <li className="nav-item dropdown d-inline-block">
    <a
      className="nav-link dropdown-toggle text-light"
      href="/"
      id="navbarDropdown"
      role="button"
      data-bs-toggle="dropdown"
      aria-expanded="false"
    >
      {airlineName}
    </a>
    <ul
      className="dropdown-menu dropdown-menu-end"
      aria-labelledby="navbarDropDown"
    >
      <li>
        <Link className="dropdown-item" to={bidTypesPath}>
          BidTypes
        </Link>
      </li>
      <li>
        <hr className="dropdown-divider" />
      </li>
      <Link className="dropdown-item" to={pilotsPath}>
        <li>Pilots</li>
      </Link>
    </ul>
  </li>
);

NavBarDropDown.propTypes = {
  bidTypesPath: PropTypes.number,
  pilotsPath: PropTypes.string,
  airlineName: PropTypes.string,
};
