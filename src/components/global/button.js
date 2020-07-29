import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';

const Button = ({ ...props }) =>  {
  const content = props.contentData;
  

  if(props.type === "external") {
    return (
      <a href={(props.link) ? props.link : '/'} className="button">{(props.text) ? props.text : 'Learn more'}</a>
    )
  } else {
    return (
      <Link to={(props.link) ? props.link : '/' } className="button">{(props.text) ? props.text : 'Learn more'}</Link>
    )
  }
}

export default Button;