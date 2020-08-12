import React, { Component } from "react";
import { graphql } from "gatsby";

import SEO from "../components/seo";
import Layout from "../components/layout";
import Banner from "../components/global/banner";
import GeneralText from "../components/general-text";
import GlobalNewsSlider from "../components/global-news-slider";
import GlobalTestimonialSlider from "../components/global-testimonial-slider";
import GlobalSuccessStory from "../components/global-success-slider";
import GlobalProjectSlider from "../components/global-projects-slider";

import "../assets/scss/global.scss";

class IndexPage extends Component {
  render() {
    const bannerContent = this.props.data.allWordpressPage.edges[0].node.acf.banner_slider;
    
    const aboutContent = {
      alignImage: this.props.data.allWordpressPage.edges[0].node.acf.align_about_image,
      description: this.props.data.allWordpressPage.edges[0].node.acf.about_description,
      image: this.props.data.allWordpressPage.edges[0].node.acf.about_image,
      buttonText: this.props.data.allWordpressPage.edges[0].node.acf.about_button_text,
      buttonLink: this.props.data.allWordpressPage.edges[0].node.acf.about_button_link,
      showButton: this.props.data.allWordpressPage.edges[0].node.acf.show_button_under_about_description
    }
    const imageBlock = {
      alignImage: this.props.data.allWordpressPage.edges[0].node.acf.align_main_image,
      description: this.props.data.allWordpressPage.edges[0].node.acf.general_description,
      image: this.props.data.allWordpressPage.edges[0].node.acf.main_image
    }

    const pricingBlock = {
      alignImage: this.props.data.allWordpressPage.edges[0].node.acf.align_pricing_image,
      description: this.props.data.allWordpressPage.edges[0].node.acf.pricing_description,
      image: this.props.data.allWordpressPage.edges[0].node.acf.pricing_image,
      buttonText: this.props.data.allWordpressPage.edges[0].node.acf.pricing_button_text,
      buttonLink: this.props.data.allWordpressPage.edges[0].node.acf.pricing_button_link,
      showButton: this.props.data.allWordpressPage.edges[0].node.acf.show_button_under_pricing_description
    }

    const timberDecking = {
      alignImage: this.props.data.allWordpressPage.edges[0].node.acf.align_decking_image,
      description: this.props.data.allWordpressPage.edges[0].node.acf.decking_description,
      image: this.props.data.allWordpressPage.edges[0].node.acf.decking_image,
      buttonText: this.props.data.allWordpressPage.edges[0].node.acf.decking_button_text,
      buttonLink: this.props.data.allWordpressPage.edges[0].node.acf.decking_button_link,
      showButton: this.props.data.allWordpressPage.edges[0].node.acf.show_button_under_decking_description
    }

    const timberWalls = {
      alignImage: this.props.data.allWordpressPage.edges[0].node.acf.align_walls_image,
      description: this.props.data.allWordpressPage.edges[0].node.acf.walls_description,
      image: this.props.data.allWordpressPage.edges[0].node.acf.walls_image,
      buttonText: this.props.data.allWordpressPage.edges[0].node.acf.wall_button_text,
      buttonLink: this.props.data.allWordpressPage.edges[0].node.acf.wall_button_link,
      showButton: this.props.data.allWordpressPage.edges[0].node.acf.show_button_under_wall_description
    }

    const timberCeilings = {
      alignImage: this.props.data.allWordpressPage.edges[0].node.acf.align_image,
      description: this.props.data.allWordpressPage.edges[0].node.acf.ceilings_description,
      image: this.props.data.allWordpressPage.edges[0].node.acf.ceilings_image,
      buttonText: this.props.data.allWordpressPage.edges[0].node.acf.button_text,
      buttonLink: this.props.data.allWordpressPage.edges[0].node.acf.button_link,
      showButton: this.props.data.allWordpressPage.edges[0].node.acf.show_button_under_description
    }

    const generalContent = {
      successStory: this.props.data.allWordpressPage.edges[0].node.acf.show_success_stories,
      latestProject: this.props.data.allWordpressPage.edges[0].node.acf.show_latest_projects,
      latestArticle: this.props.data.allWordpressPage.edges[0].node.acf.show_latest_articles,
      testimonials: this.props.data.allWordpressPage.edges[0].node.acf.show_testimonials
    }

    const latestArticles = this.props.data.allWordpressPost.edges;
    const latestProjects = this.props.data.allWordpressWpProjects.edges;

    const latestSuccessStories = {
      successTitle: this.props.data.allWordpressAcfOptions.edges[0].node.options.success_stories_heading,
      successStories: this.props.data.allWordpressAcfOptions.edges[0].node.options.success_stories,
    }
    const latestTestomonial = {
      testimonialHeading: this.props.data.allWordpressAcfOptions.edges[0].node.options.client_testimonials_heading,
      allTestimonials: this.props.data.allWordpressAcfOptions.edges[0].node.options.client_testimonials,
    }

    console.log(this.props.data.allWordpressPage.edges[0].node);

    return (
      <Layout>
        <SEO 
          description={this.props.data.allWordpressPage.edges[0].node.yoast.metadesc} 
          title={this.props.data.allWordpressPage.edges[0].node.yoast.title} 
        />
        <Banner data={ bannerContent } type="homepage" />
        <GeneralText contentData={ aboutContent } col1="7" col2="5" />
        <GeneralText contentData={ imageBlock } col1="5" col2="7" addClass="range" />
        <GeneralText contentData={ pricingBlock } col1="7" col2="5" addClass="pricing" />
        <GeneralText contentData={ timberDecking } col1="8" col2="4" addClass="decking" />
        <GeneralText contentData={ timberWalls } col1="5" col2="7" addClass="walls" />
        <GeneralText contentData={ timberCeilings } col1="6" col2="6" addClass="ceilings" />
        {(() => {
          if(generalContent.latestProject) return (
            <GlobalProjectSlider contentData={ latestProjects } />
          )
        })()}
        {(() => {
          if(generalContent.testimonials) return (
            <GlobalTestimonialSlider contentData={ latestTestomonial } />
          )
        })()}
        {(() => {
        if(generalContent.successStory) return (
          <GlobalSuccessStory contentData={ latestSuccessStories } />
        )
        })()}
        {(() => {
          if(generalContent.latestArticle) return (
            <GlobalNewsSlider contentData={ latestArticles } />
          )
        })()}
      </Layout>
    )
  }
}

export default IndexPage;

export const pageQuery = graphql`
  query {
    allWordpressPage(filter: {template: {eq: "template-homepage.php"}}) {
      edges {
        node {
          yoast {
            title
            metadesc
          }
          acf {
            banner_slider {
              banner_button_text
              banner_button_link
              banner_button_style
              banner_heading
              banner_sub_heading
              banner_image {
                localFile {
                  childImageSharp {
                    fluid(maxWidth: 1920) {
                      ...GatsbyImageSharpFluid_withWebp
                    }
                  }
                }
              }
            }
            align_about_image
            about_description
            about_button_text
            about_button_link
            show_button_under_about_description
            align_main_image
            general_description
            align_pricing_image
            pricing_description
            show_button_under_pricing_description
            pricing_button_link
            pricing_button_text
            align_decking_image
            decking_button_link
            decking_button_text
            decking_description
            show_button_under_decking_description
            align_walls_image
            walls_description
            show_button_under_wall_description
            wall_button_text
            wall_button_link
            align_image
            ceilings_description
            show_button_under_description
            button_text
            button_link
            show_success_stories
            show_latest_projects
            show_latest_articles
            show_testimonials
            about_image {
              localFile {
                childImageSharp {
                  fluid(maxWidth: 1000) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
            }
            main_image {
              localFile {
                childImageSharp {
                  fluid(maxWidth: 600) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
            }
            pricing_image {
              localFile {
                childImageSharp {
                  fluid(maxWidth: 800) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
            }
            decking_image {
              localFile {
                childImageSharp {
                  fluid(maxWidth: 1000) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
            }
            walls_image {
              localFile {
                childImageSharp {
                  fluid(maxWidth: 600) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
            }
            ceilings_image {
              localFile {
                childImageSharp {
                  fluid(maxWidth: 600) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
            }
          }
        }
      }
    }

    allWordpressAcfOptions {
      edges {
        node {
          options {
            client_testimonials_heading
            client_testimonials {
              client_name
              client_quote
              client_titleposition
            }
            success_stories_heading
            success_stories {
              video_link
              success_client_quote
              success_client_position__title
              success_client_name
            }
          }
        }
      }
    }

    allWordpressPost(limit: 3) {
      edges {
        node {
          title
          date(formatString: "DD MMMM YYYY")
          content
          wordpress_id
          type
          excerpt
          path
          featured_media {
            localFile {
              childImageSharp {
                fluid(maxWidth: 500) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    }

    allWordpressWpProjects(limit: 3) {
      edges {
        node {
          title
          wordpress_id
          featured_media {
            localFile {
              childImageSharp {
                fluid(maxWidth: 1200) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    }
  }
`