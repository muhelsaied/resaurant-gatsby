import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { HomeHeader, Banner } from "../utils"
import BCG from "../images/bg.jpg"
const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <HomeHeader img={BCG} title="hot meal restaurant">
      <Banner title="hot meal restaurant" subtitle="53 Mac str newyork">
        <button>hi</button>
      </Banner>
    </HomeHeader>
  </Layout>
)

export default IndexPage
