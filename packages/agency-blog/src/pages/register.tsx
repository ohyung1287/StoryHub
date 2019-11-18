import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Register from "../containers/Register"

type RegisterProps = {}

const RegisterPage: React.FunctionComponent<RegisterProps> = props => {
  return (
    <Layout>
      <SEO title="Join Us" description="Join us." />

      <Register />
    </Layout>
  )
}

export default RegisterPage
