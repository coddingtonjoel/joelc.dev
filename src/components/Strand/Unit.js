import React from "react";

const Unit = ({ num }) => {
    return (
        <div className="strand-svg-wrapper">
            <svg
                width="128px"
                height="128px"
                viewBox="0 0 128 128"
                version="1.1"
                className={`strand-unit strand-${num}`}>
                <g
                    id="Artboard"
                    stroke="none"
                    strokeWidth="1"
                    fill="none"
                    fillRule="evenodd">
                    <rect
                        id="Rectangle-Copy"
                        stroke="#b5b5b5"
                        strokeWidth="1.75"
                        transform="translate(64.000000, 64.000000) rotate(-45.000000) translate(-64.000000, -64.000000) "
                        x="19.75"
                        y="19.75"
                        width="88.5"
                        height="88.5"></rect>
                </g>
            </svg>
        </div>
    );
};

export default Unit;
