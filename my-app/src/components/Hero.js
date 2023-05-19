import React from 'react';
import './Hero.css';
import hero from '../images/illustration-1.svg';
const Hero = () => {
  return (
    <section className="hero wrapper">
      <div className="hero__row">
        <div className="hero-left">
          <h1>All your files in one secure location, accessible anywhere.</h1>
          <p>
            {' '}
            Fylo stores your most important files in one secure location. Access
            them wherever you need, share and collaborate with friends, family,
            and co-workers.
          </p>
          <div className="hero-left-btn">
            <input type="text" placeholder="Enter your email" />
            <button>Get Started</button>
          </div>
        </div>
        <div className="hero-right">
          <img src={hero} alt="hero" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
