import React, { Component } from "react";
import { graphql } from "gatsby";
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

import Layout from "../components/layout";
import SEO from "../components/seo";
import Banner from '../components/global/banner';

import ContactForm from '../components/forms/contact-form-137';

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
  height: "600px",
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

const onLoad = polygon => {
  
}

class Page extends Component {
  render() {
    const bannerContent = {
      banner_image: this.props.data.allWordpressPage.edges[0].node.acf.contact_banner_image,
      banner_image_overlay: this.props.data.allWordpressPage.edges[0].node.acf.contact_banner_image_overlay,
      banner_heading: this.props.data.allWordpressPage.edges[0].node.acf.contact_banner_heading,
      banner_description: this.props.data.allWordpressPage.edges[0].node.acf.contact_banner_description,
      banner_buttons: this.props.data.allWordpressPage.edges[0].node.acf.contact_banner_buttons,
      banner_type: 'medium'
    }

    return (
      <Layout>
        <Banner data={bannerContent} />
        <SEO 
          description={this.props.data.allWordpressPage.edges[0].node.yoast.metadesc} 
          title={this.props.data.allWordpressPage.edges[0].node.yoast.title} 
        />
        <div className="contact__wrapper">
          <div className="container">
            <div className="row">
              <div className="col-sm-4">
                <div className="contact__desc">
                  <h2 dangerouslySetInnerHTML={{ __html: this.props.data.allWordpressPage.edges[0].node.acf.contact_heading }} />
                  <div dangerouslySetInnerHTML={{ __html: this.props.data.allWordpressPage.edges[0].node.acf.contact_general_description }} />
                  <ul className="info__list">
                    <li>
                      <span className="ico_wrap">
                      <svg className="icon" viewBox="0 0 100 100"><path d="m37.496 38.379 3.3438-5.0078c1.0312-1.5508 1.0547-3.5703 0.054687-5.1406l-10.008-15.73-11.914 3.9688c-4.8359 1.6133-7.5859 6.8008-6.043 11.66 2.6914 8.4609 8.875 21.926 22.949 35.992 14.066 14.07 27.527 20.254 35.992 22.949 4.8594 1.5469 10.047-1.207 11.66-6.0469l3.9648-11.906-15.723-10.008c-1.5742-1.0039-3.5938-0.98438-5.1445 0.050781l-5.0078 3.3398c-1.5312 1.0195-3.5039 1.0781-5.0664 0.10547-2.5469-1.582-6.6211-4.4062-10.688-8.4766-4.0703-4.0664-6.8945-8.1367-8.4727-10.684-0.97266-1.5625-0.91797-3.5352 0.10156-5.0664"/></svg>
                      </span>
                      <div className="text_wrap">
                        <span className="title">phone</span>
                        <span className="text"><a href="tel:1800870452">1800 870 452</a></span>
                      </div>
                    </li>
                    <li>
                      <span className="ico_wrap">
                        <svg className="icon" width="100pt" height="100pt" version="1.1" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="m50.172 57.094l44.637-37.715h-89.617z"/><path d="m66.781 47.75l32.871 30.105c0.34766-0.69141 0.34766-1.3828 0.34766-2.4219v-50.863c0-1.7305-0.34766-2.7695-1.3828-3.8047l-31.832 26.988z"/><path d="m3.1133 80.277c0.69141 0 1.3828 0.34766 2.0742 0.34766h89.965c0.69141 0 1.3828-0.34766 1.7305-0.34766l-32.871-30.449-12.805 10.727c-0.69141 0.69141-1.7305 0.69141-2.0742 0l-13.148-10.727z"/><path d="m0 75.434c0 1.0391 0.34766 1.7305 0.69141 2.4219l32.871-30.105-31.832-26.988c-1.0391 1.0391-1.7305 2.0742-1.7305 3.8047z"/></svg>
                      </span>
                      <div className="text_wrap">
                        <span className="title">email</span>
                        <span className="text">&#105;&#110;&#102;&#111;&#064;&#109;&#111;&#114;&#116;&#108;&#111;&#099;&#107;&#046;&#099;&#111;&#109;&#046;&#097;&#117;</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-sm-offset-1 col-sm-7">
                <ContactForm />
                <div className="map_heading">
                  <h2 dangerouslySetInnerHTML={{ __html: this.props.data.allWordpressPage.edges[0].node.acf.location_heading }} />
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
                {/* <InfoWindow
                  onLoad={onLoad}
                  position={position}
                >
                  <div style={divStyle}>
                    <h1>InfoWindow</h1>
                  </div>
                </InfoWindow> */}
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
          yoast {
            title
            metadesc
          }
          acf {
            contact_banner_image {
              localFile {
                childImageSharp {
                  fluid(maxWidth: 1170) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
            }
            contact_banner_image_overlay
            contact_banner_heading
            contact_banner_description
            contact_banner_buttons {
              contact_button_text
              contact_button_link
              contact_button_style
            }
            contact_heading
            location_heading
            contact_general_description
            mortlock_location {
              location_title
              location_sub_heading
              location_latitude
              location_longitude
            }
          }
        }
      }
    }
  }
`