import React, { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAlert } from "../context/note/alert/alertContext";

function Navbar() {
  let location = useLocation();
  const alert = useAlert();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    alert.success("Logged Out Successfully!");
    navigate("/login");
  };

  useEffect(() => {}, [location]);

  return (
    <nav className="bg-white shadow-md  top-0 left-0 w-full flex justify-between items-center px-8 h-12 border-b border-gray-200 z-50">
      {/* 🔹 Logo & Navigation Links */}
      <div className="flex items-center gap-8">
        <h3 className="text-sm">Note-Mate</h3>
         <div className="pr-0">
         <ul className="flex gap-6 ">
          <li>
            <Link
              className={`${
                location.pathname === "/" ? "text-orange-500 font-semibold" : "text-gray-700"
              } hover:text-orange-500 transition-all text-m no-underline`}
              to="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className={`${
                location.pathname === "/about" ? "text-orange-500 font-semibold" : "text-gray-700"
              } hover:text-orange-500 transition-all text-m no-underline`}
              to="/about"
            >
              About
            </Link>
          </li>
        </ul>
         </div>
      </div>

      {/* 🔹 Authentication Buttons */}
      {!localStorage.getItem("token") ? (
        <div className="flex gap-4">
          <Link to="/login">
            <button className="px-4 py-1 border-2 border-orange-500 text-orange-500 rounded-full hover:bg-orange-500 hover:text-white transition-all">
              Login
            </button>
          </Link>
          <Link to="/signup">
            <button className="px-4 py-1 border-2 border-gray-400 text-gray-700 rounded-lg hover:bg-gray-700 hover:text-white transition-all">
              Signup
            </button>
          </Link>
        </div>
      ) : (
        <button
          onClick={handleLogout}
          className="px-4 py-2 border-2 border-red-500 text-red-500 rounded-lg hover:bg-red-500 hover:text-white transition-all"
        >
          Log Out
        </button>
      )}
    </nav>
  );
}

export default Navbar;
