import React from "react";
import "../styles/navbar.css";

const Navbar = ({ setShow, size, dark, ThemeClick }) => {
  return (
    <nav className={`${dark ? "nav-dark" : "nav"}`}>
      <div className="nav_box">
        <span className="my_shop" onClick={() => setShow(true)}>
          My Restaurant
        </span>
        <div className="cart" onClick={() => setShow(false)}>
          <span>
            <i className="fas fa-cart-plus"></i>
          </span>
          <span>{size}</span>
        </div>
        <span onClick={ThemeClick} className={`light`}>Switch</span>
      </div>
    </nav>
  );
};

export default Navbar;
