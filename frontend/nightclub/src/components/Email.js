import React from 'react'
import { useForm } from "react-hook-form";
import axios from 'axios'
import styled from 'styled-components'
const StyledEmailSection = styled.section`
    h3,h4 {
        text-align: center;
    }
    h3 {
        text-transform: uppercase;
    }
    h4 {
        ::first-letter {
            text-transform: uppercase;
        }
        span {
            color:var(--theme-pink);
        }
    }
    form {
        input[type=email] {
            display: block;
            width: 100%;
            background-color: transparent;
            border: none;
            border-bottom: 2px solid white;
            padding: .5rem;
            padding-bottom: .75rem;
            ::placeholder {
                padding-left: 1rem;
                color: white;
                font-weight: bold;
            }
        }
        button {
            margin: .5rem 0;
            display: block;
            width: 100%;
            background-color: transparent;
            border: none;
            border-top: 2px solid white;
            border-bottom: 2px solid white;
            padding: .5rem;
            color: gray;
            text-transform: uppercase;
            font-weight: bold;
            line-height: 2;
        }
    }
`

const Email = () => {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => console.log(data);

    // function onSubmit(event) {
    // event.preventDefault();
    // axios({
    //     method: 'post',
    //     url: 'http://localhost:4000/newsletters',
    //     headers: {
    //         'Content-Type': 'application/x-www-form-urlencoded'
    //     },
    //     data: { "email": "kasper" }
    // }).then(res => {
    //     console.log(res);
    //     console.log(res.data);
    // })
    // }
    // onSubmit()

    return (
        <StyledEmailSection>
            <h3>want the latest night club news</h3>
            <h4>Subscribe to our newsletter and never miss a <span>Event</span></h4>
            <form onSubmit={handleSubmit()}>
                <input placeholder="Enter You Email" type="email" name="email" ref={register({ pattern: /^[A-Za-z]+$/i })} />
                {errors.email && <span>This field is required</span>}
                <button type="submit">subscribe </button>
            </form>
        </StyledEmailSection>
    )
}

export default Email
