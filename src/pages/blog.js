import React from 'react'

import Layout from '../components/layout'
import { Link, useStaticQuery, graphql } from 'gatsby';

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date(formatString: "MMMM DD, YYYY")
              bannerImg
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  return (
    <Layout>
      <div className="section section--banner section--blog-list">
        <div className="section__inner section__inner--blog-list">
          <h1>Blog</h1>
          <div className="blog-list">
            {data.allMarkdownRemark.edges.map((edge) => {
              return (
                <div className="blog-card">
                  <div className="blog-card__inner">
                    <Link to={`/blog/${edge.node.fields.slug}`} style={{ textDecoration: 'none' }}>
                      <div 
                        className="blog-card__image" 
                        style={{backgroundImage: `url(${edge.node.frontmatter.bannerImg})`}}
                      ></div>
                      <div className="blog-card__content">
                        <h3>{edge.node.frontmatter.title}</h3>
                        <p>{edge.node.frontmatter.date}</p>
                      </div>
                    </Link>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default BlogPage