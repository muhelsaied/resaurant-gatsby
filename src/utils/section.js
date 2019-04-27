import React from "react"
import styled from "styled-components"
import { styles } from "../utils"
export function Section({ children, background }) {
  return (
    <SectionWrapper className="py-5" background={background}>
      {children}
    </SectionWrapper>
  )
}

const SectionWrapper = styled.section`
  width: 90vw;
  margin: 0 auto;
  background: ${props => props.background};
  @media (max-width: 780px) {
    width: 100%;
  }
`
