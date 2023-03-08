import React from "react";
import PropType from "prop-types";

/**
 * View component that displays the navigation bar
 */

export function NavBar({ menus }) {
  return (
    <div>
      <ul className="p-2 navbar-nav mr-auto">
        {menus.map((menu) => (
          <div className="NavDropdown" key={menu.key} title={menu.airlineName}>
            <p>
              key={menu.id}
              airlineName={menu.airlineName}
              bidTypesPath={menu.bidTypesPath}
              pilotsPath={menu.pilotsPath}
            </p>
          </div>
        ))}
      </ul>
    </div>
  );
}

NavBar.propTypes = {
  menus: PropType.arrayOf(
    PropType.shape({
      id: PropType.string.isRequired,
      airlineName: PropType.string.isRequired,
      bidTypesPath: PropType.string.isRequired,
      pilotsPath: PropType.string.isRequired,
    })
  ),
};
