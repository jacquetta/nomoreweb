import React from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import thumbLogo from "../img/thumb.png";

function Navigation() {
    return (
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">
          <img src={thumbLogo} alt="thumbnail logo" width="50" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/articles">Articles</Nav.Link>
            <Nav.Link href='/resources'>Resources</Nav.Link>
            <Nav.Link href='/where'>Where to Go</Nav.Link>
            <Nav.Link href='/blog'>Blog</Nav.Link>
            <Nav.Link href='/about'>About</Nav.Link>
          </Nav>

          <Form inline>
            <FormControl type='text' placeholder='Search' className='mr-sm-2' />
            <Button variant='outline-success'>Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    );
}

export default Navigation;