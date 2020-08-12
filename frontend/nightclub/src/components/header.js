import React from "react"
import Hero from "../components/Hero"
import Menu from "../components/Menu"
import { Wrapper } from "../components/page-elements"
import styled from "styled-components"

const StyledHeader = styled.header`
  background-color: black;
  position: relative;
    ::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    border-right: 25px solid transparent;
    border-left: 25px solid var(--theme-pink);
    border-bottom: 25px solid transparent;
    }
    ::after {
    content: "";
    position: absolute;
    bottom: 0;
    right: 0;
    border-left: 25px solid transparent;
    border-right: 25px solid var(--theme-pink);
    border-top: 25px solid transparent;
    }
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
