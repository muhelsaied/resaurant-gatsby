import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { PageHeader, Banner } from "../utils"
import MenuBcg from "../images/menu.jpg"
const Menu = () => (
  <Layout>
    <SEO title="Menu" keywords={[`gatsby`, `application`, `react`]} />
    <PageHeader img={MenuBcg}>
      <Banner title="Menu" subtitle="find your favourite meal" />
    </PageHeader>
  </Layout>
)

export default Menu
