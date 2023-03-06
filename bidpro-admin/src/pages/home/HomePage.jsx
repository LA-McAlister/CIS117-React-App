import React from "react";
import { Link } from "react-router-dom";

export const HomePage = () => {
  return (
    <div className="App">
      <h1>My CIS117 BidPro Admin App</h1>
      <ul>
        <li>
          <Link to="/american-airlines/bidtypes">
            American Airlines - BidTypes
          </Link>
        </li>
        <li>
          <Link to="/american-airlines/pilots">American Airlines - Pilots</Link>
        </li>
        <li>
          <Link to="/alaska-airlines/bidtypes">Alaska Airlines - BidTypes</Link>
        </li>
        <li>
          <Link to="/alaska-airlines/pilots">Alaska Airlines - Pilots</Link>
        </li>
        <li>
          <Link to="/frontier-airlines/bidtypes">
            Frontier Airlines - BidTypes
          </Link>
        </li>
        <li>
          <Link to="/frontier-airlines/pilots">Frontier Airlines - Pilots</Link>
        </li>
        <li>
          <Link to="/ups/bidtypes">UPS - BidTypes</Link>
        </li>
      </ul>
      <h2>Examples</h2>
      <ul>
        <li>
          <Link to="/example/forms">Forms</Link>
        </li>
      </ul>
    </div>
  );
};
