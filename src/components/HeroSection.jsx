import React from 'react';
import { Link } from 'react-router-dom';
import './HeroSection.css';
import background3 from '../images/bg2.jpg'; 

const HeroSection = () => {  
  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header className="hero-section position-relative" style={{ backgroundImage: `url(${background3})` }}>
        <div className="hero-content position-absolute top-50 start-50 translate-middle text-white z-3 text-center" id="home">
          <b><h1 className="animate__animated animate__fadeIn fs-1">Welcome to Kundan Engineering</h1></b>
          <p className="animate__animated animate__fadeIn animate__delay-1s fs-4 text-light">Providing innovative solutions for all your needs</p>
          <Link to="/services" className="cta-button">
            Explore Our Services
          </Link>
        </div>
        <button className="scroll-down animate__animated animate__bounce" id="scrollUpButton" onClick={scrollToServices}>
          <span>⬇ Scroll Down</span>
        </button>
      </header>
    </>
  );
}

export default HeroSection;
