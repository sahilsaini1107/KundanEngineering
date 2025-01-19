import React from 'react';
import HeroSection from './components/HeroSection';
import Navigation from './components/Navbar.jsx';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css';
import Contact from './components/Contact.jsx';
import Machine from './components/Machine.jsx';
function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<HeroSection />} />
      </Routes>
      <Machine />
      <Contact />
    </Router>
  );
}

export default App;
