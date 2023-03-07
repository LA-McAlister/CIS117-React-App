import React from "react";
import { Header } from "./../../components/Header/Header";
import { AdministrationView } from "./../../components/AdministrationView/AdministrationView";
import { VersionView } from "../../components/VersionView/VersionView";
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
      <AdministrationView name="Lillie McAlister" />
      <VersionView current="1.0.0" />
    </div>
    <footer>
      <Footer />
    </footer>
  </div>
);

export default HomePage;
