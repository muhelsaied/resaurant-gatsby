import React from "react"
import styled from "styled-components"
import { styles } from "../utils"
export function Title({ subheader, header }) {
  return (
    <TitleWrapper>
      <h5>{subheader}</h5>
      <h1>{header}</h1>
      <div className="line" />
    </TitleWrapper>
  )
}
Title.defaultProps = {
  subheader: "some text",
  header: "header",
}
const TitleWrapper = styled.div`
  color: ${styles.colors.mainYellow};
  text-align: center;
  text-shadow: 3px 2px 12px ${styles.colors.mainYellow};
  h3 {
    ${styles.textSlanted};
    ${styles.letterSpacing({ spacing: "0.3rem" })};
    font-size: 2rem;
  }
  h1 {
    ${styles.letterSpacing({ spacing: "0.3rem" })};
    font-size: 2rem;
    text-transform: uppercase;
  }
  .line {
    width: 15%;
    height: 2%;
    border-radius: 50px;
    padding: 0.05rem;
    background: ${styles.colors.mainYellow};
    display: block;
    margin: 1% auto;
    box-shadow: 3px 2px 12px ${styles.colors.mainYellow};
  }
`
