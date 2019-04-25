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
import "./layout.css"

const Layout = ({ children, location }) => {
  return (
    <>
      <NavBar />
      {/* <Transition location={location}>{children}</Transition> */}
      {children}
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
