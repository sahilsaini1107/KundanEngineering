import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container } from 'react-bootstrap';
function Navigation () {
  const [showNavbar, setShowNavbar] = useState(false);
  const [lastScrollPos, setLastScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      if (currentScrollPos > lastScrollPos && currentScrollPos > 100) {
        // Show navbar on scrolling down and if scrolled past 100px
        setShowNavbar(true);
      } else {
        // Hide navbar on scrolling up
        setShowNavbar(false);
      }
      setLastScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollPos]);
  
  return (
    <div style={{ position: 'fixed', top: 0, width: '100%', zIndex: 1000 }}>
      {showNavbar && (
        <Navbar bg="light" expand="lg" className="shadow">
          <Container>
            <Navbar.Brand href="#home">MyBrand</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#about">About</Nav.Link>
                <Nav.Link href="#service">Services</Nav.Link>
                <Nav.Link href="#contact">Contact</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      )}
    </div>
  );
};
export default Navigation;