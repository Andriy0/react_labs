import React from 'react';
import {Navbar, Container, Nav} from "react-bootstrap";

const Menu = () => {
  return (
    <Navbar>
      <Container>
        <Navbar.Brand href="/">Home</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav>
            <Nav.Link href="/about">About</Nav.Link>
          </Nav>
          <Navbar.Text>
            Signed in as: <a href="#login">Mark Otto</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;
