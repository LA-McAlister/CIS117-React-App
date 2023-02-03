import HomePage from "./pages/home/index";
import AABidTypes from "./pages/american-airlines/bidtypes";
import ASBidTypes from "./pages/alaska-airlines/bidtypes";
import FABidTypes from "./pages/frontier-airlines/bidtypes";
import UPBidTypes from "./pages/ups/bidtypes";

import { Routes, Route } from "react-router-dom";
import { AAPilots } from "./pages/american-airlines/pilots/AAPilots";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/american-airlines/bidtypes" element={<AABidTypes />} />
        <Route path="/american-airlines/pilots" element={<AAPilots />} />
        <Route path="/alaska-airlines/bidtypes" element={<ASBidTypes />} />
        <Route path="/frontier-airlines/bidtypes" element={<FABidTypes />} />
        <Route path="/ups/bidtypes" element={<UPBidTypes />} />
      </Routes>
    </>
  );
}

export default App;
