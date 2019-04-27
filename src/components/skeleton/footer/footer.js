import React, { Component } from "react"
import styled from "styled-components"
import { styles } from "../../../utils"
import { Icons } from "../Icons"

export default class Footer extends Component {
  state = {
    Icons: Icons,
  }
  render() {
    console.log(this.state.Icons)
    return (
      <FooterWrapper className="py-3">
        <div className="container">
          <div className="row m-0">
            <div className="col-12 text-center text-capitalize">
              <h3>all rights reversed</h3>
              <h5> D muhamed elsaied &copy;{new Date().getFullYear()}</h5>
            </div>
            <div className="col-sm-12 col-md-12 d-lg-none text-center text-capitalize d-flex mx-auto">
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
            </div>
          </div>
        </div>
      </FooterWrapper>
    )
  }
}

const FooterWrapper = styled.footer`
  background: ${styles.colors.mainColor};
  color: ${styles.colors.lightYellow};
  ${styles.textSlanted};
  .icon-div {
    width: 2rem;
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin: 2% auto;
    height: 2.5rem;
  }
  .icon-div:hover {
    background: ${styles.colors.darkYellow};
    width: 5rem;
    flex-wrap: nowrap;
    border-color: ${styles.colors.mainWhite};
  }
  .icon {
    font-size: 1.3rem;
    color: ${styles.colors.darkYellow};
    ${styles.transDefault};
    text-align: center;
  }

  .icon-div:hover .icon {
    color: ${styles.colors.mainWhite};
  }
`
