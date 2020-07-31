import React from 'react';

const GlobalSubNav = ({ ...props }) =>  {
  return (
    <div className="subnav__holder">
      <div className="container">
        <ul className="subnav">
          <li><a href="https://dilate.com.au">Our History</a></li>
          <li><a href="https://dilate.com.au">Mission</a></li>
          <li><a href="https://dilate.com.au">Sustainability</a></li>
          <li><a href="https://dilate.com.au">Architects</a></li>
        </ul>
      </div>
    </div>
  )
}

export default GlobalSubNav;