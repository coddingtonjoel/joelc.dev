import React from "react";
import styled from "styled-components";
import { allStrandDescend } from "../../global/Animations";

const AboutUnit = ({ num }) => {
    return (
        <Wrapper>
            <SVGWrapper
                width="128px"
                height="128px"
                viewBox="0 0 128 128"
                version="1.1"
                num={num}>
                <g
                    id="Artboard"
                    stroke="none"
                    strokeWidth="1"
                    fill="none"
                    fillRule="evenodd">
                    <rect
                        id="Rectangle-Copy"
                        stroke="#999"
                        strokeWidth="1.75"
                        transform="translate(64.000000, 64.000000) rotate(-45.000000) translate(-64.000000, -64.000000) "
                        x="19.75"
                        y="19.75"
                        width="88.5"
                        height="88.5"></rect>
                </g>
            </SVGWrapper>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    margin: 0;
    padding: 0;
    animation: ${allStrandDescend} 7s linear infinite;

    /* another magic value */
    height: 126px;

    @media (min-width: 701px) {
        animation: none;
    }
`;

const SVGWrapper = styled.svg`
    z-index: 20;
`;

export default AboutUnit;
