import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import Slider from "react-slick";

const GlobalSubNav = ({ ...props }) =>  {
  const content = props.contentData;

  return (
    <div className="subnav__holder">
      <div className="container">
        <ul className="subnav">
          <li><a href="#">Our History</a></li>
          <li><a href="#">Mission</a></li>
          <li><a href="#">Sustainability</a></li>
          <li><a href="#">Architects</a></li>
        </ul>
      </div>
    </div>
  )
}

export default GlobalSubNav;