import React from 'react'
import { breakpoints } from '../theme/breakpoints'
import styled from 'styled-components'
import img1 from '../images/section1_01.jpg'
import img2 from '../images/section1_02.jpg'
import img3 from '../images/section1_03.jpg'
import icon from '../images/favicon.png'

const StyledSection = styled.section`
    text-align: center;
    color: white;
h2 {
    margin: 1.5rem 0;
    text-transform: uppercase;
    line-height: 1.1;
    font-weight: 700;
    letter-spacing: 0.075;
    span {
        color: var(--theme-pink)
    }
}
    article {
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        height: 30rem;
        div {
            opacity: 0;
            display: grid;
            place-content: center;
            height: 100%;
            width: 100%;
            color: white;
            :hover {
                opacity: 1;
                background-color: rgba(0,0,0,.5);
            }
            img {
                margin: 0 auto;
                width: 50px;
            }
            position: relative;
                ::before {
                content: "";
                position: absolute;
                top: 0;
                left: 0;
                border-right: 3rem solid transparent;
                border-left: 3rem solid var(--theme-pink);
                border-bottom: 3rem solid transparent;
                }
                ::after {
                content: "";
                position: absolute;
                bottom: 0;
                right: 0;
                border-left: 3rem solid transparent;
                border-right: 3rem solid var(--theme-pink);
                border-top: 3rem solid transparent;
            }
        }
    }
    @media ${breakpoints.sm} {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 2rem;    
        h2 {
            grid-column: 1/-1;
        }    
    }
`

const WelcomeArticles = ({ img, title, text }) => {
    return (
        <article style={{ backgroundImage: `url(${img})` }}>
            <div>
                <img src={icon} alt="icon" />
                <h2>{title}</h2>
                <p>{text}</p>
            </div>
        </article>
    )
}

const Welcome = () => {
    return (
        <StyledSection>
            <h2>Welcome ind the night<span>club</span></h2>
            <WelcomeArticles img={img1} title="nightclub" text="nightclub amet consectetur, adipisicing elit. Commodi, rem quidem. Natus quod expedita quia." />
            <WelcomeArticles img={img2} title="restaurant" text="restaurant  dolor sit amet consectetur, adipisicing elit. Commodi, rem quidem. Natus quod expedita quia." />
            <WelcomeArticles img={img3} title="bar" text="bar ipsum dolor sit amet consectetur, adipisicing elit. Commodi, rem quidem. Natus quod expedita quia." />
        </StyledSection>
    )
}

export default Welcome
