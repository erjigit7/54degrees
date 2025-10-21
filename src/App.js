import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import FullScreenIframe from "./FullScreenIframe";
import Home from "./Home";
import Map from "./Map";
import Muras from "./Muras";
import BackgroundMusic from "./Components/BackgroundMusic";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const App = () => {
  return (
    <Router>
      {/* <BackgroundMusic /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/grey-menu" element={<HomePage />} />
          <Route path="/arzy-groups" element={<FullScreenIframe />} />
          <Route path="/map" element={<Map />} />
          <Route path="/muras" element={<Muras />} />
        </Routes>
    </Router>
  );
};

export default App;
