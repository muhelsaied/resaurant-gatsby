import React from "react"
import PropTypes from "prop-types"
import { StaticQuery } from "gatsby"
import Bootstrap from "bootstrap/dist/css/bootstrap.min.css"
// import Transition from "./tranisition"
// import components  pages
// nav bar
import NavBar from "../components/skeleton/navbar"
//footer
import Footer from "../components/skeleton/footer"
import ButtonUp from "../components/skeleton/buttonup"
import "./layout.css"

const Layout = ({ children, location }) => {
  return (
    <>
      <NavBar />
      {/* <Transition location={location}>{children}</Transition> */}
      {children}
      <ButtonUp />
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
if (typeof window !== "undefined") {
  // eslint-disable-next-line global-require
  require("smooth-scroll")('a[href*="#"]')
}

export default Layout
