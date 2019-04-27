import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { HomeHeader, Banner, MainButton } from "../utils"
import BCG from "../images/bg.jpg"
import InfoSection from "../components/skeleton/homepage/homesection"
import Gallary from "../components/skeleton/homepage/gallery"
import Menu from "../components/skeleton/homepage/menu"
const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <HomeHeader img={BCG} title="hot meal restaurant">
      <Banner title="hot meal restaurant" subtitle="53 Mac str newyork">
        <MainButton path="/menu/" name="menu" />
      </Banner>
    </HomeHeader>
    <InfoSection />
    <Gallary />
    <Menu />
  </Layout>
)

export default IndexPage
