import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";

const NavigationBar = () => {
  return (
    <Navbar expand="lg"  variant="dark" style={{backgroundColor:"#0E0E0E"}}>
      <Container>
        <Navbar.Brand className="navbar-links">
          <img
            src="images\logo.svg"
            className="d-inline-block align-top logo"
            alt="techforing logo"
          />
          {/* Wow */}
        </Navbar.Brand>
        <Navbar.Collapse className="justify-content-evenly" id="basic-navbar-nav" style={{fontWeight:"bolder"}}>
          {/* <Nav className="me-auto">
            <Nav.Link href="#more">More</Nav.Link>
            <Nav.Link href="#services">Services</Nav.Link>
          </Nav> */}
          <Nav >
            <Nav.Link className="navbar-links pe-5" href="#pricing">HOME</Nav.Link>
            <Nav.Link className="navbar-links pe-5" href="#features">HEADPOHONES</Nav.Link>
            <Nav.Link className="navbar-links pe-5" href="#resources">SPEAKERS</Nav.Link>
            <Nav.Link className="navbar-links pe-5" href="#resources">EARPHONES</Nav.Link>
          </Nav>
          
        </Navbar.Collapse>
        {/* <Button className="ms-auto navbar-links navbar-button" > */}
        <i className="navbar-links fas fa-shopping-cart"></i>
        {/* </Button> */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
