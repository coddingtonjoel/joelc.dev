import React from "react";
import AboutUnit from "./AboutUnit";
import styled from "styled-components";

const AboutStrand = () => {
    return (
        <Wrapper>
            <AboutUnit num={1} />
            <AboutUnit num={2} />
            <AboutUnit num={3} />
            <AboutUnit num={4} />
            <AboutUnit num={5} />
            <AboutUnit num={6} />
            <AboutUnit num={7} />
            <AboutUnit num={8} />
            <AboutUnit num={9} />
            <AboutUnit num={10} />
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: absolute;
    top: -432px;
    left: 500px;
    transform: rotate(-90deg) scale(0.9);

    @media (min-width: 701px) {
        opacity: 0;
        pointer-events: none;
        left: 0;
    }

    @media (max-width: 700px) {
        opacity: 0.8;
    }

    @media (max-width: 400px) {
        top: -442px;
        transform: rotate(-90deg) scale(0.5);
        left: 300px;
    }
`;

export default AboutStrand;
