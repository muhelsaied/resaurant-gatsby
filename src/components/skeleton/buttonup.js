import React, { Component } from "react"
import styled from "styled-components"
import { IoIosArrowDropupCircle } from "react-icons/io"
import { Link } from "gatsby"
import { styles } from "../../utils"
export default class ButtonUp extends Component {
  state = {
    showBtn: false,
  }
  handleScroll = () => {
    this.setState({
      showBtn: !this.state.showBtn,
    })
  }
  componentDidMount() {
    if (typeof window !== "undefined") {
      //   this.handleWindowSizeChange() // Set width
      window.addEventListener("scroll", () => this.handleScroll())
    }
  }
  // make sure to remove the listener
  // when the component is not mounted anymore
  componentWillUnmount() {
    if (typeof window !== "undefined") {
      window.removeEventListener("scroll", () => this.handleScroll())
    }
  }
  render() {
    return (
      <Link to="/" show={this.showBtn}>
        <FloatBtn>
          <IoIosArrowDropupCircle className="float-icon" />
        </FloatBtn>
      </Link>
    )
  }
}

const FloatBtn = styled.div`
  bottom: ${props => (props.show ? "10%" : "300%")};
  position: fixed;
  right: 3%;
  font-size: 2.5rem;
  .float-icon {
    color: ${styles.colors.mainGrey};
  }
`
