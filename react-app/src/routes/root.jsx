import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

const Root = () => {
  return (
    <div className="wrapper">
      <Header />
      <main>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default Root;
