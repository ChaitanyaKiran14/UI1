import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GsapTo from "./pages/gsapto";
import GsapFrom from "./pages/gsapfrom";
import GsapFromTo from "./pages/gsapfromto";
import GsapTimeline from "./pages/gsaptimeline";
import TestTimeline from "./pages/gsaptimeline2";
import GsapStagger from "./pages/gsapstagger";

export default function App() {

  return (
    <div>
      <p>working</p>
      <Router>
      <Routes>
        <Route path="/to" element={<GsapTo/>}  />
        <Route path="/from" element={<GsapFrom/>}  />
        <Route path="/ft" element={<GsapFromTo/>}  />
        <Route path="/tl" element={<GsapTimeline/>}  />
        <Route path="/tt" element={<TestTimeline/>}  />
        <Route path="/gs" element={<GsapStagger/>}  />
      </Routes>
    </Router>
      
    </div>
    
  

  );
}
