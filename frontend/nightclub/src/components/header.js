import React from "react"
import Hero from "../components/Hero"
import Menu from "../components/Menu"
import { Wrapper } from "../components/page-elements"
import styled from "styled-components"


const StyledHeader = styled.header`
  background-color: black;
`


const Header = () => (
  <>
    {window.location.pathname === "/" && <Hero />}
    <StyledHeader>
      <Wrapper>
        <Menu />
      </Wrapper>
    </StyledHeader>
  </>
)


export default Header
