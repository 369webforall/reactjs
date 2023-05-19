import React from 'react';
import './Sub.css';
const Subscription = () => {
  return (
    <section className="sub">
      <div className="wrapper">
        <div className="sub__row">
          <div className="sub-left">
            <h3> Get early access today</h3>
            <p>
              {' '}
              It only takes a minute to sign up and our free starter tier is
              extremely generous. If you have any questions, our support team
              would be happy to help you.
            </p>
          </div>
          <div className="sub-right">
            <div className="sub-row">
              <input type="text" placeholder="Enter your email" />
              <button>Get Started For Free</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subscription;
