import React from "react"
import styled from "styled-components"
import { styles } from "../utils"
export function Banner({ title, subtitle, children }) {
  return (
    <div className="main-header text-center text-uppercase py-3">
      <h1>{title}</h1>
      <h5>{subtitle}</h5>
      {children}
    </div>
  )
}

const BannerWrapper = styled.div`
  .main-header {
    color: ${styles.colors.mainYellow};
  }
`
