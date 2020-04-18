import React from "react";

const ProgressBar = (props) => {
    return (
        <svg
            className="progress"
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 500 80">
            <defs>
                <clipPath id="a">
                    <rect
                        className="progress-slider"
                        x="35.4"
                        y="62.8"
                        width="429.2"
                        height="14.2"
                        rx="7.1"
                        fill="none"
                    />
                </clipPath>
            </defs>
            <rect
                className="progress-body"
                x="32.5"
                y="60.4"
                width="434.9"
                height="19.2"
                rx="9.6"
                fill="#fff"
                stroke="#231f20"
                strokeWidth=".3"
            />
            <g className="progress-filled" clipPath="url(#a)">
                <rect
                    x="35.4"
                    y="62.8"
                    width={`${429.2 * props.percent}`}
                    height="14.2"
                    rx="7.1"
                />
            </g>
        </svg>
    );
};

export default ProgressBar;
