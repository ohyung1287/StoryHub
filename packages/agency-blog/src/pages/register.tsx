import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Contact from "../containers/Contact"

type RegisterProps = {}

const ContactPage: React.FunctionComponent<RegisterProps> = props => {
  return (
    <Layout>
      <SEO title="Join Us" description="JJJJOin us." />

      <Contact />
    </Layout>
  )
}

export default ContactPage
