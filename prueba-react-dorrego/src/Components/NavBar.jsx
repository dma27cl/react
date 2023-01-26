import React, { useState } from 'react';
import { Container, Navbar, Form, Button } from 'react-bootstrap'
import logo from "../img/bcs.png";


const NavBar = ({ setValorBusqueda }) => {
  return (
    <div className="nBar">
      <Navbar expand="lg">
        <Container fluid>
          <Navbar.Brand>
            <img src={logo}
              width="400"
              height="140"
              className="mb-3 centrado" />
          </Navbar.Brand>

          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Buscar por nombre"
              className="h-auto"
              aria-label="Search"

              onChange={(e) => setValorBusqueda(e.target.value)}

            />
            <Button onClick={() => setValorBusqueda} variant="primary" className="m-1">Buscar</Button>
            
          </Form>

        </Container>
      </Navbar>
    </div>
  );

}

export default NavBar;