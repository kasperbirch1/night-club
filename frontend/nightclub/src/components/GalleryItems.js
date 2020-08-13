import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { motion } from "framer-motion";
import styled from 'styled-components'
const StyledMotionImageDiv = styled(motion.div)`
    position: relative;
    :hover {
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
`


const GalleryItems = ({ data, index }) => {
    const [Img, setImg] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                `http://localhost:4000/assets/${data.asset}`);
            setImg(result.data);
        };
        fetchData();

    }, []);

    return (
        <StyledMotionImageDiv style={{ background: `url(${Img.url}) center/cover no-repeat`, height: '300px' }}
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: (index / 2) }}
        >

        </StyledMotionImageDiv>
    )
}

export default GalleryItems
