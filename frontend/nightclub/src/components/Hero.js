import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { breakpoints } from "../theme/breakpoints"
import Logo from "../images/Logo.svg"
import BackgroundImage from 'gatsby-background-image'
import styled from "styled-components"
const StyledBackgroundImage = styled(BackgroundImage)`
  overflow: hidden;
  height: 100vh;
  display: grid;
  place-content: center;
  img {
    margin: 0 auto;
    width: 300px;
  }
  h1 {
    text-align: center;
    font-family: 'Ubuntu', sans-serif;
    line-height: 1.1;
    text-transform: uppercase;
    color: #ffffff;
    font-size: 21px;
    letter-spacing: .2rem; 
  }

  @media ${breakpoints.sm} {
    img {
      width: 500px;
    }
    h1 {
      font-size: 30px;
      letter-spacing: .475rem; 
    }
  }
`

const Hero = () => {
  const data = useStaticQuery(graphql`
    query {
      header_bg_1: file(relativePath: { eq: "header_bg_1.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      header_bg_2: file(relativePath: { eq: "header_bg_2.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <>
      <StyledBackgroundImage
        Tag="section"
        fluid={data.header_bg_2.childImageSharp.fluid}
      >
        <img src={Logo} alt="logo" />
        <h1>HAVE A GOOD TIME</h1>
      </StyledBackgroundImage>
    </>
  )
}

export default Hero
