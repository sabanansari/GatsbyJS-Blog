import * as React from "react"
import { graphql,Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

export default ({data}) => {
  
  
  return(
  <Layout>
    <Seo title="Home" />
    <div>
      <h1>Ansari's Blogs</h1>
      <h4>{data.allMarkdownRemark.totalCount}</h4>
      {
        data.allMarkdownRemark.edges.map(({node})=>(
          <div key = {node.id}>
            <span>{node.frontmatter.title} - {node.frontmatter.date}</span>
            <p>{node.excerpt}</p>
          </div>
        ))
      }
    </div>
    <h1>Hi everyone!</h1>
  </Layout>
)}

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */


export const query = graphql`
  query{
    allMarkdownRemark{
      totalCount
      edges{
        node{
          id
          frontmatter{
            description
            title
            date
          }
          excerpt
        }
      }
    }
  }
`