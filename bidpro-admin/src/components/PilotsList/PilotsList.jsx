import React from "react";
import PropTypes from "prop-types";
import { Pilot } from "../Pilot/Pilot";

/**
 *
 * View component that displays the profiles of all the pilots passed to it as an array.
 *
 */

export function PilotsList({ pilots }) {
  console.log(pilots);
  return (
    <div className="list-bg px-3">
      <div className="container">
        {pilots.map((pilot) => (
          <Pilot
            id={pilot.id}
            airline={pilot.airline}
            fleet={pilot.fleet}
            seat={pilot.seat}
            domicile={pilot.domicile}
            firstName={pilot.firstName}
            lastName={pilot.lastName}
            email={pilot.email}
            areacode={pilot.areacode}
            prefix={pilot.prefix}
            suffix={pilot.suffix}
            address1={pilot.address1}
            address2={pilot.address2}
            city={pilot.city}
            state={pilot.state}
            postalCode={pilot.postalCode}
            photo={pilot.photo}
            socials={pilot.socials}
          />
        ))}
      </div>
    </div>
  );
}

PilotsList.defaultProps = {
  pilots: [{}],
};
