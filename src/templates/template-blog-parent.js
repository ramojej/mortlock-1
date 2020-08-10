import React, { Component } from "react";
import { graphql, Link } from "gatsby";

import Layout from '../components/layout';

class Page extends Component {
  render() {
    const data = this.props

    console.log(data);

    return (
      <Layout>
        <div className="blog__wrapper">
          <div className="container">
            <h1>News</h1>
            {data.pageContext.posts.map(post => (
              <div key={post.node.id}>
                <h3 dangerouslySetInnerHTML={{ __html: post.node.path }} />
                <Link to={post.node.path}>Link</Link>
              </div>
            ))}
            <div className="pagination">
              <span class="title">Pages</span>
              <ul className="pages">
                {Array.from({ length: data.pageContext.numberOfPages }).map((page, index) =>  (
                  <li key={index} className={index + 1 === data.pageContext.currentPage ? 'active' : null }>
                    <Link to={index === 0 ? data.pageContext.actualPath : `${data.pageContext.actualPath}${index + 1}`}>{index + 1}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default Page

// export const pageQuery = graphql`
//   query {
//     allWordpressPage(filter: {path: {eq: "/"}}) {
//       edges {
//         node {
//           acf {
//             banner_image {
//               localFile {
//                 childImageSharp {
//                   fluid(maxWidth: 1920) {
//                     ...GatsbyImageSharpFluid_withWebp
//                   }
//                 }
//               }
//             }
//             banner_image_overlay
//             banner_description
//             banner_heading
//             history_title
//             history_aside_text
//             history_year
//             history_info
//             history_image {
//               localFile {
//                 childImageSharp {
//                   fluid(maxWidth: 1170) {
//                     ...GatsbyImageSharpFluid_withWebp
//                   }
//                 }
//               }
//             }
//             history_second_heading
//             history_text_block {
//               history_text_box
//               history_image_alignment
//               history_sub_image {
//                 localFile {
//                   childImageSharp {
//                     fluid(maxWidth: 700) {
//                       ...GatsbyImageSharpFluid_withWebp
//                     }
//                   }
//                 }
//               }
//             }
//             sustainability_main_image {
//               localFile {
//                 childImageSharp {
//                   fluid(maxWidth: 1170) {
//                     ...GatsbyImageSharpFluid_withWebp
//                   }
//                 }
//               }
//             }
//             section_main_heading
//             sustainability_aside_heading
//             sustainability_main_content
//             sustainability_button_text
//             sustainability_button_link
//             sustainability_button_style
//             architect_main_image {
//               localFile {
//                 childImageSharp {
//                   fluid(maxWidth: 1170) {
//                     ...GatsbyImageSharpFluid_withWebp
//                   }
//                 }
//               }
//             }
//             architect_aside_heading
//             architect_main_content
//             architect_button_text
//             architech_button_link
//             architect_button_style
//             our_mission_text
//             our_mission_image {
//               localFile {
//                 childImageSharp {
//                   fluid(maxWidth: 1500) {
//                     ...GatsbyImageSharpFluid_withWebp
//                   }
//                 }
//               }
//             }       
//             mission_aside_text
//             our_vision_content
//             our_vision_image {
//               localFile {
//                 childImageSharp {
//                   fluid(maxWidth: 930) {
//                     ...GatsbyImageSharpFluid_withWebp
//                   }
//                 }
//               }
//             }
//             our_value_heading
//             our_value_boxes {
//               icon_svg_code
//               article_title
//               article_content
//             }
//           }
//         }
//       }
//     }
//   }
// `