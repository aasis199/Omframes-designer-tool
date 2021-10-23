import React from 'react';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { Navstyle } from './NavStyle';
import Button from '@material-ui/core/Button';

export default function Navigation() {
    return (
        <div>
          <Navstyle>
            <Navbar bg="light" expand="lg" sticky="top">
              <Container className="fs-14">
                <Navbar.Brand href="/" className="col-1 fw-5" style={{'letter-spacing': '1px'}}>OMFRAMES<sup class="col-2 fw-2">Beta</sup></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto list">
                    <Nav.Link href="/">Home</Nav.Link>
                      <NavDropdown title="Framing" id="navbarScrollingDropdown">
                        <div className="custom_dropdown">
                          <NavDropdown.Item href="/design">Custom Size</NavDropdown.Item>
                          <NavDropdown.Divider />
                          <NavDropdown.Item href="/coming_soon">Collage Picture Frames</NavDropdown.Item>
                          <NavDropdown.Divider />
                          <NavDropdown.Item href="/tabletop-design">Quick Ship</NavDropdown.Item>
                        </div>
                      </NavDropdown>                
                    <Nav.Link href="https://omframehouse.com.np/category/photo-frames-in-nepal">Products</Nav.Link>
                    <Nav.Link href="#learn">How to</Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
            </Navstyle>
        </div>
    )
}
