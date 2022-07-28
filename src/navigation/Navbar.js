import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import React from "react";
import '../styles/navbar.css'

 
const NavigationBar = () => {
  return (
      <Navbar bg="" expand="lg" className="nav-bar">
        <Container className="nav-container">
          <Navbar.Brand href="#Home"> logo</Navbar.Brand>
          <div>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#Home">Home</Nav.Link>
                
                <Nav.Link href="#Contacts">Contacts Us</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </div>
        </Container>
      </Navbar>
                    
  );
};

export default NavigationBar;
