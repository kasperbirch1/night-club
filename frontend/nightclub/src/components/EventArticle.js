import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
const StyledEventArticle = styled.article`
    height: 250px;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 2fr 1fr;  
    div {
        grid-row: 2/3  ;
        background-color: red;
    }
`;
export const EventArticle = ({ name, description, asset }) => {
    const [Img, setImg] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                `http://localhost:4000/assets/${asset}`);
            setImg(result.data);
        };
        fetchData();

    }, []);
    return (
        <StyledEventArticle style={{ backgroundImage: `url(${Img.url})` }}>
            <div>
                <h3>{name}</h3>
                <p>{description}</p>
            </div>
        </StyledEventArticle>
    );
};
