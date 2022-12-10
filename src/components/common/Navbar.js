import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <Link to='/'>linelind | Frontend developer</Link>
      <div className='navLinks'>
        <Link to='/'>About</Link>
        <Link to='/projects'>Projects</Link>
        <Link to='/resume'>Resume</Link>
      </div>
    </nav>
  );
}

export default NavBar;
