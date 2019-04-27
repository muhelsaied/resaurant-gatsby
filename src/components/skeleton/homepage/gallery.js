import React from "react"
import styled from "styled-components"
import { StaticQuery, graphql } from "gatsby"
import { styles, Section } from "../../../utils"
import Img from "gatsby-image"

// get single Image
const GET_IMAGES = graphql`
  {
    gallaryImage: allFile(filter: { relativeDirectory: { eq: "foodmenu" } }) {
      edges {
        node {
          childImageSharp {
            fluid(maxWidth: 500) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`

export default function Gallery() {
  return (
    <StaticQuery
      query={GET_IMAGES}
      render={data => {
        console.log(data.gallaryImage.edges)
        const gallaryImage = data.gallaryImage.edges
        return (
          <Section>
            <GalleryWrapper>
              {gallaryImage.map(({ node }, index) => {
                return (
                  <div className={`item item-${index}`} key={index}>
                    <Img
                      fluid={node.childImageSharp.fluid}
                      className="img-gallary img-container"
                    />
                    <p className="info">awesome burger</p>
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

const GalleryWrapper = styled.div`
  display: grid;
  ${styles.transObject};
  grid-template-columns: auto;
  grid-row-gap: 1rem;
  .item {
    position: relative;
    overflow: hidden;
  }
  .info {
    position: absolute;
    top: 2%;
    left: 5%;
    background: ${styles.colors.darkYellow};
    padding: 0.5rem;
    border-radius: 15px;
    color: ${styles.colors.mainWhite};
    text-transform: capitalize;
    ${styles.transObject};
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
