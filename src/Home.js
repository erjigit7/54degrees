import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      {/* Hero Section with Logo Background */}
      <section className="hero-section">
        <div className="hero-overlay">
          <div className="hero-content">
            <h1 className="company-title">54 Degrees</h1>
            <p className="company-tagline">Инновационные решения для современного бизнеса</p>
            <p className="company-description">
              Мы создаем передовые технологические решения, которые помогают компаниям 
              достигать новых высот в цифровом мире. Наш опыт и профессионализм - 
              ваш путь к успеху.
            </p>
          </div>
        </div>
      </section>

      {/* Work Showcase Section */}
      <section className="work-showcase">
        <div className="container">
          <h2 className="section-title">Наши работы</h2>
          <p className="section-subtitle">Ознакомьтесь с нашими проектами и решениями</p>
          
          <div className="work-grid">
            <Link to="/muras" className="work-card muras-card">
              <div className="work-icon">
                <i className="fas fa-cube"></i>
              </div>
              <h3>Muras</h3>
              <p>Интерактивная 3D визуализация зданий и помещений</p>
              <div className="work-features">
                <span className="feature-tag">3D Тур</span>
                <span className="feature-tag">Интерактивность</span>
                <span className="feature-tag">Навигация</span>
              </div>
            </Link>

            <Link to="/arzy-groups" className="work-card arzy-card">
              <div className="work-icon">
                <i className="fas fa-building"></i>
              </div>
              <h3>Arzy Groups</h3>
              <p>Корпоративные решения и групповые проекты</p>
              <div className="work-features">
                <span className="feature-tag">Корпоратив</span>
                <span className="feature-tag">Группы</span>
                <span className="feature-tag">Проекты</span>
              </div>
            </Link>

            {/* <Link to="/grey-menu" className="work-card grey-card">
              <div className="work-icon">
                <i className="fas fa-bars"></i>
              </div>
              <h3>Серое меню</h3>
              <p>Современный интерфейс с элегантным дизайном</p>
              <div className="work-features">
                <span className="feature-tag">UI/UX</span>
                <span className="feature-tag">Дизайн</span>
                <span className="feature-tag">Интерфейс</span>
              </div>
            </Link> */}
          </div>
        </div>
      </section>

      {/* Company Info Section */}
      <section className="company-info">
        <div className="container">
          <div className="info-grid">
            <div className="info-card">
              <div className="info-icon">
                <i className="fas fa-rocket"></i>
              </div>
              <h3>Инновации</h3>
              <p>Мы используем самые современные технологии для создания уникальных решений</p>
            </div>
            
            <div className="info-card">
              <div className="info-icon">
                <i className="fas fa-users"></i>
              </div>
              <h3>Команда</h3>
              <p>Опытные специалисты работают над каждым проектом с максимальной отдачей</p>
            </div>
            
            <div className="info-card">
              <div className="info-icon">
                <i className="fas fa-shield-alt"></i>
              </div>
              <h3>Надежность</h3>
              <p>Гарантируем качество и стабильность всех наших решений</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <div className="container">
          <h2 className="section-title">Свяжитесь с нами</h2>
          <p className="section-subtitle">Готовы начать новый проект? Мы поможем воплотить ваши идеи в жизнь</p>
          
          <div className="contact-info">
            <div className="contact-item">
              <i className="fas fa-envelope"></i>
              <span>info@54degrees.com</span>
            </div>
            <div className="contact-item">
              <i className="fas fa-phone"></i>
              <span>+996 (555) 123-456</span>
            </div>
            <div className="contact-item">
              <i className="fas fa-map-marker-alt"></i>
              <span>Бишкек, Кыргызстан</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;