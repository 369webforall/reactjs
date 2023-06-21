import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="bg-purple-400 py-4">
      <nav className="container mx-auto flex justify-between items-center">
        <h1>context-reducer</h1>

        <ul className="flex gap-4">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/basket">Basket</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
