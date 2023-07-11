import React from 'react';
import Profile from './Avatar';
import { Navbar, Nav, Container } from "react-bootstrap";

export const Home = () => {

  return (
    <div>
      <Navbar bg="dark" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home" style={{ color: 'white',marginLeft:'-90px' }}>REDEEM</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home" style={{ color: 'white',marginLeft:'100px' }}>Crime</Nav.Link>
            <Nav.Link href="#features" style={{ color: 'white',marginLeft:'100px' }}>Bullying</Nav.Link>
          </Nav>
          <Profile />
        </Container>
      </Navbar>

    </div>
  );
}
