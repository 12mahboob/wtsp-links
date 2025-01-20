import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="bg-gray-900 text-gray-100 py-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold hover:text-indigo-400">
          WhatsApp Groups
        </Link>
        <div>
          <Link to="/" className="px-4 py-2 hover:text-indigo-400">
            Home
          </Link>
          <Link to="/admin-login" className="px-4 py-2 hover:text-indigo-400">
            Admin Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
