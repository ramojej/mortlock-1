import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';

const Button = ({ ...props }) =>  {
  const content = props.contentData;

  return (
    <a href="https://dilate.com.au">Button</a>
  )
}

export default Button;