import React, { Component } from "react"
import styled from "styled-components"
import { Icons } from "./Icons"
import { styles } from "../../../utils"
export default class NavIcons extends Component {
  state = {
    Icons: Icons,
  }
  render() {
    const { navOpen } = this.props
    return (
      <IconWrapper show={navOpen}>
        {this.state.Icons.map(icon => {
          return (
            <div className="icon-div" key={icon.id}>
              <a
                href={icon.link}
                className="icon"
                target="_blank"
                rel="noopener noreferrer"
              >
                {icon.icon}
              </a>
            </div>
          )
        })}
      </IconWrapper>
    )
  }
}

const IconWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  width: 20%;
  .icon-div {
    padding: 2% 3.5%;
  }
  .icon-div:hover {
    background: ${styles.colors.darkYellow};
    border-radius: 30%;
  }
  .icon {
    font-size: 30px;
    color: ${styles.colors.darkYellow};
    ${styles.transDefault};
  }

  .icon-div:hover .icon {
    color: ${styles.colors.mainWhite};
  }

  @media (max-width: 780px) {
    display: flex;
    ${styles.transDefault};
    opacity: ${props => (props.show ? "1" : "0")};
    height: ${props => (props.show ? "1" : "0")};
    margin-top: ${props => (props.navOpen ? "1px" : "-40px")};
    justify-content: space-between;
    width: 100%;
    align-content: center;
    flex-wrap: nowrap;
    .icon-div {
      padding: 2% 4%;
      margin: 2%;
    }
  }
`
