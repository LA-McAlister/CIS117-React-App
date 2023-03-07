import React from "react";
import { Header } from "./../../components/Header/Header";
import { Administration } from "./../../components/Administration/Administration";
import { Version } from "../../components/Version/Version";
import { Footer } from "../../components/Footer/Footer";
import { Airline } from "../../components/Airline/Airline";

/**
 *
 * Structural component that displays the home page.
 *
 */

const HomePage = () => (
  <div>
    <Header />
    <div className="jumbotron d-flex align-items-stretch mx-5 pt-2 pb-0">
      <Administration name="Tom Jones" />
      <Version current="1.0.0" />
    </div>
    <div className="d-flex mx-5 row justify-content-between">
      <span className="col-6">
        <Airline name="American Airlines" path="/american-airlines/bidtypes" />
      </span>
      <span className="col-6">
        <Airline name="Alaska Airlines" path="/alaska-airlines/bidtypes" />
      </span>
    </div>
    <div className="d-flex mx-5 mt-5 row justify-content-between">
      <span className="col-6">
        <Airline name="Frontier Airlines" path="/frontier-airlines/bidtypes" />
      </span>
      <span className="col-6">
        <Airline name="UPS" path="/ups/bidtypes" />
      </span>
    </div>
    <footer>
      <Footer />
    </footer>
  </div>
);

export default HomePage;
