import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GsapTo from "./pages/gsapto";
import GsapFrom from "./pages/gsapfrom";
import GsapFromTo from "./pages/gsapfromto";
import GsapTimeline from "./pages/gsaptimeline";
import TestTimeline from "./pages/gsaptimeline2";
import GsapStagger from "./pages/gsapstagger";
import STBasics from "./pages/gsapscrolltriggerbasics";
import STScrub from "./pages/gsapscrolltrigger";
import GsapPinning from "./pages/gsapscrollpinning";

export default function App() {

  return (
    <div>
      <Router>
      <Routes>
        <Route path="/to" element={<GsapTo/>}  />
        <Route path="/from" element={<GsapFrom/>}  />
        <Route path="/ft" element={<GsapFromTo/>}  />
        <Route path="/tl" element={<GsapTimeline/>}  />
        <Route path="/tt" element={<TestTimeline/>}  />
        <Route path="/gs" element={<GsapStagger/>}  />
        <Route path="/st" element={<STBasics/>}  />
        <Route path="/sts" element={<STScrub/>}  />
        <Route path="/stp" element={<GsapPinning/>}  />
      </Routes>
    </Router>
      
    </div>
    
  

  );
}
