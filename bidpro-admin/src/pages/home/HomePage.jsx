import React from "react";
import { Header } from "./../../components/Header/Header";
import { Administration } from "./../../components/Administration/Administration";
import { Version } from "../../components/Version/Version";
import { Footer } from "../../components/Footer/Footer";

/**
 *
 * Structural component that displays the home page.
 *
 */

const HomePage = () => (
  <div>
    <Header />
    <div className="jumbotron d-flex align-items-stretch mx-5 pt-2 pb-0">
      <Administration name="Lillie McAlister" />
      <Version current="1.0.0" />
    </div>
    <footer>
      <Footer />
    </footer>
  </div>
);

export default HomePage;
