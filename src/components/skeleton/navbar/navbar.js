import React, { Component } from "react"
import styled from "styled-components"
import { styles } from "../../../utils"

import Header from "./navheader"
import NavLinks from "./navlink"
import NavIcons from "./navicons"

export default class NavBar extends Component {
  state = {
    navBarOpen: false,
  }
  // contral navbar toggle
  handleChange = () => {
    this.setState(() => {
      return {
        navBarOpen: !this.state.navBarOpen,
      }
    })
  }
  render() {
    return (
      <NavBarWrapper>
        <Header handleChange={this.handleChange} />
        <NavLinks navOpen={this.state.navBarOpen} />
        <NavIcons navOpen={this.state.navBarOpen} />
      </NavBarWrapper>
    )
  }
}

const NavBarWrapper = styled.nav`
  background: ${styles.colors.lightYellow};
  @media (min-width: 780px) {
    display: flex;
    align-items: center;
  }
`
