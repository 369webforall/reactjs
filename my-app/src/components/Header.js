import React from 'react';
import logo from '../images/logo.svg';
import './Header.css';
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <>
      <header className="header">
        <div className="wrapper row">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/feature">Feature</Link>
              </li>
              <li>
                <Link to="/team">Team</Link>
              </li>
              <li>
                <Link to="/signin">Sign in</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
