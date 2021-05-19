import React, { Fragment, useContext } from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../context/authContext";

export default function Navigation() {
  const { userState, signOut } = useContext(AuthContext);

  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <div className="container poppins">
        <Navbar.Brand className="semi-bold fw-bold">
        <i className="fas fa-comments pe-2 "></i>
          CodiChat
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavLink to="/" className="nav-link" activeClassName="active">
              Inicio
            </NavLink>
            {userState ? (
              <Fragment>
              {/* Aqui iria validando si el usuario esta logueado pero no hay nada que esconder */}
              </Fragment>
            ) : null}
          </Nav>
          <Nav>
            {userState ? (
              <Fragment>
                <NavDropdown
                  title={
                    <div className="d-inline">
                      <img
                        src={userState.photoURL}
                        className="me-2"
                        style={{ borderRadius: "50%", width: "30px" }}
                        alt={`avatar ${userState.displayName}`}
                      />
                      <span>{userState.displayName}</span>
                    </div>
                  }
                  id="collasible-nav-dropdown"
                >
                  <NavDropdown.Item onClick={signOut}>Salir</NavDropdown.Item>
                </NavDropdown>
              </Fragment>
            ) : null}
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}