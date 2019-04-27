import React, { Component } from "react"
import MoreInfo from "./moreinfo"
export default class AboutPage extends Component {
  state = {
    showInfo: false,
  }
  handleInfo = () => {
    this.setState({
      showInfo: !this.state.showInfo,
    })
  }
  render() {
    return (
      <div className="container">
        <div className="row m-0">
          <div className="col-10 mx-auto d-block">
            <button
              className="btn btn-secondary my-3"
              style={{ width: "30%" }}
              onClick={this.handleInfo}
            >
              More about us
            </button>
          </div>
        </div>
        {this.state.showInfo && <MoreInfo />}
      </div>
    )
  }
}
