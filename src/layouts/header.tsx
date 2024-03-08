import "./header.css"

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";



const Header =()=>{
    return (
      <div className="header">
        <Navbar expand="lg" className="bg-body-tertiary header-1">
          <Navbar.Brand className="link" href="#home">
            DCMT
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <div className="header-2">
                <Nav.Link className="link link-1" href="#home">
                  Docs
                </Nav.Link>
                <Nav.Link className="link link-1" href="#link">
                  Pricing
                </Nav.Link>
                <Nav.Link className="link link-1" href="#link">
                  Sign Up
                </Nav.Link>
                <Nav.Link className="link link-1" href="#link">
                  Login
                </Nav.Link>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
}

export default Header;