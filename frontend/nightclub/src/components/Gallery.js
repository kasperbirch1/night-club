import React, { useState, useEffect } from 'react';
import axios from 'axios';
import GalleryItems from '../components/GalleryItems';
import { breakpoints } from '../theme/breakpoints'
import styled from 'styled-components'
const StyledGallerySection = styled.section`
    h2 {
        text-align: center;
        margin: 1.5rem 0;
        text-transform: uppercase;
        line-height: 1.1;
        font-weight: 700;
        letter-spacing: 0.075;
    }
    ul {
        display: grid;
        grid-template-columns: 1fr;
        @media ${breakpoints.sm} {
            grid-template-columns: repeat(6, 1fr);
        }
        li {
            grid-column: span 2;
        }
        li:nth-child(2) {
            grid-column: span 1;
        }
        li:nth-child(4) {
            grid-column: span 1;
        }
    }
`

const Gallery = () => {
    const [Data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const res = await axios.get('http://localhost:4000/gallery-photos');
            setData(res.data);
        }
        fetchData()
    }, [])

    return (
        <StyledGallerySection>
            <h2>Galley</h2>
            <ul>
                {Data.map((element, index) => {
                    if (index < 7) {
                        return (
                            <li key={element.id}>
                                <GalleryItems data={element} index={index} />
                            </li>
                        )
                    }
                })}
            </ul>
        </StyledGallerySection>
    )
}

export default Gallery
