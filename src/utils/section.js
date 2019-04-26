import React from "react"
import styled from "styled-components"
import { styles } from "../utils"
export function Section({ children }) {
  return <SectionWrapper className="py-5">{children}</SectionWrapper>
}

const SectionWrapper = styled.section`
  width: 90vw;
  margin: 0 auto;
  background: ${styles.colors.darkYellow};
  @media (max-width: 780px) {
    width: 100%;
  }
`
