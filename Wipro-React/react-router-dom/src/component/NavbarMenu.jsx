import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";

export default function NavbarMenu() {
  return (
    // responsive bootstrap navbar
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand>Income Tax Department</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/">Home</Nav.Link>
            <Nav.Link as={NavLink} to="/add-taxpayer">Add Taxpayer</Nav.Link>
            <Nav.Link as={NavLink} to="/taxpayer-list">Taxpayer List</Nav.Link>
            <Nav.Link as={NavLink} to="/calculate-tax">Calculate Tax</Nav.Link>
            <Nav.Link as={NavLink} to="/tax-rates">Tax Rates</Nav.Link>
            <Nav.Link as={NavLink} to="/contact">Contact</Nav.Link>
            <Nav.Link as={NavLink} to="/about">About</Nav.Link>
            <Nav.Link as={NavLink} to="/faq">FAQ</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
