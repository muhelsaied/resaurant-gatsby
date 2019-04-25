import React, { Component } from "react"
import { Link } from "gatsby"
import logo from "../../../images/nav-logo.svg"
import { FaAlignRight } from "react-icons/fa"
import styled from "styled-components"
import { styles } from "../../../utils"

export default class Header extends Component {
  render() {
    const { handleChange } = this.props
    // console.log(this.props)
    return (
      <HeaderWrapper>
        <Link to="/">
          <img src={logo} alt="nav-logo" className="logo-img" />
        </Link>

        <FaAlignRight className="nav-toggle" onClick={() => handleChange()} />
      </HeaderWrapper>
    )
  }
}

const HeaderWrapper = styled.div`
  padding: 0.5rem 0.8rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .logo-img {
    width: 50px;
  }
  .nav-toggle {
    font-size: 1.8rem;
    color: ${styles.colors.darkYellow};
    cursor: pointer;
  }
  @media (min-width: 780px) {
    .nav-toggle {
      display: none;
    }
  }
`
