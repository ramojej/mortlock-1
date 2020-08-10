import React, { Component } from "react";
import { graphql } from "gatsby";
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';

import Layout from "../components/layout";
import Banner from '../components/global/banner';

const exampleMapStyles = [
  {
      featureType: "poi",
      elementType: "geometry",
      stylers: [
          {
              color: "#eeeeee",
          },
      ],
  },
  {
      featureType: "poi",
      elementType: "labels.text",
      stylers: [
          {
              visibility: "off",
          },
      ],
  },
  {
      featureType: "water",
      elementType: "labels.text.fill",
      stylers: [
          {
              color: "#9e9e9e",
          },
      ],
  },
];

const mapContainerStyle = {
  height: "887px",
  width: "100%"
}

const center = {
  lat: 0,
  lng: -180
}

const position = {
  lat: 37.772,
  lng: -122.214
}

const divStyle = {
  background: `white`,
  border: `1px solid #ccc`,
  padding: 15
}

const onLoad = polygon => {
  console.log("polygon: ", polygon);
}

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
        <Banner data={bannerContent} />
        <div className="contact__wrapper">
          <div className="container">
            <div className="row">
              <div className="col-sm-4">
                <div className="contact__desc">
                  <h2>get in touch</h2>
                  <p>If you’re looking for product advice, have a query about your order or have any questions regarding our website feel free to drop us a line or send us an email using the contact form provided.</p>
                  <ul className="info__list">
                    <li>
                      <span className="ico_wrap">
                      <svg className="icon" viewBox="0 0 100 100"><path d="m37.496 38.379 3.3438-5.0078c1.0312-1.5508 1.0547-3.5703 0.054687-5.1406l-10.008-15.73-11.914 3.9688c-4.8359 1.6133-7.5859 6.8008-6.043 11.66 2.6914 8.4609 8.875 21.926 22.949 35.992 14.066 14.07 27.527 20.254 35.992 22.949 4.8594 1.5469 10.047-1.207 11.66-6.0469l3.9648-11.906-15.723-10.008c-1.5742-1.0039-3.5938-0.98438-5.1445 0.050781l-5.0078 3.3398c-1.5312 1.0195-3.5039 1.0781-5.0664 0.10547-2.5469-1.582-6.6211-4.4062-10.688-8.4766-4.0703-4.0664-6.8945-8.1367-8.4727-10.684-0.97266-1.5625-0.91797-3.5352 0.10156-5.0664"/></svg>
                      </span>
                      <div className="text_wrap">
                        <span className="title">phone</span>
                        <span className="text">1800 953 004</span>
                      </div>
                    </li>
                    <li>
                      <span className="ico_wrap">
                      <svg className="icon" viewBox="0 0 100 100"><path d="m37.496 38.379 3.3438-5.0078c1.0312-1.5508 1.0547-3.5703 0.054687-5.1406l-10.008-15.73-11.914 3.9688c-4.8359 1.6133-7.5859 6.8008-6.043 11.66 2.6914 8.4609 8.875 21.926 22.949 35.992 14.066 14.07 27.527 20.254 35.992 22.949 4.8594 1.5469 10.047-1.207 11.66-6.0469l3.9648-11.906-15.723-10.008c-1.5742-1.0039-3.5938-0.98438-5.1445 0.050781l-5.0078 3.3398c-1.5312 1.0195-3.5039 1.0781-5.0664 0.10547-2.5469-1.582-6.6211-4.4062-10.688-8.4766-4.0703-4.0664-6.8945-8.1367-8.4727-10.684-0.97266-1.5625-0.91797-3.5352 0.10156-5.0664"/></svg>
                      </span>
                      <div className="text_wrap">
                        <span className="title">phone</span>
                        <span className="text">1800 953 004</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-sm-offset-1 col-sm-7">
                <form className="contact__form" action="#">
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="form_group">
                        <label htmlFor="firstname">first name</label>
                        <div className="form_input">
                          <input type="text" name="firstname" placeholder="Enter your first name" />
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form_group">
                        <label htmlFor="lastname">last name</label>
                        <div className="form_input">
                          <input type="text" name="lastname" placeholder="Enter your last name" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="form_group">
                        <label htmlFor="email">Email</label>
                        <div className="form_input">
                          <input type="text" name="email" placeholder="Enter your email address" />
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form_group">
                        <label htmlFor="phone">Phone</label>
                        <div className="form_input">
                          <input type="text" name="phone" placeholder="Enter your phone number" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="form_group">
                    <label htmlFor="company">company name</label>
                    <div className="form_input">
                      <input type="text" name="company" placeholder="Enter company name" />
                    </div>
                  </div>
                  <div className="form_group">
                    <label htmlFor="whoareyou">are you a/an</label>
                    <div className="form_input">
                      <select name="whoareyou">
                        <option>Architect/Specifier</option>
                        <option>Builder</option>
                        <option>Contractor/Carpenter</option>
                        <option>Individual/Owner Builder</option>
                      </select>
                    </div>
                  </div>
                  <div className="form_group">
                    <label htmlFor="message">Message</label>
                    <div className="form_input">
                      <textarea name="message" placeholder="Please leave a detailed message here..." name="message"></textarea>
                    </div>
                  </div>
                  <div className="btn_wrap">
                    <button className="button" type="submit">Submit</button>
                  </div>
                </form>
                <div className="map_heading">
                  <h2>OFFICES &amp; LOCATIONS (AUSTRALIA WIDE DELIVERY SERVICE AVAILABLE)</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="map__block">
          <LoadScript
          googleMapsApiKey="AIzaSyBbIerZtfMMgQ4UtzbkItzFEkv9uuSa5uM"
          >
            <GoogleMap
              mapContainerStyle={mapContainerStyle}
              zoom={2}
              center={center}
              mapStyles={ exampleMapStyles }
            >
              { /* Child components, such as markers, info windows, etc. */ }
              <Marker
                onLoad={onLoad}
                position={position}
              >
                <InfoWindow
                  onLoad={onLoad}
                  position={position}
                >
                  <div style={divStyle}>
                    <h1>InfoWindow</h1>
                  </div>
                </InfoWindow>
              </Marker>
            </GoogleMap>
          </LoadScript>
        </div>
      </Layout>
    )
  }
}

export default Page

export const pageQuery = graphql`
  query {
    allWordpressPage(filter: {template: {eq: "template-contact.php"}}) {
      edges {
        node {
          acf {
            banner_image {
              localFile {
                childImageSharp {
                  fluid(maxWidth: 1170) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
            }
            banner_heading
            banner_description
            banner_image_overlay
          }
        }
      }
    }
  }
`