import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export default function MyNav() {
  return (
    <Navbar expand="lg" className="mainMenu" variant="light">
      <Container>
        <Navbar.Brand>
          <NavLink to="/" className="myName">
          <img className="imageLogo" src="https://www.ischool.berkeley.edu/sites/default/files/berkeleyischool-logo-blue-med.png" alt="Logo" />
          </NavLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          id="basic-navbar-nav"
          className="justify-content-center"
        >
          <Nav id="navigation">
            <NavLink to="/" className="menu">
              Home
            </NavLink>
            <NavLink to="/where_to_invest" className="menu">
             Where to Invest?
            </NavLink>
            <NavLink to="/where_to_start_business" className="menu">
              Where to Start Business?
            </NavLink>
            <NavLink to="/year_to_year" className="menu">
              Year to Year Overview
            </NavLink>
            <NavLink to="/about" className="menu">
              About
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
