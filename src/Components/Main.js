import React from "react";
import { NavLink } from "react-router-dom";

export default function Main() {
  return (
    <nav>
      <div>
        <h2>Restaurant</h2>
        <NavLink to="/rest-login">
          Login
        </NavLink>
        <NavLink to="/rest-register">
          Register
        </NavLink>
        <NavLink to='/add-dish'>
          Add Dish
        </NavLink>
        <NavLink to='/search'>
          Search
        </NavLink>
      </div>
    </nav>
  );
}
