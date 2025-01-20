import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">Group Links</Link>
        <ul className="flex space-x-4">
          <li><Link to="/admin-login">Admin Login</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;