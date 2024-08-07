/* eslint-disable jsx-a11y/anchor-is-valid */
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Navbar.css';
import { Navbar, Nav} from 'react-bootstrap';

const CustomNavbar = () => {
  return (
    <Navbar expand="lg" className="navbar-custom p-4">
      <Navbar.Brand >
          <a className="navbar-brand shine" >
          <span className="shine-text">ShoeShine</span>
          </a></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#services">Services</Nav.Link>
          <Nav.Link href="#about">About</Nav.Link>
          <Nav.Link href="#products">Products</Nav.Link>
          <Nav.Link href="#contact">ContactUs</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default CustomNavbar;
