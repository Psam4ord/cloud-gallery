import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import React from "react";
import '../styles/navbar.css'

 
             // Props usage
const NavigationBar = (props) => {
  return (
      <Navbar variant='dark' expand="lg" className="nav-bar">
        <Container className="nav-container">
          <Navbar.Brand href="#Home"> logo</Navbar.Brand>
          <div className="nav-links">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#Home">{props.navItem[0]}</Nav.Link>
                
                <Nav.Link href="#Contacts">{props.navItem[1]}</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </div>
        </Container>
      </Navbar>
                    
  );
};



export default NavigationBar;
