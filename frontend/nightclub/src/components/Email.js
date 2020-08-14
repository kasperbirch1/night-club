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
            color: red;
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

    async function onSubmit(data) {
        axios({
            method: 'post',
            url: 'http://localhost:4000/newsletters',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            data: `email=${data.email}`
        }).then(res => {
            console.log(res);
            console.log(res.data);
        })
    }

    return (
        <StyledEmailSection>
            <h3>want the latest night club news</h3>
            <h4>Subscribe to our newsletter and never miss a <span>Event</span></h4>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    type="email"
                    placeholder="Enter You Email"
                    name="email"
                    ref={register({
                        required: "Required",
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "invalid email address"
                        }
                    })}
                />
                {errors.email && errors.email.message}
                <button type="submit">subscribe </button>
            </form>
        </StyledEmailSection>
    )
}

export default Email
