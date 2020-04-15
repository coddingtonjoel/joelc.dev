import React from "react";

const SVGButton = () => {
    return (
        <svg
            className="chev"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 450 450">
            <path
                d="M450 167v166c0 64-53 117-117 117h-83V50h83c64 0 117 53 117 117z"
                transform="translate(-29 -29)"
                fill="#ffae8f"
            />
            <path
                className="chev-container"
                d="M373 29H127a98 98 0 00-98 98v246a98 98 0 0098 98h246a98 98 0 0098-98V127a98 98 0 00-98-98zm77 304c0 64-53 117-117 117H167c-64 0-117-53-117-117V167c0-64 53-117 117-117h166c64 0 117 53 117 117z"
                fill="#ffae8f"
                transform="translate(-29 -29)"
            />
            <g>
                <path
                    d="M50 167v166c0 64 53 117 117 117h83V50h-83c-64 0-117 53-117 117z"
                    transform="translate(-29 -29)"
                    fill="#ffbda3"
                />
                <path
                    className="chev-container"
                    fill="#ffbda3"
                    d="M29 127v246a98 98 0 0098 98h246a98 98 0 0098-98V127a98 98 0 00-98-98H127a98 98 0 00-98 98zm21 40c0-64 53-117 117-117h166c64 0 117 53 117 117v166c0 64-53 117-117 117H167c-64 0-117-53-117-117z"
                    transform="translate(-29 -29)"
                />
                <path
                    className="chev-body chev-bottom"
                    d="M45 226l5 4 171 113 170-113 6-4-8-5-168 111L53 221l-8 5z"
                />
                <path
                    className="chev-shadow chev-bottom"
                    d="M45 233l176 117 176-117-6-3-170 113L50 230l-5 3z"
                />
                <path
                    className="chev-shadow chev-center"
                    d="M45 182l176 127 176-127-7-4-169 122L51 178l-6 4z"
                />
                <path
                    className="chev-body chev-center"
                    d="M45 173l6 5 170 122 169-122 7-5-13-9-163 118L58 164l-13 9z"
                />
                <g>
                    <path
                        className="chev-shadow chev-top"
                        d="M45 117l176 139 176-139-6-4-170 134L51 113l-6 4z"
                    />
                    <path
                        className="chev-body chev-top"
                        d="M45 108l6 5 170 134 170-134 6-5-21-16-155 122L65 92l-20 16z"
                    />
                </g>
            </g>
        </svg>
    );
};

export default SVGButton;
