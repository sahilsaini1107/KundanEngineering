import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container } from 'react-bootstrap';
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
        <Navbar bg="light" expand="lg" className="shadow">
          <Container>
            <Navbar.Brand href="/">MyBrand</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#about">About</Nav.Link>
                <Nav.Link href="#service">Services</Nav.Link>
                <Nav.Link href="#contact">Contact</Nav.Link>
              </Nav>
            </Navbar.Collapse>
            <Navbar.Brand>9373213347, 9359714516</Navbar.Brand>
          </Container>
        </Navbar>
      )}
    </div>
  );
};
export default Navigation;