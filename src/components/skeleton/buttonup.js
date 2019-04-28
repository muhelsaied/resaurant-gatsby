import React, { Component } from "react"
import styled from "styled-components"
import { IoIosArrowDropupCircle } from "react-icons/io"
import { Link } from "gatsby"
import { styles } from "../../utils"
export default function ButtonUp() {
  // state = {
  //   showBtn: false,
  // }
  // handleScroll = () => {
  //   this.setState({
  //     showBtn: !this.state.showBtn,
  //   })
  // }
  return (
    <FloatBtn>
      <Link to="/">
        <IoIosArrowDropupCircle className="float-icon" />
      </Link>
    </FloatBtn>
  )
}

const FloatBtn = styled.div`
  top: 10%;
  ${styles.transObject};
  position: relative;
  right: 3%;
  font-size: 2.5rem;
  .float-icon {
    color: ${styles.colors.mainGrey};
  }
`
