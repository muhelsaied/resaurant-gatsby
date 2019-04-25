import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { styles } from "../utils"

function MainButton({ path, name }) {
  return (
    <ButtonWrapper>
      <Link to={path} className="main">
        {name}
      </Link>
    </ButtonWrapper>
  )
}
function SectionButton({ path, name }) {
  return (
    <SectionWrapper>
      <Link to={path} className="main">
        {name}
      </Link>
    </SectionWrapper>
  )
}

const ButtonWrapper = styled.button`
  animation: bouncy 5s infinite linear;
  position: relative;
  display: block;
  background: transparent;
  padding: 0.5rem 2.5rem;
  text-transform: uppercase;
  border-radius: 5px;
  font-size: 1.5rem;
  letter-spacing: 0.5rem;
  font-weight: 700;
  margin: 4% auto;
  ${styles.border({ color: `${styles.colors.mainWhite}` })};
  ${styles.transition({})};
  &:hover {
    background: ${styles.colors.mainWhite};
    cursor: pointer;
  }
  &:hover .main {
    color: ${styles.colors.mainYellow};
  }
  .main {
    text-decoration: none;
    color: ${styles.colors.mainWhite};
  }
  @keyframes bouncy {
     0% {
      top: 0em;
    }
     40% {
      top: 0em;
    }
     43% {
      top: -0.9em;
    }
     46% {
      top: 0em;
    }
     48% {
      top: -0.4em;
    }
     50% {
      top: 0em;
    }
     100% {
      top: 0em;
    }
  }
`
const SectionWrapper = styled(ButtonWrapper)`
  padding: 0.5rem 1rem;
  font-size: 1rem;
  font-weight: 300;
  &:hover {
    filter: brightness(90%);
    border-color: ${styles.colors.lightYellow};
  }
`

export { SectionButton, MainButton }
