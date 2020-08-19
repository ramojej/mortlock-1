import React from 'react';

const GlobalSubNav = ({ ...props }) =>  {
  return (
    <div className="subnav__holder">
      <div className="container">
        <ul className="subnav">
          {props.data ? props.data.map((item, index) => (
            <li key={index}><a href={`#${item}`}>{item.replace('-', ' ')}</a></li>
          )) : null }
        </ul>
      </div>
    </div>
  )
}

export default GlobalSubNav;