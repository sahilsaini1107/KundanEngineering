import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobileAlt } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css'; // Importing specific styles for the navbar

function Navigation () {
  const [showNavbar, setShowNavbar] = useState(false);
  const [lastScrollPos, setLastScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      if (currentScrollPos > lastScrollPos && currentScrollPos > 100) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }
      setLastScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollPos]);
  
  return (
    <div style={{ position: 'fixed', top: 0, width: '100%', zIndex: 1000 }}>
      {showNavbar && (
        <Navbar bg="dark" variant="dark" expand="lg" className="shadow">
          <Container>
            <Navbar.Brand href="/">Kundan Engineering</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home" style={{ margin: '0 15px' }}>Home</Nav.Link>
                <Nav.Link href="#about" style={{ margin: '0 15px' }}>About</Nav.Link>
                <Nav.Link href="#service" style={{ margin: '0 15px' }}>Services</Nav.Link>
                <Nav.Link href="#contact" style={{ margin: '0 15px' }}>Contact</Nav.Link>
              </Nav>
            </Navbar.Collapse>
            <Navbar.Text className="contact-info">
              <FontAwesomeIcon icon={faMobileAlt} /> 9373213347, 9359714516
            </Navbar.Text>
          </Container>
        </Navbar>
      )}
    </div>
  );
};

export default Navigation;
