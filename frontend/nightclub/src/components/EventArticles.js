import React from 'react';
import { EventArticle } from './EventArticle';

const EventArticles = ({ posts, loading }) => {
    if (loading) {
        return <h2>Loading...</h2>;
    }

    return (
        <>
            {console.log("posts", posts)}
            {
                posts.map(post => (
                    <li key={post.id} >
                        <EventArticle name={post.eventName} description="Lorem ipsum dolor sit amet consectetur adipisicing elit." time="time" date="date" location={post.location} asset={post.asset} />
                    </li>
                ))
            }
        </>
    );
};

export default EventArticles;