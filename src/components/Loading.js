import React from "react";

const Loading = () => {
    return (
        <div className="loading">
            <svg
                className="loading-spinner"
                data-name="Layer 1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 400 400">
                <path
                    class="loading-path"
                    d="M200 63.63A136.37 136.37 0 1163.63 200 136.38 136.38 0 01200 63.63"
                    fill="none"
                    stroke="#EE6F6B"
                    stroke-miterlimit="10"
                    stroke-width="14"
                />
            </svg>
        </div>
    );
};

export default Loading;
