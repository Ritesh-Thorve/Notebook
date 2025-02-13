import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Home from "./Home";
import About from "./About";

function Navbar() {
  let location = useLocation();

  useEffect(() => {
  }, [location]);

  return (
    <nav className="navbar bg-amber-100 flex justify-between border-b-2 border-orange-500 h-14 items-center">
      <div>
        <ul className="flex gap-10 ml-10">
          <li className="font-black text-2xl">Note-Book</li>
          <li className="mt-1">
            <Link className={`${location.pathname === "/" ? "active" : ""} text no-underline`} to="/">Home</Link>
          </li>
          <li className="mt-1">
            <Link className={`${location.pathname === "/about" ? "active" : ""}  no-underline`} to="/about">About</Link>
          </li>
        </ul>
      </div>

      <div>
         <Link to={'/login'}><button type="button"className="btn btn-outline-secondary mx-1 ">Login</button></Link>
         <Link to={'/signup'}><button type="button"className="btn btn-outline-secondary mx-1 ">Signup</button></Link>         
      </div>
    </nav>
  );
}

export default Navbar;
