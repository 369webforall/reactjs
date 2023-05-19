import React from 'react';
import works from '../images/illustration-2.svg';
import arrow from '../images/icon-arrow.svg';
import quotes from '../images/icon-quotes.svg';
import avatar from '../images/avatar-testimonial.jpg';
import './Works.css';
const Works = () => {
  return (
    <section className="works">
      <div className="wrapper">
        <div className="works__row">
          <div className="works-left">
            <h2>Stay productive, wherever you are</h2>
            <p className="work-p">
              Never let location be an issue when accessing your files. Fylo has
              you covered for all of your file storage needs. Securely share
            </p>
            <p className="work-p">
              files and folders with friends, family and colleagues for live
              collaboration. No email attachments required!
            </p>
            <a href="/">
              See how Fylo works{' '}
              <span className="arrow">
                <img src={arrow} alt="arrow" />
              </span>{' '}
            </a>

            <div className="quote">
              <span className="quote-icon">
                <img src={quotes} alt="quote" />
              </span>
              <p className="quote-p">
                {' '}
                Fylo has improved our team productivity by an order of
                magnitude. Since making the switch our team has become a
                well-oiled collaboration machine.
              </p>

              <div className="user">
                <img className="avatar" src={avatar} alt="avatar" />
                <div className="avatar-text">
                  <h3>Kyle Burton</h3>
                  <p>Founder & CEO, Huddle</p>
                </div>
              </div>
            </div>
          </div>
          <div className="works-right">
            <img src={works} alt="works" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Works;
