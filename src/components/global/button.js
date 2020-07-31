import React from 'react';
import { Link } from 'gatsby';

const Button = ({ ...props }) =>  {
  if(props.type === "external") {
    return (
      <a href={(props.link) ? props.link : '/'} className={(props.style) ? 'button ' + props.style : 'button'}>{(props.text) ? props.text : 'Learn more'}</a>
    )
  } else {
    return (
      <Link to={(props.link) ? props.link : '/' } className={(props.style) ? 'button ' + props.style : 'button'}>{(props.text) ? props.text : 'Learn more'}</Link>
    )
  }
}

export default Button;