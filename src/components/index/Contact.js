import React, { useState } from "react";
import styled from "styled-components";
import Button from "../global/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import CheckIcon from "@material-ui/icons/Check";
import axios from "axios";

const Contact = () => {
    const [buttonText, setButtonText] = useState("Submit");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const [status, setStatus] = useState({
        submitted: false,
        submitting: false,
        info: { error: false, msg: null },
    });

    const handleServerResponse = (ok, msg) => {
        if (ok) {
            setStatus({
                submitted: true,
                submitting: false,
                info: { error: false, msg: msg },
            });
            setName("");
            setEmail("");
            setMessage("");
            setButtonText(<CheckIcon />);
            setTimeout(() => {
                setButtonText("Submit");
            }, 3000);
        } else {
            setStatus({
                info: { error: true, msg: msg },
            });
            setButtonText("Error");
        }
    };

    const handleSubmit = async e => {
        e.preventDefault();
        setButtonText(<CircularProgress size={30} color="dark" />);
        setStatus(prevStatus => ({ ...prevStatus, submitting: true }));
        axios({
            method: "POST",
            url: "https://formspree.io/mrgozgna",
            data: { name: name, email: email, message: message },
        })
            .then(response => {
                handleServerResponse(
                    true,
                    "Thank you, your message has been submitted."
                );
            })
            .catch(error => {
                handleServerResponse(false, error.response.data.error);
            });
    };

    return (
        <Wrapper id="contact">
            <h4>Contact</h4>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Full Name*"
                    onChange={e => {
                        setName(e.target.value);
                    }}
                    value={name}
                    required
                />
                <input
                    type="email"
                    placeholder="Email Address*"
                    onChange={e => {
                        setEmail(e.target.value);
                    }}
                    value={email}
                    required
                />
                <textarea
                    onChange={e => {
                        setMessage(e.target.value);
                    }}
                    value={message}
                    placeholder="Message*"
                />
                <Button type="submit">{buttonText}</Button>
            </form>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    background-color: ${props => props.theme.background};
    padding-top: 1px;
    padding-bottom: 50px;

    @media (max-width: 800px) {
        padding-top: 80px; /* header height + empty space */
        margin-top: -50px; /* header height to degrees padding’s space */
    }

    h4 {
        color: ${props => props.theme.primary};
        font-size: 2.2rem;
        font-family: "Raleway";
        font-weight: 300;
        text-align: center;
        text-transform: uppercase;
        display: block;
        width: 215px;
        margin: 50px auto;
        line-height: 1.5;
        border-bottom: 1px solid ${props => props.theme.primary};
    }

    form {
        input,
        textarea {
            display: block;
            margin: 20px auto;
            width: 40vw;
            padding: 15px;
            font-family: "Raleway";
            font-size: 0.9rem;
            background: #f6f6f6;
            box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.45);
            border-radius: 2px;
            border: none;
            user-select: none;
            outline: none;
        }

        textarea {
            resize: none;
            height: 200px;
        }

        button {
            margin: 30px auto 0 auto;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: ${props => props.theme.contactButtonBackground};
            height: 50px;
            width: 200px;
            color: #494949;
            transition: 0.5s;

            &:hover {
                background-color: ${props =>
                    props.theme.contactButtonBackground};
            }
        }
    }
`;

export default Contact;
