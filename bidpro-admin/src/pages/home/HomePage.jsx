import React from "react";
import { Header } from "./../../components/Header/Header";
import { Administration } from "./../../components/Administration/Administration";
import { Version } from "../../components/Version/Version";
import { Footer } from "../../components/Footer/Footer";
import { Airline } from "../../components/Airline/Airline";
import { Jumbotron } from "../../components/Jumbotron/Jumbotron";

/**
 *
 * Structural component that displays the home page.
 *
 */

const HomePage = () => {
  return (
    <div className="container">
      <Jumbotron
        administration={<Administration name="Lillie McAlister" />}
        version={<Version current="1.1.0" />}
      />
      <div className="row">
        <Airline
          name={"American Airlines"}
          path={"/american-airlines/bidtypes"}
        />
        <Airline name={"Alaska Airlines"} path={"/alaska-airlines/bidtypes"} />
        <Airline
          name={"Frontier Airlines"}
          path={"/frontier-airlines/bidtypes"}
        />
        <Airline name={"UPS"} path={"/ups/bidtypes"} />
      </div>
    </div>
  );
};

export default HomePage;
