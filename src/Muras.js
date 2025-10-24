import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Muras.css';

const Muras = () => {
  const [iframeSrc, setIframeSrc] = useState('https://my.matterport.com/show/?m=R9vuUPTHfKG&play=1'); // Default
  const [selectedFloor, setSelectedFloor] = useState(1);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Floor configuration - 8 floors
  const floors = Array.from({ length: 8 }, (_, i) => i + 1);
  
  // Apartment configuration - same apartments on each floor
  const apartments = [
    { id: 1, name: 'Квартира 1', url: 'https://my.matterport.com/show/?m=4X2J8E1HfDP&play=1' },
    { id: 2, name: 'Квартира 2', url: 'https://my.matterport.com/show/?m=4X2J8E1HfDP&play=1' },
    { id: 3, name: 'Квартира 3', url: 'https://my.matterport.com/show/?m=4X2J8E1HfDP&play=1' },
    { id: 4, name: 'Квартира 4', url: 'https://my.matterport.com/show/?m=4X2J8E1HfDP&play=1' },
    { id: 5, name: 'Квартира 5', url: 'https://my.matterport.com/show/?m=4X2J8E1HfDP&play=1' },
    { id: 6, name: 'Квартира 6', url: 'https://my.matterport.com/show/?m=4X2J8E1HfDP&play=1' },
    { id: 7, name: 'Квартира 7', url: 'https://my.matterport.com/show/?m=4X2J8E1HfDP&play=1' },
    { id: 8, name: 'Квартира 8', url: 'https://my.matterport.com/show/?m=4X2J8E1HfDP&play=1' }
  ];

  // Common areas
  const commonAreas = [
    { id: 'courtyard', name: 'Двор', url: 'https://my.matterport.com/show/?m=R9vuUPTHfKG&play=1' }
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleBurgerClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    toggleMenu();
  };

  const closeMenu = (e) => {
    if (e.target.classList.contains('overlay')) {
      setIsMenuOpen(false);
    }
  };

  const changeIframe = (url) => {
    setIframeSrc(url);
    setIsMenuOpen(false);
  };

  const selectFloor = (floor) => {
    setSelectedFloor(floor);
  };

  const selectApartment = (apartment) => {
    changeIframe(apartment.url);
  };

  const selectCommonArea = (area) => {
    changeIframe(area.url);
  };

  return (
    <div className="muras-container">
      {/* Background overlay when menu is open */}
      {isMenuOpen && <div className="overlay" onClick={closeMenu}></div>}
      
      {/* Burger menu button */}
      <button 
        className="burger-menu" 
        onClick={handleBurgerClick}
        onTouchEnd={handleBurgerClick}
        type="button"
        aria-label="Toggle navigation menu"
      >
        {isMenuOpen ? '✖' : '☰'}
      </button>

      {/* Navigation Menu */}
      <div className={`navigation-menu ${isMenuOpen ? 'open' : ''}`}>
        <div className="menu-header">
          <h3>Навигация</h3>
        </div>
        
        {/* Navigation */}
        <div className="menu-section">
          <h4>Навигация</h4>
          <div className="nav-links">
            <Link to="/" className="nav-link home-link">
              <i className="fas fa-home"></i>
              Главная
            </Link>
            <Link to="/map" className="nav-link map-link">
              <i className="fas fa-map"></i>
              Карта
            </Link>
            {/* <Link to="/grey-menu" className="nav-link grey-link">
              <i className="fas fa-bars"></i>
              Серое меню
            </Link>
            <Link to="/arzy-groups" className="nav-link arzy-link">
              <i className="fas fa-building"></i>
              Arzy Groups
            </Link> */}
          </div>
        </div>

        {/* Common Areas */}
        <div className="menu-section">
          <h4>Общие зоны</h4>
          <div className="common-areas">
            {commonAreas.map((area) => (
              <button
                key={area.id}
                className="area-button"
                onClick={() => selectCommonArea(area)}
              >
                {area.name}
              </button>
            ))}
          </div>
        </div>

        {/* Floor Selection */}
        <div className="menu-section">
          <h4>Выберите этаж</h4>
          <div className="floor-selector">
            {floors.map((floor) => (
              <button
                key={floor}
                className={`floor-button ${selectedFloor === floor ? 'active' : ''}`}
                onClick={() => selectFloor(floor)}
              >
                {floor} этаж
              </button>
            ))}
          </div>
        </div>

        {/* Apartment Selection */}
        <div className="menu-section">
          <h4>Квартиры на {selectedFloor} этаже</h4>
          <div className="apartment-grid">
            {apartments.map((apartment) => (
              <button
                key={`${selectedFloor}-${apartment.id}`}
                className="apartment-button"
                onClick={() => selectApartment(apartment)}
              >
                {apartment.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Iframe */}
      <iframe
        className="muras-iframe"
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

export default Muras;
