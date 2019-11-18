import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Shop from "../containers/Shop"

type ShopProps = {}

const ShopPage: React.FunctionComponent<ShopProps> = props => {
  return (
    <Layout>
      <SEO title="Shop" description="Shop" />

      <Shop />
    </Layout>
  )
}

export default ShopPage
