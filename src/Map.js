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
      name: "Справа от ЖК Башат",
      position: [42.811671, 74.577894],
      link: "https://my.matterport.com/show/?m=NoQrr2iU5Vt&cloudEdit=1&ss=121&sr=-3.1",
      description: "Ветеринарная улица, 12/1 "
    },
    {
      id: 2,
      name: "Слева от ЖК Башат",
      position: [42.810861, 74.57728],
      link: "https://my.matterport.com/show/?m=NoQrr2iU5Vt&cloudEdit=1&ss=122&sr=-3.14",
      description: "Ветеринарная улица, 12"
    },
    {
      id: 3,
      name: "Тройной перекресток",
      position: [42.810388, 74.577608],
      link: "https://my.matterport.com/show/?m=NoQrr2iU5Vt&cloudEdit=1&ss=123&sr=-3.14",
      description: "Ветеринарная улица, 1/1 "
    },
    {
      id: 4,
      name: "Манас айылы",
      position: [42.810225, 74.576837],
      link: "https://my.matterport.com/show/?m=NoQrr2iU5Vt&cloudEdit=1&sm=3&sr=-1.57,,-3.14&sp=16.63,117.18,14.71&sz=89.92  ",
      description: "Улица Манас айылы, 37 "
    },
    {
      id: 5,
      name: "Ала-Арча ТЦ",
      position: [42.82871218691958, 74.58374602287819],
      link: "https://my.matterport.com/show/?m=NoQrr2iU5Vt&cloudEdit=1&ss=125&sr=-2.14,-.01",
      description: "Проспект Мира / Южный Магистраль"
    },
    {
      id: 6,
      name: "Mubarak",
      position: [42.823038, 74.58497],
      link: "https://my.matterport.com/show/?m=NoQrr2iU5Vt&cloudEdit=1&ss=126&sr=-3.14",
      description: "Проспект Чынгыза Айтматова, 299/7а"
    },
    {
      id: 7,
      name: "Администрация Президента Кыргызской Республики ",
      position: [42.808744, 74.583863],
      link: "https://my.matterport.com/show/?m=NoQrr2iU5Vt&cloudEdit=1&ss=127&sr=-3.14",
      description: "Проспект Чынгыза Айтматова, 301"
    },
    {
      id: 8,
      name: "Кыргызский национальный театр Манас ",
      position: [42.809327, 74.577048],
      link: "https://my.matterport.com/show/?m=NoQrr2iU5Vt&cloudEdit=1&ss=128&sr=-3.14",
      description: "Самойленко, 2/9"
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