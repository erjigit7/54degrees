import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import FullScreenIframe from "./FullScreenIframe";
import Home from "./Home";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const App = () => {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/panorama-home" element={<HomePage />} />
          <Route path="/arzy-groups" element={<FullScreenIframe />} />
        </Routes>
    </Router>
  );
};

export default App;
