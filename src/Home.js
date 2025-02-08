import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

const FullScreenIframe = () => {
    const navigate = useNavigate();
  return (
    <div>
        <button
          className="btn btn-primary mt-4 px-4 py-2"
          onClick={() => navigate("/panorama-home")}
        >
          🔥 Home
        </button>
    </div>
  );
};

export default FullScreenIframe;
