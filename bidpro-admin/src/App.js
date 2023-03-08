import Header from "./components/Header";
import HomePage from "./pages/home/HomePage";
import AABidTypes from "./pages/american-airlines/bidtypes";
import AAPilots from "./pages/american-airlines/pilots";
import ASBidTypes from "./pages/alaska-airlines/bidtypes";
import ASPilots from "./pages/alaska-airlines/pilots";
import FABidTypes from "./pages/frontier-airlines/bidtypes";
import FAPilots from "./pages/frontier-airlines/pilots";
import UPBidTypes from "./pages/ups/bidtypes";
import UPPilots from "./pages/ups/pilots";
import Forms from "./pages/examples/forms";
import Footer from "./components/Footer";
import "./App.css";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/american-airlines/bidtypes" element={<AABidTypes />} />
        <Route path="/american-airlines/pilots" element={<AAPilots />} />
        <Route path="/alaska-airlines/bidtypes" element={<ASBidTypes />} />
        <Route path="/alaska-airlines/pilots" element={<ASPilots />} />
        <Route path="/frontier-airlines/bidtypes" element={<FABidTypes />} />
        <Route path="/frontier-airlines/pilots" element={<FAPilots />} />
        <Route path="/ups/bidtypes" element={<UPBidTypes />} />
        <Route path="/ups/pilots" element={<UPPilots />} />
        <Route path="/example/forms" element={<Forms />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
