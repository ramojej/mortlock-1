import React, { Component } from "react";
import { graphql } from "gatsby";

import Banner from '../components/global/banner';
import SubMenu from '../components/global-subnav';
import Layout from '../components/layout';


class Page extends Component {
  render() {

    const bannerContent = {
      banner_image: this.props.data.allWordpressPage.edges[0].node.acf.banner_image,
      banner_image_overlay: this.props.data.allWordpressPage.edges[0].node.acf.banner_image_overlay,
      banner_heading: this.props.data.allWordpressPage.edges[0].node.acf.banner_heading,
      banner_description: this.props.data.allWordpressPage.edges[0].node.acf.banner_description,
      banner_buttons: this.props.data.allWordpressPage.edges[0].node.acf.banner_buttons
    }

    return (
      <Layout>
        <Banner data={bannerContent} type="homepag" />
        <SubMenu />
        <div className="product__singlewrap">
          {/* <div className="aside__text" dangerouslySetInnerHTML={{ __html: content.mission_aside_text }} /> */}
          <div className="aside__text">Product</div>
          <div className="container">
            <div className="row">
              <div className="col-sm-4">
                <h2>Proplank <br />timber decking</h2>
                img
              </div>
              <div className="col-sm-8">
                <p>ProplankTM is a concealed fixed linear timber ceiling and wall lining. This system provides the more options than ever including mixed spacing and batten sizing. This system provides more options than ever, including mixed spacing and batten sizing, Cleverly designed, engineered spring steel clips and nylon spacers can be clicked into place according to your specifications. This system is designed to reduce installation time and material costs without compromising the aesthetics of natural timber.</p>
                img
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.</p>
              </div>
            </div>
            <div className="benefit__wrapper">
              <div className="row">
                <div className="col-sm-4">
                  <div className="benefit__image">
                    img
                  </div>
                </div>
                <div className="col-sm-8">
                  <div className="benefit__text">
                    <h2>product benefits</h2>
                    <div className="row">
                      <div className="col-sm-6">
                        <div className="icon__wrapper">
                          <div className="benefit_icon">
                            svg
                          </div>
                          <div className="benefit_text">
                            <h3>Faster Installation</h3>
                            <p>Fastening Clips act as a perfect spacer between the boards</p>
                          </div>
                        </div>
                        <div className="icon__wrapper">
                          <div className="benefit_icon">
                            svg
                          </div>
                          <div className="benefit_text">
                            <h3>Faster Installation</h3>
                            <p>Fastening Clips act as a perfect spacer between the boards</p>
                          </div>
                        </div>
                        <div className="btn__wrap">
                          <a href="#" className="learn-more">Request a quote</a>
                        </div>
                        <div className="btn__wrap">
                          <a href="#" className="learn-more">Request a quote</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="application__wrapper">
              <div className="row">
                <div className="col-sm-4">
                  <div className="application__text">
                    <div className="application__textbox">
                      <h2>applications</h2>
                      <p>Our system is extremely versatile and can be used in a variety of applications.</p>
                    </div>
                    <div className="application__iconbox">
                      <ul className="list">
                        <li>
                          <div className="icon">
                            svg
                          </div>
                          <span className="text">Structural</span>
                        </li>
                        <li>
                          <div className="icon">
                            svg
                          </div>
                          <span className="text">Structural</span>
                        </li>
                        <li>
                          <div className="icon">
                            svg
                          </div>
                          <span className="text">Structural</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-sm-8">
                  <div className="gallery__wrapper">
                    <div className="slide">
                      <div className="image">
                        img
                      </div>
                      <span className="gallery__text">His Majesty’s Theatre</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="product__description">
          <div className="container">
            <div className="product-species">
              <div className="general-heading">
                <h2>timber species</h2>
                <span className="info">Select timber species below to see their corresponding finishes</span>
              </div>
              <div className="species-boxes">
                <div className="row">
                  <div className="col-sm-3">
                    <div className="species-box">
                      <div className="image">
                        img
                        <span className="button">View finishes</span>
                      </div>
                      <span className="title">american oak</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="shapes__boxes">
              <div className="general-heading">
                <h2>batten shapes & sizes</h2>
              </div>
              <div className="row">
                <div className="col-sm-4">
                  <div className="shape__column">
                    <span className="title">block profile</span>
                    <ul className="block-icons">
                      <li>
                        <div className="block-iconwrap">
                          svg
                          <span className="text">30mm x 20mm</span>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="installation__block">
              <div className="row">
                <div className="col-sm-6">
                  <div className="installation__text">
                    <h2>Installation</h2>
                    <p>Fusce vulputate eleifend sapien. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus. Nullam accumsan lorem in dui. Cras ultricies mi eu turpis hendrerit fringilla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In ac dui quis mi consectetuer lacinia. </p>
                    <a href="#" className="learn-more">View Installation Guide</a>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="installation__image">
                    img
                  </div>
                </div>
              </div>
            </div>
            <div className="useful__info">
              <h2>Useful Info</h2>
              <div className="info__slider">
                <div className="slide">
                  <div className="info__box">
                    <div className="icon">
                      svg
                    </div>
                    <h4>warranty</h4>
                    <p>High degree of natural durability and strength</p>
                    <a href="#" className="link">Download PDF</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="faq__block">
              <div className="general-heading">
                <h2>FAQS</h2>
                <span className="info">Select timber species below to see their corresponding finishes</span>
              </div>
              <div className="faq__List">
                <div className="faq__item">
                  <span className="title">What size decking joists should I use?</span>
                  <div className="faq__slide">
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. </p>
                  </div>
                </div>
                <div className="faq__item">
                  <span className="title">What size decking joists should I use?</span>
                  <div className="faq__slide">
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. </p>
                  </div>
                </div>
              </div>
            </div>v
          </div>
        </div>
        <div className="pricing__block">
          <div className="container">
            <div className="row">
              <div className="col-sm-7">
                <div className="pricing__text">
                  <h2>proplank pricing</h2>
                  <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. </p>
                  form
                </div>
              </div>
              <div className="col-sm-5">
                <div className="price__image">
                  img
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="request__block">
          <div className="container">
            <div className="col-sm-7">
              <div className="request__text">
                <h2>request sample</h2>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. </p>
                <div className="request__image">
                  img
                </div>
              </div>
            </div>
            <div className="col-sm-5">
              form
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default Page

export const pageQuery = graphql`
  query {
    allWordpressPage(filter: {template: {eq: "template-product-single.php"}}) {
      edges {
        node {
          acf {
            banner_image {
              localFile {
                childImageSharp {
                  fluid(maxWidth: 1800) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
            }
            banner_image_overlay
            banner_heading
            banner_description
            banner_buttons {
              button_link
              button_style
              button_text
            }
          }
        }
      }
    }
  }
`