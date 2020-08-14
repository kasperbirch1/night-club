import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
const StyledEventArticle = styled.article`
    .top {
        opacity: 0;
        :hover {
            opacity: 1;
        }
        height: 300px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        a {
            margin: auto;
            padding: .75rem 1.5rem;
            background-color: var(--theme-pink);
        }
        div {
            padding: .5rem;
            background-color: rgba(0,0,0,.5);
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

    .bottom {
        background-color: var(--theme-pink);
        display: flex;
        justify-content: space-around; 
    }
`;
export const EventArticle = ({ name, description, time, date, location, asset }) => {
    const [Img, setImg] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                `http://localhost:4000/assets/${asset}`);
            setImg(result.data);
        };
        fetchData();

    }, [asset]);
    return (
        <StyledEventArticle style={{ backgroundImage: `url(${Img.url})` }}>
            <div className="top">
                <a href="#">Book Now</a>
                <div className="">
                    <h3>{name}</h3>
                    <p>{description}</p>
                </div>
            </div>
            <div className="bottom">
                <p>{date}</p>
                <p>{time}</p>
                <p>{location}</p>
            </div>
        </StyledEventArticle>
    );
};
