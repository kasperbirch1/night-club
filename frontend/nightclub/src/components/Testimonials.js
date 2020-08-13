import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TestimonialItem from '../components/TestimonialItem'
import styled from 'styled-components'
const StyledTestimonialsSection = styled.section`
.pagination {
    margin: 0 auto 1rem;
    width: 200px;
    display: flex;
    justify-content: space-between;
    div {
        cursor: pointer;
        padding: .75rem;
        background-color: var(--theme-pink);
    }
}
`

const Testimonials = () => {
    const [Testimonials, setTestimonials] = useState([]);
    const [loading, setLoading] = useState(false);
    const [Person, setPerson] = useState([]);

    useEffect(() => {
        const fetchTestimonials = async () => {
            setLoading(true);
            const res = await axios.get('http://localhost:4000/testemonials');
            setTestimonials(res.data);
            setPerson(res.data[0]);
            setLoading(false);
        }
        fetchTestimonials()
    }, [])

    function HandlePagination(e) {
        setPerson(Testimonials[e.target.dataset.index])
    }

    return (
        <StyledTestimonialsSection>
            <TestimonialItem asset={Person.asset} title={Person.name} text={Person.content} facebookLink={Person.facebook} twitterLink={Person.twitter} googleLink="https://www.google.dk/" loading={loading} />
            <div className="pagination">
                {Testimonials.map((element, index) => <div key={element.name} data-index={index} onClick={(e => HandlePagination(e))} />)}
            </div>
        </StyledTestimonialsSection>
    )
}

export default Testimonials
