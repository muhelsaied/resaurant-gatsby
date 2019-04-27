import React, { Component } from "react"
import styled from "styled-components"
import { StaticQuery, graphql } from "gatsby"
import { styles, Section } from "../../../utils"
import Img from "gatsby-image"

// get single Image
const GET_Menu = graphql`
  {
    menu: allContentfulMenuRestaurant {
      edges {
        node {
          id
          title
          price
          des
          image {
            fixed(width: 100, height: 100) {
              src
              ...GatsbyContentfulFixed_tracedSVG
            }
          }
        }
      }
    }
  }
`

//               ...GatsbyImageSharpFluid_tracedSVG

export default class Menu extends Component {
  render() {
    return (
      <StaticQuery
        query={GET_Menu}
        render={data => {
          console.log(data.menu.edges)
          const product = data.menu.edges
          return (
            <Section>
              <MenuWrapper className="container">
                <div className="row m-0">
                  {product.map(({ node }) => {
                    return (
                      <div
                        className="col-sm-10 col-md-6 col-lg-4 mx-auto"
                        key={node.id}
                      >
                        <div>
                          <Img fixed={node.image.fixed} className="rounded" />
                        </div>
                        <div className="menu-info">
                          <h4> {node.title}</h4>
                          <h6>{node.price}</h6>
                          <p>{node.des}</p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </MenuWrapper>
            </Section>
          )
        }}
      />
    )
  }
}

const MenuWrapper = styled.div``
