import React from 'react';
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        {/* <a className="navbar-brand" href="#">Singano Tanatswa</a> */}
        <Link className="nav-link" to="/">Tanatswa Singano</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to='/portfolio'>Portfolio</Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/contact">Contact</Link>
            </li>

          </ul>
        </div>
      </nav>
    </div>
  );
}
export default Navbar;