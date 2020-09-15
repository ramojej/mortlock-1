import React from 'react';
import { Helmet } from "react-helmet";

import Header from './layout-header';
import Footer from './layout-footer';

import "../assets/scss/global.scss";


const LayoutLanding = ({ children, ...props }) => (
  <div id="wrapper" className="landingPage">
    <Header color={props.headerColor} />
    <main id="main">{children}</main>
    <Footer />
  </div>
)

export default LayoutLanding