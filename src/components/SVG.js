import React from "react";

const SVG = () => {
    return (
        <svg
            className="landing"
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
            viewBox="0 0 1920 1080"
            preserveAspectRatio="xMidYMid slice">
            <defs>
                <clipPath id="a">
                    <path d="M0 0h1920v1080H0z" />
                </clipPath>
                <filter
                    id="b"
                    x="480"
                    y="420"
                    width="1016"
                    height="245"
                    filterUnits="userSpaceOnUse">
                    <feOffset dy="3" />
                    <feGaussianBlur stdDeviation="3" result="blur" />
                    <feFlood floodOpacity=".62" />
                    <feComposite operator="in" in2="blur" />
                    <feComposite in="SourceGraphic" />
                </filter>
            </defs>
            <g data-name="Web 1920 – 2" clipPath="url(#a)">
                <path fill="#fff" d="M0 0h1920v1080H0z" />
                <g className="bottom" data-name="Path 5" fill="#303841">
                    <path d="M1910.904 1080.157H10c-5.238 0-9.5-4.262-9.5-9.5V10.959c0-5.238 4.262-9.5 9.5-9.5h1900.904c5.239 0 9.5 4.262 9.5 9.5v1059.698c0 5.238-4.261 9.5-9.5 9.5z" />
                    <path
                        d="M10 1.959c-4.963 0-9 4.037-9 9v1059.698c0 4.963 4.037 9 9 9h1900.904c4.963 0 9-4.037 9-9V10.959c0-4.963-4.037-9-9-9H10m0-1h1900.904c5.523 0 10 4.477 10 10v1059.698c0 5.523-4.477 10-10 10H10c-5.523 0-10-4.477-10-10V10.959c0-5.523 4.477-10 10-10z"
                        fill="#707070"
                    />
                </g>
                <path
                    className="center"
                    data-name="Path 3"
                    d="M0 1080.657S833.672 822 1175.535 902.629c261.814 61.75 388.021 10.081 539.491-106.911 516.309-516.309 213.633-913.262 213.633-913.262L0 1.229z"
                    fill="#FF6565"
                />
                <g className="bubble" id="Group_1" data-name="Group 1">
                    <circle
                        id="Ellipse_1"
                        data-name="Ellipse 1"
                        cx="69"
                        cy="69"
                        r="69"
                        transform="translate(100 38)"
                        fill="#eee"
                    />
                </g>
                />
                <g className="text" filter="url(#b)">
                    <text
                        data-name="My name is Joel Coddington. I'm a student web developer."
                        transform="translate(988 502)"
                        fill="#fff"
                        fontSize="67"
                        fontFamily="TitilliumWeb-Bold, Titillium Web"
                        fontWeight="700">
                        <tspan x="-489" y="0">
                            MY NAME IS JOEL CODDINGTON.
                        </tspan>
                        <tspan x="-508" y="125">
                            I&apos;M A STUDENT WEB DEVELOPER.
                        </tspan>
                    </text>
                </g>
                <path
                    className="top"
                    data-name="Path 4"
                    d="M0 344.508s445.182 25.055 679.935-100.221 519.138-11.225 727.881 19.174S1979.325 0 1979.325 0H0z"
                    fill="#eee"
                />
            </g>
            <g className="bubble-two" id="Group_1" data-name="Group 1">
                <circle
                    id="Ellipse_1"
                    data-name="Ellipse 1"
                    cx="69"
                    cy="69"
                    r="69"
                    transform="translate(1800 1000)"
                    fill="#303841"
                />
            </g>
            <g className="bubble-three" id="Group_1" data-name="Group 1">
                <circle
                    id="Ellipse_1"
                    data-name="Ellipse 1"
                    cx="50"
                    cy="50"
                    r="50"
                    transform="translate(300 900)"
                    fill="#9e3a56"
                />
            </g>
            />
        </svg>
    );
};

export default SVG;
