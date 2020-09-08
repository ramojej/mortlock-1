import React from 'react';
import { Helmet } from "react-helmet";

import Header from './layout-header';
import Footer from './layout-footer';

import "../assets/scss/global.scss";


const Layout = ({ children, ...props }) => (
  <div id="wrapper">
    <Helmet>
      <meta name="google-site-verification" content="uq4BT0wioWTKh3iydY6Hth4riwR84fRko8CCUaqdn-0" />
    </Helmet>
    <Header color={props.headerColor} />
    <main id="main">{children}</main>
    <Footer />
  </div>
)

export default Layout