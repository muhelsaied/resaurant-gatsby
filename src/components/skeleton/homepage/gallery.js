import React, { Component } from "react"
import styled from "styled-components"
import { StaticQuery, graphql } from "gatsby"
import { styles, Section } from "../../../utils"
import Img from "gatsby-image"

// get single Image
const GET_Products = graphql`
  {
    gallaryProduct: allContentfulGallaryRestaurant {
      edges {
        node {
          id
          title
          price
          image {
            fluid(maxWidth: 500) {
              src
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`

//               ...GatsbyImageSharpFluid_tracedSVG

export default class Gallery extends Component {
  render() {
    return (
      <StaticQuery
        query={GET_Products}
        render={data => {
          // console.log(data.gallaryProduct.edges)
          const product = data.gallaryProduct.edges
          return (
            <Section>
              <GalleryWrapper>
                {product.map(({ node }, index = 1) => {
                  return (
                    <div className={`item item-${index}`} key={node.id}>
                      <Img
                        fluid={node.image.fluid}
                        className="img-gallary img-container"
                      />
                      <p className="info">{node.title}</p>
                      <p className="price bg-danger">{node.price} $</p>
                    </div>
                  )
                })}
              </GalleryWrapper>
            </Section>
          )
        }}
      />
    )
  }
}

const GalleryWrapper = styled.div`
  display: grid;
  ${styles.transObject};
  grid-template-columns: auto;
  grid-row-gap: 1rem;
  .item {
    position: relative;
    overflow: hidden;
  }
  .info,
  .price {
    position: absolute;
    top: 2%;
    background: ${styles.colors.darkYellow};
    padding: 0.5rem;
    border-radius: 15px;
    color: ${styles.colors.mainWhite};
    text-transform: capitalize;
    ${styles.transObject};
  }
  .info {
    left: 5%;
  }
  .price {
    right: 10%;
  }
  .item:hover {
    cursor: pointer;
  }
  .img-gallary {
    width: 100%;
  }
  .item:hover .img-gallary {
    transform: scale(1.1);
    ${styles.transObject};
    opacity: 0.5;
  }
  .item:hover .info {
    top: 50%;
    left: 35%;
    padding: 1rem;
    font-size: 1.5rem;
    background: ${styles.colors.mainWhite};
    color: ${styles.colors.darkYellow};
  }
  @media (min-width: 576px) {
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 1rem;
  }
  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (min-width: 992px) {
    .gatsby-image-wrapper {
      height: 100%;
    }
    grid-template-areas:
      "one  one two two  "
      "one  one three three ";
    .item-1 {
      grid-area: one;
    }
    .item-2 {
      grid-area: two;
    }
    .item-3 {
      grid-area: three;
    }
  }
`
