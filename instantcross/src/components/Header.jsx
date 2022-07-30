import React from "react";
import { Logo } from "./images";
import { Link, useLocation } from "react-router-dom";
import { Container, Row, Col, Nav, Navbar } from "react-bootstrap";

function Header() {
  let location = useLocation();

  return (
    <>
      <header>
        <Navbar className="mobile-header d-none" expand="lg">
          <Navbar.Brand>
            <div className="logo">
              <Link to="/">
                <img src={Logo} alt="Logo" />
              </Link>
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto align-items-start">
              {/* <li>
                <Link to={"/community"}>Community Art</Link>
              </li>
              <li>
                <Link to={"/voting"}>Voting</Link>
              </li> */}
              <li>
                <div className="wallet-btn">
                  <button className="btn btn-primary"> button</button>
                </div>
              </li>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <div className="custom-container">
          <Row className="gx-0 pc-header flex-column justify-content-center my-3  ">
            <Col lg={12} md={12} sm={12}>
              <div className="logo">
                <Link to="/">
                  <img src={Logo} alt="Logo" />
                </Link>
              </div>
            </Col>
            <Col lg={12} md={12} sm={12}>
              <nav>
                <ul className="d-flex align-items-center justify-content-center mt-3">
                  <li>
                    <Link
                      to={"/"}
                      className={`primary-btn ${
                        location.pathname == "/" ? "  active" : " "
                      }`}
                    >
                      <i className="fa fa-wallet mx-1"></i>
                      Send
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={"/history"}
                      className={`primary-btn ${
                        location.pathname == "/history" ? "  active" : " "
                      }`}
                    >
                      <i className="fa fa-clock mx-1"></i>
                      History
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={"/help"}
                      className={`primary-btn ${
                        location.pathname == "/help" ? "  active" : " "
                      }`}
                    >
                      <i className="fa fa-circle-question mx-1"></i>
                      Help
                    </Link>
                  </li>
                </ul>
              </nav>
            </Col>
          </Row>
        </div>
      </header>
    </>
  );
}

export default Header;
