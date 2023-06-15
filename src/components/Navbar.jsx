import React from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import logo from '../assets/logo.png';
import profileImage from '../assets/profil.png';

const CustomNavbar = () => {
  const location = useLocation();

  return (
    <Navbar expand="lg" bg="body-tertiary" sticky="top" style={{padding: '5px'}}>
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img src={logo} alt="Logo" /> Asean Youth Forum
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarSupportedContent" />
        <Navbar.Collapse id="navbarSupportedContent">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} exact="true" to="/home" className={location.pathname === '/home' ? 'active' : ''}>
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/about" className={location.pathname === '/about' ? 'active' : ''}>
              About
            </Nav.Link>
            <Nav.Link as={NavLink} to="/articles" className={location.pathname === '/articles' ? 'active' : ''}>
              Articles
            </Nav.Link>
            <Nav.Link as={NavLink} to="/forum" className={location.pathname === '/forum' ? 'active' : ''}>
              Forum
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link as={Link} to="/login">
              <img src={profileImage} alt="Profile" />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
