import React from 'react';
import { Link } from 'react-router-dom';
import './HeroSection.css';

function HeroSection() {
  // document.getElementById('scrollDownButton').addEventListener('click', () => {
  //   const nextSection = document.querySelector('.previous-work');
  //   nextSection.scrollIntoView({ behavior: 'smooth' });
  // });
  
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
    </>
  );
}


export default HeroSection;
