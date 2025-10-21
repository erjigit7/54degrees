import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './Map.css';

// Fix for default markers in react-leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

const Map = () => {
  // Sample locations with coordinates and links
  const locations = [
    {
      id: 1,
      name: "Ала-Арча ТЦ",
      position: [42.82871218691958, 74.58374602287819],
      link: "https://my.matterport.com/show/?m=aAqMcAkxfA4&cloudEdit=1&ss=1&sr=2.65,-1.31",
      description: "Проспект Мира / Южный Магистраль"
    }
  ];

  const handleMarkerClick = (link) => {
    window.open(link, '_blank');
  };

  return (
    <div className="map-container">
      <h2 className="map-title">Интерактивная карта</h2>
      <p className="map-description">Нажмите на маркеры, чтобы увидеть вид с птичьего полета!</p>
      
      <MapContainer
        center={[42.823187, 74.578024]}
        zoom={12}
        style={{ height: '70vh', width: '100%' }}
        className="map"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        
        {locations.map((location) => (
          <Marker
            key={location.id}
            position={location.position}
            eventHandlers={{
              click: () => handleMarkerClick(location.link)
            }}
          >
            <Popup>
              <div className="popup-content">
                <h4>{location.name}</h4>
                <p>{location.description}</p>
                <button 
                  className="btn btn-primary btn-sm"
                  onClick={() => handleMarkerClick(location.link)}
                >
                  Вид с птичьего полета
                </button>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
      
      <div className="map-info">
        <h4>Доступные локации:</h4>
        <ul className="location-list">
          {locations.map((location) => (
            <li key={location.id}>
              <strong>{location.name}</strong> - 
              <a 
                href={location.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="location-link"
              >
                Вид с птичьего полета
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Map;