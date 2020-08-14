import React from 'react'
import { FaFacebookF, FaTwitter, FaSkype } from 'react-icons/fa';
import { AiOutlineGoogle } from 'react-icons/ai'
import { breakpoints } from '../theme/breakpoints'
import styled from 'styled-components'
const StyledFooter = styled.footer`
    h4 {
        text-transform: capitalize;
    }
    div {
        width: 100%;
        display: flex;
        justify-content: space-around;
        a {
            display: grid;
            place-content: center;
            border: 2px solid white;
            padding: .5rem;
            svg {
                font-size: .75rem;
            }
            :hover {
                
                color: var(--theme-pink);
            }
        }
    }
    @media ${breakpoints.sm} {
        display: grid;
        grid-template-columns: repeat(3, 1fr);  
        align-items: center;

        div {
            justify-self: center;
        }
        p {
            justify-self: end;
        }
    }
`

const Footer = () => {
    return (
        <StyledFooter>
            <h4>Stay Connected with us night club</h4>
            <div>
                <a href={"https://www.facebook.com/"} target="_blank" rel="noreferrer"><FaFacebookF /></a>
                <a href={"https://twitter.com/?lang=da"} target="_blank" rel="noreferrer"><FaTwitter /></a>
                <a href={"https://www.google.dk/"} target="_blank" rel="noreferrer"><AiOutlineGoogle /></a>
                <a href={"https://www.skype.dk/"} target="_blank" rel="noreferrer"><FaSkype /></a>
                <a href={"https://www.google.dk/"} target="_blank" rel="noreferrer"><AiOutlineGoogle /></a>
            </div>
            <p>CopyRight &copy; 2018 NightClub psd template all right</p>
        </StyledFooter>
    )
}

export default Footer