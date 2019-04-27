import React, { Component } from "react"
import styled from "styled-components"
import { StaticQuery, graphql } from "gatsby"
import { styles, Section, Title } from "../../../utils"
import Img from "gatsby-image"

// get single Image
const GET_Menu = graphql`
  {
    menu: allContentfulMenuRestaurant {
      edges {
        node {
          id
          tilte
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

export default class Menu extends Component {
  render() {
    return (
      <StaticQuery
        query={GET_Menu}
        render={data => {
          // console.log(data.menu.edges)
          const product = data.menu.edges
          return (
            <Section>
              <MenuWrapper className="container" id="menu">
                <div className="row m-0 py-3">
                  <div className="col-12 mx-auto">
                    <Title
                      subheader="Taste Our Delicious Plates"
                      header="menu"
                    />
                  </div>
                </div>
                <div className="row m-0">
                  {product.map(({ node }) => {
                    return (
                      <div
                        className="col-sm-10 col-md-6 col-lg-4 mx-auto food-menu py-2"
                        key={node.id}
                      >
                        <div className="col-12 d-flex">
                          <div>
                            <Img fixed={node.image.fixed} className="rounded" />
                          </div>
                          <div className="menu-info px-1 d-flex">
                            <h4 className="text-primary"> {node.tilte}</h4>
                            <h6 className="text-danger menu-price">
                              $ {node.price}
                            </h6>
                          </div>
                        </div>
                        <div className="col-12 text-muted">
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

const MenuWrapper = styled.div`
  .menu-info {
    flex-direction: row;
  }
  h4 {
    /* ${styles.textSlanted} */
  }
  .menu-price {
    position: absolute;
    top: 50%;
    right: 3%;
    background: ${styles.colors.mainGrey}!important;
    padding: 0.6rem;
  }
  .food-menu:hover {
    filter: brightness(80%);
    transform: scale(1.02);
    background: ${styles.colors.lightYellow};
    border-radius: 10px;
    box-shadow: 5px 5px 15px ${styles.colors.mainWhite};
  }
  .food-menu:hover .menu-price{
    background: ${styles.colors.mainWhite}!important;
    font-size:2rem;
  }
`
