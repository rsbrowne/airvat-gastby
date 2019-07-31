import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'

export const query = graphql`
  query ($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        bannerImg
        title
        date(formatString: "MMMM DD, YYYY")
      }
      html
    }
  }
`;

const Blog = (props) => {
  return (
    <Layout>
      <div className="section section--banner section--blog-page">
        <div className="section__inner section__inner--blog-page">
          <div 
            className="banner__image" 
            style={{backgroundImage: `url(${props.data.markdownRemark.frontmatter.bannerImg})`}}
          ></div>
        </div>
        <div className="section__inner section__inner--blog-content">
          <div className="blog__title">
            <h1>{props.data.markdownRemark.frontmatter.title}</h1>
            <p>{props.data.markdownRemark.frontmatter.date}</p>
          </div>
          <div className="blog__content">
            <div dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}></div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Blog