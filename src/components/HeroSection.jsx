import React from 'react';
import { Link } from 'react-router-dom';
import './HeroSection.css';
import Services from './Services';
import background from '../images/background.png'
import background2 from '../images/bg.png'
import background3 from '../images/bg2.jpg'

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
      <header className="hero-section position-relative">
        <img className="w-100 filter-blur img-fluid" src={background3}/>
        <div className="hero-content position-absolute top-50 start-50 translate-middle text-white z-3" id="home">
          <b><h1 className="animate__animated animate__fadeIn fs-1">Welcome to Kundan Engineering</h1></b>
          <p className="animate__animated animate__fadeIn animate__delay-1s fs-4 text-light">Providing innovative solutions for all your needs</p>
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
