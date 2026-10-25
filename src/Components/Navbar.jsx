import logo from "../assets/luffy.jpg";
import { NavLink } from "react-router";

function Navbar() {
  return (
    <header>
      <div className="brand">
        <NavLink to="/home">
          <img className="brand-logo" src={logo} alt="Market Place" />
        </NavLink>
      </div>

      <nav>
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/services">Services</NavLink>
        <NavLink to="/cart">Cart</NavLink>
      </nav>

      <div className="auth-links">
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/register">Register</NavLink>
      </div>
    </header>
  );
}

export default Navbar;