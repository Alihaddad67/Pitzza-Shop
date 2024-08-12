import { Link } from "react-router-dom";
import {  Nav, Navbar } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faHouse } from "@fortawesome/free-solid-svg-icons";
import { BsBoxArrowRight } from "react-icons/bs";
import { useContext } from "react";
import { useAuth } from "../Hooks/useAuth";
import { ShopContext } from "../../context/shopContext";


export const CustomNav = () => {
  const { logout , user  } = useAuth();
  const  cart = useContext(ShopContext)
  const productsCount = cart.cartItems.reduce((sum , Product)=> sum + Product.count ,0) 
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <div className="container">
        <Navbar.Brand className="text-light">Pitzza shop</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <p></p>
            <Link to="/Home" className="nav-link text-light">
            <FontAwesomeIcon icon={faHouse} />
            </Link>
            <Link to="/Shop" className="nav-link text-light">
              Shop
            </Link>
            <Link to="/Werbkorb" className="nav-link text-light">
              ({productsCount})<FontAwesomeIcon icon={faShoppingCart} />
            </Link>
            <BsBoxArrowRight className="mx-2 my-auto " style={{ fontSize: '1.5rem' , cursor: 'pointer'  }}  onClick={logout}/>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};
