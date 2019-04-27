import React, { Component } from "react"
import styled from "styled-components"
export default class ContactForm extends Component {
  render() {
    return (
      <section className="my-4">
        <div className="container">
          <div className="row m-0">
            <div className="col-sm-10 col-md-8 col-lg-9 mx-auto text-left text-light">
              <form
                action="https://formspree.io/muhahmed2099@gmail.com"
                method="POST"
              >
                <div className="row m-0">
                  <div className="col-md-6">
                    {/*name*/}
                    <div className="md-form mb-0">
                      <label htmlFor="name" className="">
                        Your name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-control"
                        required
                      />
                    </div>
                  </div>
                  {/*email*/}
                  <div className="col-md-6">
                    <div className="md-form mb-0">
                      <label htmlFor="email" className="">
                        Your email
                      </label>
                      <input
                        type="text"
                        id="email"
                        name="email"
                        className="form-control"
                        required
                      />
                    </div>
                  </div>
                </div>
                {/*subject*/}
                <div className="row m-0">
                  <div className="col-md-12">
                    <div className="md-form mb-0">
                      <label htmlFor="subject" className="">
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        className="form-control"
                        required
                      />
                    </div>
                  </div>
                </div>
                {/*message*/}
                <div className="row m-0">
                  <div className="col-md-12">
                    <div className="md-form">
                      <label htmlFor="message">Your message</label>
                      <textarea
                        type="text"
                        id="message"
                        name="message"
                        rows="5"
                        className="form-control md-textarea"
                        required
                      />
                    </div>
                  </div>
                </div>
                {/* submit */}
                <div className="text-center d-block mx-auto">
                  <input
                    className="btn btn-danger my-3"
                    style={{ width: "50%" }}
                    value="send"
                    type="submit"
                  />
                </div>
              </form>

              <div className="status" id="status" />
            </div>
          </div>
        </div>
      </section>
    )
  }
}
