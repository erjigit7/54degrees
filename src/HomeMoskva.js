import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "./logo.png";
import backgroundImage from "./MOSKVA_SITI-1-15-16_page-0002.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./HomePage.css";

const Logo = () => {
  return (
    <a
      href="https://avangardstyle.kg/"
      target="_blank"
      rel="noopener noreferrer"
      className="d-block mb-4"
    >
      <img src={logo} alt="Logo" className="img-fluid"/>
    </a>
  );
};

const HomeMoskva = () => {
  const navigate = useNavigate();

  return (
    <div
      className="vh-100 d-flex flex-column justify-content-center align-items-center text-white"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Логотип */}
      <div className="position-absolute top-0 start-0 m-4">
        <Logo />
      </div>

      {/* Контент */}
      <div className="text-center">
        <h1 className="display-5 fw-bold">
          ЖК "МОСКВА СИТИ"
          <br />
          СК "АВАНГАРД СТИЛЬ"
        </h1>

        {/* Офисы продаж */}
        <div className="mt-4">
        <h2 className="h4">ОФИСЫ ПРОДАЖ</h2>
        <p>
          <br />
          <button
            className="btn btn-success mb-2"
            onClick={() =>
              window.open(
                "https://2gis.kg/bishkek/firm/70000001030789847?m=74.597399%2C42.872791%2F16",
                "_blank"
              )
            }
          >
            <i className="fas fa-map-marker-alt"></i> ул. Токтогула 125/1
          </button>
          <br />
          <button
            className="btn btn-success mb-2"
            onClick={() =>
              window.open(
                "https://2gis.kg/bishkek/search/%D1%83%D0%BB.%20%D0%A2%D0%BE%D0%BA%D0%BE%D0%BC%D0%B1%D0%B0%D0%B5%D0%B2%D0%B0%2053%2F1/firm/70000001019836817?m=74.616665%2C42.823358%2F18.6",
                "_blank"
              )
            }
          >
            <i className="fas fa-map-marker-alt"></i> ул. Токомбаева 53/1
          </button>
          <br />
          <button
            className="btn btn-success mb-2"
            onClick={() =>
              window.open(
                "https://2gis.kg/bishkek/search/%D0%95%D0%BB%D0%B8%D1%81%D0%B5%D0%B9%D1%81%D0%BA%D0%B8%D0%B5%20%D0%9F%D0%BE%D0%BB%D1%8F/firm/70000001060866566/74.620528%2C42.814776?m=74.623427%2C42.816685%2F16.81",
                "_blank"
              )
            }
          >
            <i className="fas fa-map-marker-alt"></i> ул. Токомбаева/Куттубаева
          </button>
        </p>
          <p className="mt-3">
          👉
            📧{" "}
            <a href="mailto:sales@avangardstyle.kg" className="address-link">
              sales@avangardstyle.kg
            </a>
            <br />
            👉
            🌐{" "}
            <a href="http://www.avangardstyle.kg" className="address-link">
              www.avangardstyle.kg
            </a>
            <br />
            👉
            📞{" "}
            <a href="tel:+996997007007" className="address-link">
              +996 997 007 007
            </a>
          </p>
          <div className="d-flex justify-content-center gap-3 mt-4">
            <button
              className="btn btn-success"
              onClick={() => window.open("https://wa.me/+996997007007", "_blank")}
            >
              WhatsApp
            </button>
            <button
              className="btn btn-danger"
              onClick={() => window.open("https://instagram.com/avangardstyle_kg", "_blank")}
            >
              Instagram
            </button>
          </div>
        </div>

        {/* Кнопка входа */}
        <button
          className="btn btn-primary mt-4 px-4 py-2"
          onClick={() => navigate("/moskva-sity-3d-tour")}
        >
          🔥 ПРОСМОТР 3D ТУРА
        </button>
      </div>
    </div>
  );
};

export default HomeMoskva;
