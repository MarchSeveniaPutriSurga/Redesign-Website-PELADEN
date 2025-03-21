import React, { useState, useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { FaUserCircle, FaBook, FaDiscord, FaShieldAlt } from "react-icons/fa";

const NavbarComponent = () => {
  const [scrolled, setScrolled] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Navbar
      expand="lg"
      fixed="top"
      className={`custom-navbar ${scrolled || hovered ? "scrolled" : ""}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Container>
        <Navbar.Brand href="#home" className="brand-container">
          <div className="logo-title-container">
            <img
              src="/logo-peladen.png"
              className="brand-logo"
              alt="Peladen Logo"
            />
            <div className="brand-text">
              <div className="brand-title">PELADEN</div>
              <div className="brand-subtitle">
                <b>Pe</b>ngelolaan <b>La</b>yanan A<b>d</b>ministrasi Sist
                <b>e</b>m Elektro<b>n</b>ik Pemda DIY
              </div>
            </div>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto nav-buttons-container">
            <Nav.Link href="#kebijakan" className="nav-button">
              <FaShieldAlt className="nav-icon" />
              <span>Kebijakan Layanan</span>
            </Nav.Link>
            <Nav.Link href="#manual" className="nav-button">
              <FaBook className="nav-icon" />
              <span>Manual</span>
            </Nav.Link>
            <Nav.Link href="#discord" className="nav-button">
              <FaDiscord className="nav-icon" />
              <span>Discord</span>
            </Nav.Link>
            <Nav.Link href="#login" className="nav-button">
              <FaUserCircle className="nav-icon" />
              <span>Login</span>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
