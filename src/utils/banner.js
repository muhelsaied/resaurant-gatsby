import React from "react"
import styled from "styled-components"
import { styles } from "../utils"
export function Banner({ title, subtitle, children }) {
  return (
    <BannerWrapper className="main-header text-center text-uppercase py-3">
      <h1 className="title">{title}</h1>
      <h5>{subtitle}</h5>
      {children}
    </BannerWrapper>
  )
}

const BannerWrapper = styled.div`
  color: ${styles.colors.mainYellow};
  .title {
    color: ${styles.colors.lightYellow};
  }
`
