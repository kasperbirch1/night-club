import React from "react"
import SEO from "../components/seo"
import { Wrapper } from "../components/page-elements"
import Welcome from "../components/Welcome"
import Events from "../components/Events"
import Gallery from "../components/Gallery"
import Testimonials from "../components/Testimonials"
import Email from "../components/Email"

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <Wrapper>
      <Welcome />
      <Events />
    </Wrapper>
    <Gallery />
    <Testimonials />
    <Wrapper>
      <Email />
    </Wrapper>

  </>
)

export default IndexPage
