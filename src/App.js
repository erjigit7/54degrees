import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import FullScreenIframe from "./FullScreenIframe";
import Home from "./Home";
import HomeMoskva from "./HomeMoskva";
import MoskvaSiti from "./MoskvaSiti";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const App = () => {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/panorama-home" element={<HomePage />} />
        <Route path="/panorama-3d-tour" element={<FullScreenIframe />} />
        <Route path="/moskva-home" element={<HomeMoskva />} />
        <Route path="/moskva-sity-3d-tour" element={<MoskvaSiti />} />
      </Routes>
    </Router>
  );
};

export default App;
