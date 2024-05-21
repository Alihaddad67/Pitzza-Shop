import { Link } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart ,faHouse } from "@fortawesome/free-solid-svg-icons";


export const CustomNav = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <div className="container">
        <Navbar.Brand className="text-light">SarvinStyle Codding</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Link to="/Home" className="nav-link text-light">
            <FontAwesomeIcon icon={faHouse} />
            </Link>
            <Link to="/Shop" className="nav-link text-light">
              Shop
            </Link>
            <Link to="/Werbkorb" className="nav-link text-light">
              <FontAwesomeIcon icon={faShoppingCart} />
            </Link>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};
