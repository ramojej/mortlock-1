import React from 'react';

import Header from './layout-header';
import Footer from './layout-footer';

import "../assets/scss/global.scss";


const Layout = ({ children, ...props }) => (
  <div id="wrapper">
    <Header />
    <main id="main">{children}</main>
    <Footer />
  </div>
)

export default Layout