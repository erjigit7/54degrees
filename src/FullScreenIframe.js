import React, { useState } from 'react';
import './FullScreenIframe.css';
import './Components/BackgroundMusic'
import BackgroundMusic from './Components/BackgroundMusic';

const FullScreenIframe = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [iframeSrc, setIframeSrc] = useState('https://my.matterport.com/show/?m=T35E9Nbq5dS&play=1'); // По умолчанию

  // Функция для переключения меню
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Функция для закрытия меню при клике вне его
  const closeMenu = (e) => {
    if (e.target.classList.contains('overlay')) {
      setIsMenuOpen(false);
    }
  };

  // Функция для смены iframe и закрытия меню
  const changeIframe = (url) => {
    setIframeSrc(url);
    setIsMenuOpen(false);
  };

  return (
    <div className="fullscreen-container">
       <BackgroundMusic />
      {/* Затемнение фона при открытом меню */}
      {isMenuOpen && <div className="overlay" onClick={closeMenu}></div>}
     
      {/* Бургер-кнопка */}
      <button className="burger-menu" onClick={toggleMenu}>
        {isMenuOpen ? '✖' : '☰'}
      </button>

      {/* Меню справа */}
      <div className={`menu ${isMenuOpen ? 'open' : ''}`}>
        <ul>
          <li><a href="#" onClick={() => changeIframe('https://my.matterport.com/show/?m=T35E9Nbq5dS&play=1')}>Двор</a></li>
          <li><a href="#" onClick={() => changeIframe('https://my.matterport.com/show/?m=t56WmJ8xJs8&play=1')}>Ресепшн</a></li>
          <li><a href="#" onClick={() => changeIframe('https://my.matterport.com/show/?m=4X2J8E1HfDP&play=1')}>Квартира</a></li>
        </ul>
      </div>

      {/* Iframe, который меняется */}
      <iframe
        className="iframe"
        width="100%"
        height="100%"
        src={iframeSrc}
        frameBorder="0"
        allowFullScreen
        allow="autoplay; fullscreen; web-share; xr-spatial-tracking;"
      ></iframe>
    </div>
  );
};

export default FullScreenIframe;
