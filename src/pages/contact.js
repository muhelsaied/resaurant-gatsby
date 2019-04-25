import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BCG from "../images/contact.jpg"
import { PageHeader, Banner } from "../utils"

const Contact = () => (
  <Layout>
    <SEO title="Menu" keywords={[`gatsby`, `application`, `react`]} />
    <PageHeader img={BCG} title="your suggestion and requests">
      <Banner
        title="your suggestion and requests"
        subtitle="we 're happy to serve you"
      />
    </PageHeader>
  </Layout>
)

export default Contact
