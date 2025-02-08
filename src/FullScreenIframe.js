import React, { useState } from 'react';
import logo from './logo.png';
import './FullScreenIframe.css';

const FullScreenIframe = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  const handleIframeLoad = () => {
    setIsLoaded(true); // Показываем логотип, когда iframe загружен
  };

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%' }}>
      {isLoaded && (
        <a 
          href="https://avangardstyle.kg/" 
          target="_blank" 
          rel="noopener noreferrer" 
          style={{
            position: 'absolute',
            top: '50px',
            left: '50px',
            zIndex: 1000,
          }}
        >
          <img 
            src={logo}
            className='img-fluid'
            alt="Company Logo" 
          />
        </a>
      )}

      {/* iframe, с обработчиком загрузки */}
      <iframe
        src="https://my.treedis.com/tour/panorama-park"
        style={{ width: '100%', height: '100%', border: 'none' }}
        allowFullScreen
        onLoad={handleIframeLoad}
      ></iframe>
    </div>
  );
};

export default FullScreenIframe;
