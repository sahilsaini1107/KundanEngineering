import React from 'react';
import HeroSection from './components/HeroSection';
import Navigation from './components/Navbar.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css';
import Contact from './components/Contact.jsx';
import Machine from './components/Machine.jsx';
import About from './components/About.jsx'; // Import About component
import Services from './components/Services.jsx'; // Import Services component

const services = [
  { id: 1, name: "Service 1", description: "Description for service 1", image: "./images/service-image1.jpg" },
  { id: 2, name: "Service 2", description: "Description for service 2", image: "./images/service-image2.jpg" },
  { id: 3, name: "Service 3", description: "Description for service 3", image: "./images/service-image3.jpg" },
];

function App() {
  return (
    <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<HeroSection />} />
        </Routes>
        <div className="container">
        <About />
        {/* <Machine /> */}
        <Services services={services} />
      </div>
      <Contact />
    </Router>
  );
}

export default App;
