import React from 'react';

import Header from './layout-header';
import LandingFooter from './layout-landing-footer';

import "../assets/scss/global.scss";


const LayoutLanding = ({ children, ...props }) => (
  <div id="wrapper" className="landingPage">
    <Header color={props.headerColor} />
    <main id="main">{children}</main>
    <LandingFooter />
  </div>
)

export default LayoutLanding