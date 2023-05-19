import React from 'react';
import logo from '../images/logo1.svg';
import './Footer.css';
import { FaFacebook, FaTwitter } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="wrapper">
        <div className="footer__row">
          <div className="footer-left">
            <div className="footer-logo">
              <img src={logo} alt="logo" />
            </div>
            <p>Phone: +1-543-123-4567</p>
            <p>example@fylo.com</p>
          </div>
          <div className="footer-right">
            <div className="right-row">
              <div className="one">
                <ul>
                  <li>About Us</li>
                  <li>Jobs Press</li>
                  <li>Blog</li>
                </ul>
              </div>
              <div className="two">
                <ul>
                  <li>Contact Us</li>
                  <li>Terms</li>
                  <li>Privacy</li>
                </ul>
              </div>
              <div className="three">
                <ul className="social-icon">
                  <li>
                    <a href="/">
                      <FaFacebook />
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <FaTwitter />
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <AiFillInstagram />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
