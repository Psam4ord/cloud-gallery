import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import React from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";

// Props usage
const NavigationBar = (props) => {
  return (
    <Navbar variant="dark" expand="lg" className="nav-bar">
      <Container className="nav-container">
        <Link to={"/"} style={{ textDecoration: "none" }}>
          <Navbar.Brand href="#Home"> logo</Navbar.Brand>
        </Link>
        <div className="nav-links">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link to={"/login"}>
                <Nav.Link href="#Login">{props.navItem[0]}</Nav.Link>
              </Link>

              <Link to={"/register"}>
                <Nav.Link href="#SignUp">{props.navItem[1]}</Nav.Link>
              </Link>
              <Link to={"/contact-us"}>
                <Nav.Link href="#">{props.navItem[2]}</Nav.Link>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
