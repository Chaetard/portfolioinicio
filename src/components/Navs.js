import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import "./Navs.css";


function Navs() {
  return (
    <div className="navpo fixed-top">
      <Navbar>
        <Navbar.Brand href="#" className="a">
          <svg
            className="slashmen"
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 16 16"
          >
            <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294l4-13zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z" />
          </svg>
          <span className="nombrej">Chaetard</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home" className="home">
              <span>About Me </span>
            </Nav.Link>
            <Nav.Link
              href="https://github.com/Chaetard"
              className="home"
              target="_blank"
            >
              {" "}
              <span>GitHub</span>
            </Nav.Link>
           
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Navs;
