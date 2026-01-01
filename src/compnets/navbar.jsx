import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import "../pagesCss/nav.css";

const Navbar = () => {
  const menuRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Close menu when a link is clicked
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    if (isOpen) {
      gsap.to(menuRef.current, {
        duration: 0.5,
        x: 0,
        opacity: 1,
        display: "flex",
      });
    } else {
      gsap.to(menuRef.current, {
        duration: 0.5,
        x: 100, // slides out to the right
        opacity: 0,
        display: "none",
      });
    }
  }, [isOpen]);

  return (
    <div className="nav">
      {/* Logo */}
      <div className="box1">
        <h1>Welcome to My Portfolio</h1>
      </div>

      {/* Desktop Menu */}
      <div className="box2 desktop-menu">
        <Link to="/" onClick={handleLinkClick}>Home</Link>
        <Link to="/about" onClick={handleLinkClick}>About</Link>
        <Link to="/skills" onClick={handleLinkClick}>Skills</Link>
        <Link to="/project" onClick={handleLinkClick}>Project</Link>
        <Link to="/contact" onClick={handleLinkClick}>Contact</Link>
      </div>

      {/* Hamburger Icon */}
      <div className={`hamburger ${isOpen ? "open" : ""}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Mobile Menu */}
      <div className="box2 mobile-menu" ref={menuRef}>
        <Link to="/" onClick={handleLinkClick}>Home</Link>
        <Link to="/about" onClick={handleLinkClick}>About</Link>
        <Link to="/skills" onClick={handleLinkClick}>Skills</Link>
        <Link to="/project" onClick={handleLinkClick}>Project</Link>
        <Link to="/contact" onClick={handleLinkClick}>Contact</Link>
      </div>
    </div>
  );
};

export default Navbar;
