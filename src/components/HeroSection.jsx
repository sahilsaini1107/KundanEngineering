import React from 'react';
import { Link } from 'react-router-dom';
import './HeroSection.css';
import Services from './Services';

const HeroSection = () => {  
  const servicesData = [
    {
      id: 1,
      title: "Consulting",
      description: "We provide expert business consulting services to help your business grow.",
      icon: "path/to/icon.png",
    },
    {
      id: 2,
      title: "Web Development",
      description: "Building modern, responsive websites tailored to your business needs.",
      icon: "path/to/icon.png",
    },
    {
      id: 3,
      title: "Web Development",
      description: "Building modern, responsive websites tailored to your business needs.",
      icon: "path/to/icon.png",
    },
    {
      id: 4,
      title: "Web Development",
      description: "Building modern, responsive websites tailored to your business needs.",
      icon: "path/to/icon.png",
    },
    // More services here
  ];

  return (
    <>
      <header className="hero-section">
        <div className="hero-content">
          <h1 className="animate__animated animate__fadeIn">Welcome to Our Business</h1>
          <p className="animate__animated animate__fadeIn animate__delay-1s">Providing innovative solutions for all your needs</p>
          <Link to="/services" className="cta-button">
            Explore Our Services
          </Link>
          <button className="scroll-down" id="scrollDownButton">
            <span>⬇ Scroll Down</span>
          </button>
        </div>
      </header>
      <Services services={servicesData}/>
    </>
  );
}

export default HeroSection;
