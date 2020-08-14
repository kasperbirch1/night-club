import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaFacebookF, FaTwitter } from 'react-icons/fa';
import { AiOutlineGoogle } from 'react-icons/ai'
import styled from 'styled-components'
const StyledTestimonialItemArticle = styled.article`
    text-align: center;
    padding: 1.5rem 1rem;
    img {
        width: 200px;
        margin: 2rem auto;
    }
    h3 {
        text-transform: uppercase;
        font-size: 1.5rem;
        letter-spacing: -1px;
        margin-bottom: .5rem;
    }
    p {
        font-size: .85rem;
    }
    .someContainer {
        margin: 1rem 0;
        display: flex;
        align-items: center;
        justify-content: center;
        a {
            margin: 0 .5rem;
            border: 2px solid white;
            padding: .5rem;
            display: grid;
            place-content: center;
            svg {
                font-size: .75rem;
            }
        :hover {
            color: var(--theme-pink);
            border-color: var(--theme-pink);
        }
      }
    }
`

const TestimonialItem = ({ asset, title, text, facebookLink, twitterLink, googleLink, loading }) => {
    const [Img, setImg] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                `http://localhost:4000/assets/${asset}`);
            setImg(result.data);
        };
        fetchData();

    }, [asset]);

    if (loading) {
        return <p>loading...</p>
    }

    return (
        <StyledTestimonialItemArticle>
            <img src={Img.url} alt={title} />
            <h3>{title}</h3>
            <p>{text}</p>
            <div className="someContainer">
                <a href={facebookLink} target="_blank" rel="noreferrer"><FaFacebookF /></a>
                <a href={twitterLink} target="_blank" rel="noreferrer"><FaTwitter /></a>
                <a href={googleLink} target="_blank" rel="noreferrer"><AiOutlineGoogle /></a>
            </div>
        </StyledTestimonialItemArticle>
    )
}

export default TestimonialItem
