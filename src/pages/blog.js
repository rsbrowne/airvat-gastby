import React from 'react'

import Layout from '../components/layout'
import { useStaticQuery, graphql } from 'gatsby';

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
            }
          }
        }
      }
    }
  `);

  console.log(data);

  return (
    <Layout>
      <h1>Blog Page</h1>
      <p>Post will show up here later</p>
    </Layout>
  )
}

export default BlogPage