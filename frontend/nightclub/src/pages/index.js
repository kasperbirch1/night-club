import React from "react"
import SEO from "../components/seo"
import { Wrapper } from "../components/page-elements"

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <Wrapper>
      <section style={{ backgroundColor: "blue", height: "5rem" }}></section>
      <section style={{ backgroundColor: "red", height: "5rem" }}></section>
    </Wrapper>
    <section style={{ backgroundColor: "blue", height: "5rem" }}></section>
  </>
)

export default IndexPage
