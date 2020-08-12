import React from "react"
import SEO from "../components/seo"
import { Wrapper } from "../components/page-elements"
import Welcome from "../components/Welcome"
import Events from "../components/Events"

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <Wrapper>
      <Welcome />
      <Events />
    </Wrapper>
  </>
)

export default IndexPage
