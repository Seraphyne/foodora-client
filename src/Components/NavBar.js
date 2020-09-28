import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <nav>
      <div>
        <h2>Restaurant</h2>
        <NavLink to="/rest-login">Login</NavLink>
        <NavLink to="/rest-register">Register</NavLink>
      </div>
    </nav>
  );
}
