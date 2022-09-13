import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <Link style={{ margin: "5px" }} to="/">
        Home
      </Link>
      <Link style={{ margin: "5px" }} to="/about">
        About
      </Link>
      <Link style={{ margin: "5px" }} to="/profile">
        Profile
      </Link>

      {/* <NavLink
        style={{ margin: "5px" }}
        className={(navData) => (navData.isActive ? "active" : "")}
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        style={{ margin: "5px" }}
        className={(navData) => (navData.isActive ? "active" : "")}
        to="/about"
      >
        About
      </NavLink>
      <NavLink
        style={{ margin: "5px" }}
        className={(navData) => (navData.isActive ? "active" : "")}
        to="/profile"
      >
        Profile
      </NavLink> */}
    </div>
  );
}
