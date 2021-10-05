import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

class Header extends React.Component {
    render = () => {
        return <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Secure Password Generator</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="https://github.com/hacked-is/passgenio">Source Code</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    }
}

export default Header;