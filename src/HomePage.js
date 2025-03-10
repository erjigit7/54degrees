import React from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./HomePage.css";
import backgroundImage from "./img/Grey.jpg";

const Logo = () => {
  // return (
  //   // <a
  //   //   href="https://avangardstyle.kg/"
  //   //   target="_blank"
  //   //   rel="noopener noreferrer"
  //   //   className="d-block mb-4"
  //   // >
  //   //   <img src={logo} alt="Logo" className="img-fluid"/>
  //   // </a>
  // );
};

const HomePage = () => {
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
          ЖК GREY
          <br />
          СК ARZY Group
        </h1>

        {/* Офисы продаж */}
        <div className="mt-4">
        <h2 className="h4">ОФИС ПРОДАЖ</h2>
        <h2 className="h4">Улица Игембердиева, 1а</h2>
        <p>
          <br />
          <button
            className="btn btn-outline-light mb-2"
            onClick={() =>
              window.open(
                "https://go.2gis.com/9YZXL",
                "_blank"
              )
            }
          >
            <i className="fas fa-map-marker-alt"></i> Бизнес-центр Aurora
          </button>
          
          <br />
        </p>
          {/* <p className="mt-3">
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
            <a href="tel:+996555 055 055" className="address-link">
              +996 555 055 055
            </a>
          </p> */}
          <div className="d-flex justify-content-center gap-3 mt-4">
            <button
              className="btn btn-success"
              onClick={() => window.open("https://wa.me/+996555 055 055", "_blank")}
            >
              WhatsApp
            </button>
            <button
              className="btn btn-danger"
              onClick={() => window.open("https://www.instagram.com/arzygroup.kg", "_blank")}
            >
              Instagram
            </button>
          </div>
        </div>

        {/* Кнопка входа */}
        
        <div className="d-flex flex-column align-items-center gap-3 mt-4">
          <button
            className="btn btn-primary mt-4 px-4 py-2"
            onClick={() => navigate("/arzy-groups")}
          >
            🔥 ПРОСМОТР 3D ТУРА
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
