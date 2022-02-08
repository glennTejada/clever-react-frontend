import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";

const Home = () => {
  let history = useHistory();
  const handleLogout = () => {
    localStorage.clear();
    history.push("/login");
  };
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Clever Messenger</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Link to="/" className="nav-link">
                Home
              </Link>
              <Link onClick={handleLogout} className="nav-link">
                Logout
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="hero-main-area">
        <h1>Welcome To Clever Messenger</h1>
      </div>
      {/* <Hero /> */}
    </div>
  );
};

export default Home;
