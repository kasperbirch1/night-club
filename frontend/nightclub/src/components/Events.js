import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components'
import { EventArticle } from './EventArticle';
const StyledEventsSection = styled.section`
    color: white;
    h2 {
        text-align: center;
    }
    ul {
        li {
        }
    }
`

const Events = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const result = await axios(
                'http://localhost:4000/events',
            );
            setData(result.data);
            setLoading(false);
        };
        fetchData();
    }, [])

    return (
        <StyledEventsSection>
            <h2>Events of the month</h2>
            <ul>
                {console.log(data)}
                <EventArticle name="eventName" description="eventDescription" asset="2" />
                {/* {data.map(element => {
                    return (
                        <li>
                            <EventArticle name={element.eventName} description={element.eventDescription} asset={element.asset} />
                        </li>
                    )
                })} */}
            </ul>
        </StyledEventsSection>
    )
}

export default Events

