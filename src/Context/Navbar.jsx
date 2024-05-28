import React, { useContext } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { PizzaContext } from "../Context/PizzaProvider";

const Menu = () => {
  const { total } = useContext(PizzaContext);

  return (
    <div>
      <Navbar expand="lg" className="navbar navbar-expand navbar-dark bg-dark">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto" style={{ width: "100%" }}>
              <div className="nav-links-container">
                <Link className="navbar-brand" to="/">
                  🍕 Pizzeria Mamma Mia{" "}
                </Link>
                <div className="spacer"></div>
                <Link className="navbar-brand" to="/carrito">
                  🛒 Carrito: ${total}
                </Link>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* Contenedor principal con margen inferior */}
      <Container className="home mb-3">
        {/* Sección para el encabezado de la página principal y el texto introductorio */}
        <div className="home-body">
          <h1 className="fw-bold">Pizzería ¡Mamma Mia!</h1>
          {/* Título principal */}
          <p>¡Tenemos las mejores pizzas que podrás encontrar!</p>
          {/* Texto descriptivo */}
          <hr />
          {/* Separador horizontal */}
        </div>
      </Container>
    </div>
  );
};

export default Menu;
