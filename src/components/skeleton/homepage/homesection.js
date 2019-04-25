import React from "react"
import { Section, Title, SectionButton, styles } from "../../../utils"
import styled from "styled-components"
export default function InfoSection() {
  return (
    <Section>
      <Title subheader="we would tell you our" header="success" />
      <ParagraphWrapper className="text-uppercase">
        loremipsuLorem Ipsum is simply dummy text of the printing and
        typesetting industry. Lorem Ipsum has been the industry's standard dummy
        text ever since the 1500s, when an unknown printer took a galley of type
        and scrambled it to make a type specimen book. It has survived not only
        five centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged.
      </ParagraphWrapper>
      <SectionButton path="/about/" name="more about us" />
    </Section>
  )
}
const ParagraphWrapper = styled.div`
  text-align: justify;
  padding: 1rem;
  width: 90%;
  margin: 5% auto;
  line-height: 2;
  font-family: "Anton", sans-serif;
  justify-content: center;
  color: ${styles.colors.mainWhite};
  &:hover {
    cursor: help;
  }
  @media (min-width: 780px) {
    width: 70%;
    margin: 3% auto;
  }
  @media (min-width: 980px) {
    width: 50%;
    margin: 2% auto;
  }
`
