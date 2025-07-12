import React from "react";
import { Link } from "react-router-dom";
import "./TopNav.css";

function TopNav() {
  return (
    <nav className="navbar navbar-expand-lg bg-white ms-5 border-bottom">
      <div className="container-fluid ms-5">
        <img src='media/logo (1).svg'style={{width:'12%'}} className="ps-4"/>

        <div clasName="me-5" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item ">
              <Link className="nav-link me-2" to="/signup" >
                Signup
              </Link >
            </li>
            <li className="nav-item">
              <Link className="nav-link me-2" to="/about">
               About
              </Link>
            </li>
            <li className="nav-item ">
              <Link className="nav-link me-2" to="/products">
               Products
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link me-2" to="/pricing">
                Pricing
              </Link>
            </li>
            <li className="nav-item ">
              <Link className="nav-link  me-3" to="/support">
               Support&nbsp;&nbsp;&nbsp;&nbsp;<i className="fa-solid fa-bars"></i>
              </Link>
            </li>
            
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default TopNav;
