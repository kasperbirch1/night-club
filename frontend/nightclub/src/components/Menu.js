import React, { useState } from 'react'
import { Link } from "gatsby"
import { breakpoints } from "../theme/breakpoints"
import styled from "styled-components"
import Logo from "../images/Logo_main.svg"
import { FaBars } from 'react-icons/fa';

const MenuLinks = () => {
    return (
        <>
            <li><Link to="/" >Home</Link></li>
            <li><Link to="/" >about us</Link></li>
            <li><Link to="/" >blog</Link></li>
            <li><Link to="/" >events</Link></li>
            <li><Link to="/" >gallery</Link></li>
            <li><Link to="/" >book</Link></li>
            <li><Link to="/" >contact us</Link></li>
        </>
    )
}

const StyledNav = styled.nav`
    color: white;
    padding: .5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  
    img {
        width: 200px;
    }
    ul {
        display: none;
        @media ${breakpoints.sm} {
        display: flex;
        justify-content: space-between;
        }
        li {
            margin-left: 1.5rem;
            a {
                text-transform: uppercase;
                :hover {
                    color: var( --theme-pink);
                    text-decoration: underline;
                }
            }
        }
    }

    svg {
        font-size: 1.5rem;
        @media ${breakpoints.sm} {
        display: none;
        }
    }
`

const Menu = () => {
    const [MenuToggle, setMenuToggle] = useState(false)
    return (
        <>
            <StyledNav>
                <img src={Logo} alt="logo" />
                <ul>
                    <MenuLinks />
                </ul>
                <FaBars onClick={() => setMenuToggle(!MenuToggle)} />
            </StyledNav>
            {MenuToggle &&
                <section style={{ color: 'white' }}>
                    <ul>
                        <MenuLinks />
                    </ul>
                </section>
            }
        </>
    )
}

export default Menu