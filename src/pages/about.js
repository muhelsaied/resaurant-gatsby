import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { PageHeader, Banner } from "../utils"
import BCG from "../images/about.jpg"
import AboutPage from "../components/skeleton/about"
const About = () => (
  <Layout>
    <SEO title="About" keywords={[`gatsby`, `application`, `react`]} />
    <PageHeader img={BCG}>
      <Banner
        title="our success story"
        subtitle="10 years with our happy customers"
      />
      <AboutPage />
    </PageHeader>
  </Layout>
)

export default About
