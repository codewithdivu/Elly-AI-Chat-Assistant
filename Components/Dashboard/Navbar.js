import React from "react";

const Navbar = () => {
  return (
    <nav className="Navbar">
      <div className="logo">
        <a href="#">
          <img src="/images/elly.png" alt="Your Logo" />
        </a>
      </div>
      <ul className="nav-links">
        <li>
          <a href="#">Upgrade</a>
        </li>
        <li>
          <a href="#">Help</a>
        </li>

        <li>
          <img
            alt="Profile"
            src="/images/divu.jpg"
            style={{ height: "2rem", borderRadius: "1rem" }}
          />
        </li>
        <li style={{ marginLeft: "-0.2rem" }}>
          <a href="#">Personal</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
