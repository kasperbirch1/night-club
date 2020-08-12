import React, { useState, useEffect } from 'react';
import Pagination from "../components/Pagination"
import axios from 'axios';
import { breakpoints } from '../theme/breakpoints'
import styled from 'styled-components'
import EventArticles from '../components/EventArticles'
const StyledEventsSection = styled.section`
    color: white;
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
        grid-gap: 1rem;
        @media ${breakpoints.sm} {
            grid-template-columns: repeat(2, 1fr);
        }
    }

`

const Events = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(2);

    useEffect(() => {
        const fetchPosts = async () => {
            setLoading(true);
            const res = await axios.get('http://localhost:4000/events');
            setPosts(res.data);
            setLoading(false);
        };
        if (window.screen.width < 400) {
            setPostsPerPage(1);
        }
        fetchPosts();
    }, []);

    // Get current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

    // Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);

    return (
        <StyledEventsSection>
            <h2>Events of the month</h2>
            <ul>
                <EventArticles posts={currentPosts} loading={loading} />
            </ul>
            <Pagination
                postsPerPage={postsPerPage}
                totalPosts={posts.length}
                paginate={paginate}
            />
        </StyledEventsSection>
    )
}

export default Events

