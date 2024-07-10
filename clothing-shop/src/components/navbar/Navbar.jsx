import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.jpg"
import "./Navbar.css"

export const Navbar = () => {
  return <div className="navbox">
    <div className="leftside">
        <img src={logo} alt="" />
    </div>
    <div className="rightside">
        <Link to={"/register"} className="navlinks">Register</Link>
        <Link to={"/login"} className="navlinks">Login</Link>
    </div>
    
    </div>;
};
