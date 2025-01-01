import React from "react";
import { Navbar, Container, Nav, Form, FormControl, InputGroup } from "react-bootstrap";
import { FaSearch, FaUser, FaHeart, FaShoppingCart } from "react-icons/fa";
import "./AdidasNavbar.css";

export const AdidasNavbar = () => {
  return (
    <Navbar className="adidas-navbar" expand="lg">
      <Container>
        {/* Logo on the left */}
        <Navbar.Brand href="/">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/2/20/Adidas_Logo.svg"
            alt="Adidas Logo"
            className="adidas-logo"
          />
        </Navbar.Brand>

        {/* Center Menus */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
          <Nav className="menu">
            <Nav.Link href="#shoes" className="menu-item bold">SHOES</Nav.Link>
            <Nav.Link href="#men" className="menu-item bold">MEN</Nav.Link>
            <Nav.Link href="#women" className="menu-item bold">WOMEN</Nav.Link>
            <Nav.Link href="#kids" className="menu-item bold">KIDS</Nav.Link>
            <Nav.Link href="#sports" className="menu-item">SPORTS</Nav.Link>
            <Nav.Link href="#lifestyle" className="menu-item">LIFESTYLE</Nav.Link>
          </Nav>
        </Navbar.Collapse>

        {/* Right corner icons */}
        <div className="nav-right d-flex align-items-center">
          <Form className="search-form">
            <InputGroup>
              <FormControl type="text" placeholder="Search" className="search-input" />
              <InputGroup.Text className="search-icon">
                <FaSearch />
              </InputGroup.Text>
            </InputGroup>
          </Form>
          <FaUser className="nav-icon" title="Login" />
          <FaHeart className="nav-icon" title="Wishlist" />
          <FaShoppingCart className="nav-icon" title="Cart" />
        </div>
      </Container>
    </Navbar>
  );
};
