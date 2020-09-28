import React from "react";
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <footer>
      <NavLink className='footer-router' to="/about">About |</NavLink>
      <NavLink className='footer-router' to="/contact">Contact |</NavLink>
      <NavLink className='footer-router' to="/help">Help</NavLink>
    </footer>
  );
}
