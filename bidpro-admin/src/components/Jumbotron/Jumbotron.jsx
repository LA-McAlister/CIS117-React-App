import React from "react";
import PropTypes from "prop-types";
/**
 * View component that displays a jumbotron
 */

export function Jumbotron({ administration, version }) {
  return (
    <div className="row jumbotron mt-3">
      {administration}
      {version}
    </div>
  );
}

Jumbotron.propTypes = {
  administration: PropTypes.element,
  version: PropTypes.element,
};
