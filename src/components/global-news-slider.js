import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import Slider from "react-slick";

const GlobalNewsSlider = ({ ...props }) =>  {
  const content = props.contentData;

  const sliderSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false
  };

  return (
    <div className="news__block">
      <div className="container">
        <h2>latest from us</h2>
        <Slider className="news__slider" {...sliderSettings}>
          {content.map((article) => (
            <div className="slide" key={article.node.wordpress_id}>
              <div className="article">
                <span className="article__date">{article.node.date}</span>
                <div className="news_image">
                  <Img fluid={article.node.featured_media.localFile.childImageSharp.fluid} alt="Alternative Text" />
                </div>
                <div className="article_text">
                  <h3><Link to={article.node.path}>{article.node.title}</Link></h3>
                  <div dangerouslySetInnerHTML={{ __html: article.node.excerpt }} />
                  <Link to={article.node.path} className="read-more">Read more</Link>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default GlobalNewsSlider;