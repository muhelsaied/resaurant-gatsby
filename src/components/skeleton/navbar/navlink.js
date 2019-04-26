import React, { Component } from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { styles } from "../../../utils"
import { links } from "./link"

export default class NavLink extends Component {
  state = {
    links: links,
  }
  render() {
    return (
      <LinkWrapper navOpen={this.props.navOpen}>
        {this.state.links.map(link => {
          return (
            <li key={link.id}>
              <Link to={link.path} className="nav-link">
                {link.name}
              </Link>
            </li>
          )
        })}
      </LinkWrapper>
    )
  }
}

const LinkWrapper = styled.ul`
  padding: 0.75rem 0;
  list-style-type: none;
  ${styles.transDefault};
  height: ${props => (props.navOpen ? "230px" : "0")};
  margin-left: ${props => (props.navOpen ? "0" : "-100px")};
  margin-top: ${props => (props.navOpen ? "0" : "-100px")};
  margin-bottom: 0;
  overflow: hidden;
  .nav-link {
    display: block;
    text-decoration: none;
    padding: 0.5rem 1rem 0.5rem 1rem;
    color: ${styles.colors.darkYellow};
    padding-left: 5%;
    text-transform: uppercase;
    font-weight: 500;
    font-size: 25px;
    cursor: pointer;
    opacity: ${props => (props.navOpen ? "1" : "0")};
    ${styles.transDefault};
    &:hover {
      background: ${styles.colors.darkYellow};
      color: ${styles.colors.mainWhite};
      padding-left: 50%;
      border-radius: 10px;
      opacity: 0.8;
    }
  }
  @media (min-width: 780px) {
    height: auto;
    display: flex;
    margin: 0 auto;
    padding: 0.5rem 2.5rem;
    .nav-link {
      padding: 0.5rem 1.5rem;
    }
    .nav-link:hover {
      background: ${styles.colors.darkYellow};
      padding: 0.5rem 3rem;
      border-radius: 10px;
    }
  }
`
