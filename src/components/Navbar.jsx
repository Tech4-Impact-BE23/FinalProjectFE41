import React, { useState } from 'react';
import { NavLink, Link, useLocation, useNavigate } from 'react-router-dom';
import { Navbar, Nav, Container, Dropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import logo from '../assets/logo.png';
import profileImage from '../assets/profil.png';

const CustomNavbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);

  const handleLogout = () => {
    // Menghapus token pengguna dari penyimpanan lokal
    localStorage.removeItem('UserToken');

    // Melakukan navigasi ke halaman login tanpa memperbarui halaman
    navigate('/login', { replace: true });
  };

  const handleLoginRedirect = () => {
    // Melakukan navigasi ke halaman login tanpa memperbarui halaman
    navigate('/login', { replace: true });
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (

    <Navbar expand="lg" bg="body-tertiary" sticky="top">
      <Container style={{ padding: '5px', height: '50px' }}>
        <Navbar.Brand as={Link} to="/">
          <img src={logo} alt="Logo" /> Asean Youth Forum
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarSupportedContent" />
        <Navbar.Collapse id="navbarSupportedContent">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} exact to="/home" className={location.pathname === '/home' ? 'active' : ''}>
              Home
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/about"
              className={location.pathname === "/about" ? "active" : ""}
            >
              About
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/articles"
              className={location.pathname === "/articles" ? "active" : ""}
            >
              Articles
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/forum"
              className={location.pathname === "/forum" ? "active" : ""}
            >
              Forum
            </Nav.Link>
          </Nav>
          <Nav>
            <Dropdown show={showDropdown} onToggle={toggleDropdown} >
              <Dropdown.Toggle variant="success" id="dropdown-basic" style={{ padding: '0', background: 'none', border: 'none' }}>
                <img src={profileImage} alt="Profile" style={{ width: '40px', height: '40px', borderRadius: '50%', objectFit: 'cover', backgroundColor: 'green' }} />
              </Dropdown.Toggle >
              <Dropdown.Menu style={{ minWidth: 'unset'}}>
                {localStorage.getItem('UserToken') ? (
                  <Dropdown.Item onClick={handleLogout} style={{ fontSize: '14px'}}>Logout</Dropdown.Item>
                ) : (
                  <Dropdown.Item onClick={handleLoginRedirect} style={{ fontSize: '14px' }}>Kembali ke Halaman Login</Dropdown.Item>
                )}
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
