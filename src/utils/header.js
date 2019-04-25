import React from "react"
import styled from "styled-components"
import { styles } from "./index"
import DefaultBcg from "../images/bg-2.jpg"
// home header
function HomeHeader({ img, children }) {
  return <HeaderWrapper img={img}>{children}</HeaderWrapper>
}
// default header
function PageHeader({ img, title, children }) {
  return <DefaultHeader img={img}>{children}</DefaultHeader>
}

const HeaderWrapper = styled.header`
  min-height: calc(100vh - 90px);
  background: linear-gradient(
      rgba(0, 0, 0, 0.4),
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0.6)
    ),
    url(${props => props.img}) center/cover fixed no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: color-interpolation-filters;
  text-align: center;
  font-family: "Anton", sans-serif;
`

const DefaultHeader = styled(HeaderWrapper)`
  min-height: 70vh;
`

HomeHeader.defaultProps = {
  img: DefaultBcg,
}
PageHeader.defaultProps = {
  img: DefaultBcg,
}

export { HomeHeader, PageHeader }
