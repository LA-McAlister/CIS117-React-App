import React from "react";

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
