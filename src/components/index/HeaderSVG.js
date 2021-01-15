import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { gsap } from "gsap";

const HeaderSVG = () => {
    const svgRef = useRef(null);
    const frontendRef = useRef([]);
    frontendRef.current = [];
    const iconsRef = useRef([]);
    iconsRef.current = [];
    const sidebarRef = useRef([]);
    sidebarRef.current = [];

    const addToFrontend = el => {
        if (el && !frontendRef.current.includes(el)) {
            frontendRef.current.push(el);
        }
    };

    const addToIcons = el => {
        if (el && !iconsRef.current.includes(el)) {
            iconsRef.current.push(el);
        }
    };

    const addToSidebar = el => {
        if (el && !sidebarRef.current.includes(el)) {
            sidebarRef.current.push(el);
        }
    };

    useEffect(() => {
        const tl = gsap.timeline({ duration: 1 });

        tl.fromTo(
            svgRef.current,
            { visibility: "hidden", opacity: 0, y: 20, delay: 0.7 },
            {
                opacity: 0.8,
                y: 0,
                visibility: "visible",
                ease: "power4.out",
                duration: 1.4,
            }
        );

        sidebarRef.current.forEach((type, index) => {
            gsap.fromTo(
                type,
                { scaleX: 0 },
                {
                    scaleX: 1,
                    delay: 1.5,
                    ease: "elastic.out(0.6, 0.4)",
                    duration: 1.3,
                }
            );
        });

        frontendRef.current.forEach((type, index) => {
            tl.from(
                type,
                {
                    duration: 0.6,
                    opacity: 0,
                    delay: index * 0.05,
                    y: 120,
                    ease: "power2.out",
                },
                "-=0.4"
            );
        });

        tl.to(
            svgRef.current,
            { opacity: 0.16, delay: 1.15, duration: 1 },
            "-=1.75"
        );

        iconsRef.current.forEach((type, index) => {
            tl.from(
                type,
                {
                    duration: 0.7,
                    opacity: 0,
                    y: 120,
                    delay: index * 0.15,
                },
                "-=1.1"
            );
        });
    }, []);

    return (
        <Wrapper>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1920"
                height="1080"
                viewBox="0 0 1920 1080"
                preserveAspectRatio="xMaxYMid slice"
                ref={svgRef}>
                {/* removed shadows for performance */}
                <defs>
                    <filter
                        id="Background"
                        x="1315.57"
                        y="446.426"
                        width="806.103"
                        height="515.117"
                        filterUnits="userSpaceOnUse">
                        <feOffset dy="3" input="SourceAlpha" />
                        {/* <feGaussianBlur stdDeviation="3" result="blur" /> */}
                        {/* <feFlood floodOpacity="0.161" />
                        <feComposite operator="in" in2="blur" />
                        <feComposite in="SourceGraphic" /> */}
                    </filter>
                    <filter
                        id="Background-2"
                        x="556.678"
                        y="283.316"
                        width="801.078"
                        height="515.77"
                        filterUnits="userSpaceOnUse">
                        <feOffset dy="3" input="SourceAlpha" />
                        {/* <feGaussianBlur stdDeviation="3" result="blur-2" /> */}
                        {/* <feFlood floodOpacity="0.161" />
                        <feComposite operator="in" in2="blur-2" />
                        <feComposite in="SourceGraphic" /> */}
                    </filter>
                    <filter
                        id="Background-3"
                        x="640.972"
                        y="-111.452"
                        width="806.102"
                        height="515.117"
                        filterUnits="userSpaceOnUse">
                        <feOffset dy="3" input="SourceAlpha" />
                        {/* <feGaussianBlur stdDeviation="3" result="blur-3" /> */}
                        {/* <feFlood floodOpacity="0.161" />
                        <feComposite operator="in" in2="blur-3" />
                        <feComposite in="SourceGraphic" /> */}
                    </filter>
                    <filter
                        id="Background-4"
                        x="1399.673"
                        y="48.954"
                        width="801.078"
                        height="515.77"
                        filterUnits="userSpaceOnUse">
                        <feOffset dy="3" input="SourceAlpha" />
                        {/* <feGaussianBlur stdDeviation="3" result="blur-4" /> */}
                        {/* <feFlood floodOpacity="0.161" />
                        <feComposite operator="in" in2="blur-4" />
                        <feComposite in="SourceGraphic" /> */}
                    </filter>
                    <filter
                        id="Background-5"
                        x="1231.085"
                        y="842.096"
                        width="801.078"
                        height="515.77"
                        filterUnits="userSpaceOnUse">
                        <feOffset dy="3" input="SourceAlpha" />
                        {/* <feGaussianBlur stdDeviation="3" result="blur-5" /> */}
                        {/* <feFlood floodOpacity="0.161" />
                        <feComposite operator="in" in2="blur-5" />
                        <feComposite in="SourceGraphic" /> */}
                    </filter>
                    <filter
                        id="Background-6"
                        x="472.959"
                        y="678.986"
                        width="806.102"
                        height="515.117"
                        filterUnits="userSpaceOnUse">
                        <feOffset dy="3" input="SourceAlpha" />
                        {/* <feGaussianBlur stdDeviation="3" result="blur-6" /> */}
                        {/* <feFlood floodOpacity="0.161" />
                        <feComposite operator="in" in2="blur-6" />
                        <feComposite in="SourceGraphic" /> */}
                    </filter>
                    <filter
                        id="Background-7"
                        x="-279.815"
                        y="518.118"
                        width="801.078"
                        height="515.77"
                        filterUnits="userSpaceOnUse">
                        <feOffset dy="3" input="SourceAlpha" />
                        {/* <feGaussianBlur stdDeviation="3" result="blur-7" /> */}
                        {/* <feFlood floodOpacity="0.161" />
                        <feComposite operator="in" in2="blur-7" />
                        <feComposite in="SourceGraphic" /> */}
                    </filter>
                    <filter
                        id="Background-8"
                        x="-201.313"
                        y="124.003"
                        width="806.102"
                        height="515.117"
                        filterUnits="userSpaceOnUse">
                        <feOffset dy="3" input="SourceAlpha" />
                        {/* <feGaussianBlur stdDeviation="3" result="blur-8" /> */}
                        {/* <feFlood floodOpacity="0.161" />
                        <feComposite operator="in" in2="blur-8" />
                        <feComposite in="SourceGraphic" /> */}
                    </filter>
                    <filter
                        id="Background-9"
                        x="-111.803"
                        y="-272.32"
                        width="801.078"
                        height="515.77"
                        filterUnits="userSpaceOnUse">
                        <feOffset dy="3" input="SourceAlpha" />
                        {/* <feGaussianBlur stdDeviation="3" result="blur-9" /> */}
                        {/* <feFlood floodOpacity="0.161" />
                        <feComposite operator="in" in2="blur-9" />
                        <feComposite in="SourceGraphic" /> */}
                    </filter>
                    <clipPath id="clip-Header-L">
                        <rect width="1920" height="1080" />
                    </clipPath>
                </defs>
                <clipPath id="clip-Header-L">
                    <rect width="1920" height="1080" />
                </clipPath>
                <g id="Header-L" className="cls-1">
                    <rect className="cls-3" width="1920" height="1080" />
                    <path
                        id="Path_28"
                        data-name="Path 28"
                        className="cls-2"
                        d="M0,0H1920V1080H0Z"
                    />
                    <g
                        id="Group_5"
                        data-name="Group 5"
                        transform="matrix(0.978, 0.208, -0.208, 0.978, 865.694, 244.878)">
                        <g
                            id="Component_1_1"
                            data-name="Component 1 – 1"
                            transform="translate(563.771 92.352)">
                            <g
                                className="cls-31"
                                transform="matrix(0.98, -0.21, 0.21, 0.98, -1461.46, -149.89)">
                                <rect
                                    id="Background-10"
                                    data-name="Background"
                                    className="cls-3"
                                    width="730.696"
                                    height="352.909"
                                    transform="matrix(0.98, 0.21, -0.21, 0.98, 1397.94, 452.43)"
                                />
                            </g>
                            <g id="Taskbar">
                                <rect
                                    id="Taskbar_Bkg"
                                    data-name="Taskbar Bkg"
                                    className="taskbar"
                                    width="730.696"
                                    height="51.6"
                                />
                            </g>
                            <g id="Sidebar" transform="translate(0 51.681)">
                                <path
                                    id="Sidebar-2"
                                    data-name="Sidebar"
                                    className="cls-3"
                                    d="M0,0H185.583V301.363H0Z"
                                />
                                <g
                                    id="Items"
                                    ref={addToSidebar}
                                    transform="translate(35.014 35.855)">
                                    <g
                                        id="Item_1"
                                        data-name="Item 1"
                                        transform="translate(0 0)">
                                        <circle
                                            id="Ellipse_1"
                                            data-name="Ellipse 1"
                                            className="cls-4"
                                            cx="4.146"
                                            cy="4.146"
                                            r="4.146"
                                        />
                                        <rect
                                            id="Item_1-2"
                                            data-name="Item 1"
                                            className="cls-4"
                                            width="84.772"
                                            height="7.371"
                                            rx="2"
                                            transform="translate(24.879)"
                                        />
                                    </g>
                                    <g
                                        id="Item_2"
                                        data-name="Item 2"
                                        transform="translate(0 34.093)">
                                        <circle
                                            id="Ellipse_1-2"
                                            data-name="Ellipse 1"
                                            className="cls-4"
                                            cx="4.146"
                                            cy="4.146"
                                            r="4.146"
                                            transform="translate(0 0)"
                                        />
                                        <rect
                                            id="Item_1-3"
                                            data-name="Item 1"
                                            className="cls-4"
                                            width="70.029"
                                            height="6.45"
                                            rx="2"
                                            transform="translate(24.879 0.921)"
                                        />
                                    </g>
                                    <g
                                        id="Item_3"
                                        data-name="Item 3"
                                        transform="translate(0 68.186)">
                                        <circle
                                            id="Ellipse_1-3"
                                            data-name="Ellipse 1"
                                            className="cls-4"
                                            cx="4.146"
                                            cy="4.146"
                                            r="4.146"
                                            transform="translate(0 0)"
                                        />
                                        <rect
                                            id="Item_1-4"
                                            data-name="Item 1"
                                            className="cls-4"
                                            width="91.222"
                                            height="6.45"
                                            rx="2"
                                            transform="translate(24.879 0.921)"
                                        />
                                    </g>
                                    <g
                                        id="Item_4"
                                        data-name="Item 4"
                                        transform="translate(0 102.279)">
                                        <ellipse
                                            id="Ellipse_1-4"
                                            data-name="Ellipse 1"
                                            className="cls-4"
                                            cx="4.146"
                                            cy="4.607"
                                            rx="4.146"
                                            ry="4.607"
                                            transform="translate(0 0)"
                                        />
                                        <rect
                                            id="Item_1-5"
                                            data-name="Item 1"
                                            className="cls-4"
                                            width="58.972"
                                            height="6.45"
                                            rx="2"
                                            transform="translate(24.879 0.921)"
                                        />
                                    </g>
                                    <g
                                        id="Item_5"
                                        data-name="Item 5"
                                        transform="translate(0 136.372)">
                                        <ellipse
                                            id="Ellipse_1-5"
                                            data-name="Ellipse 1"
                                            className="cls-4"
                                            cx="4.146"
                                            cy="4.607"
                                            rx="4.146"
                                            ry="4.607"
                                            transform="translate(0 0)"
                                        />
                                        <rect
                                            id="Item_1-6"
                                            data-name="Item 1"
                                            className="cls-4"
                                            width="84.772"
                                            height="6.45"
                                            rx="2"
                                            transform="translate(24.879 0.921)"
                                        />
                                    </g>
                                </g>
                            </g>
                            <g
                                id="Circle_Buttons"
                                data-name="Circle Buttons"
                                transform="translate(6.45 5.529)">
                                <ellipse
                                    id="Ellipse_2"
                                    data-name="Ellipse 2"
                                    className="cls-5"
                                    cx="3.686"
                                    cy="3.225"
                                    rx="3.686"
                                    ry="3.225"
                                    transform="translate(0 0)"
                                />
                                <circle
                                    id="Ellipse_3"
                                    data-name="Ellipse 3"
                                    className="cls-6"
                                    cx="3.225"
                                    cy="3.225"
                                    r="3.225"
                                    transform="translate(11.979 0)"
                                />
                                <circle
                                    id="Ellipse_4"
                                    data-name="Ellipse 4"
                                    className="cls-7"
                                    cx="3.225"
                                    cy="3.225"
                                    r="3.225"
                                    transform="translate(23.036 0)"
                                />
                            </g>
                            <rect
                                id="Icons_Bkg"
                                data-name="Icons Bkg"
                                className="cls-3"
                                width="545.004"
                                height="301.363"
                                transform="translate(185.248 51.346)"
                            />
                            <g id="Icons" transform="translate(254.38 89.603)">
                                <g
                                    ref={addToIcons}
                                    id="joelc.dev"
                                    transform="translate(0 1.342)">
                                    <path
                                        id="Logo-Dark"
                                        className="cls-8"
                                        d="M96.44,52.184l6.179.946a35,35,0,0,1-42.5,54.955q15.945.077,31.249-35.951c6.071-2.7,11.707-.814,8.815-2.545q-2.814-1.684-8.5.16.735-2.077,3.069-11.041h0l1.027-3.453q.419-1.768.664-3.071ZM85.952,73.539Q71.984,105.689,59.89,105.011C47.8,104.333,63.728,81.37,79.062,75.877,81.964,74.838,84.412,74.048,85.952,73.539ZM78,43A34.832,34.832,0,0,1,97.22,48.749q-.314-.09-.639-.18a.222.222,0,0,0-.166-.046h0l-.044-.012c-8.522-2.326-25.851-.449-29.537,7.349q-3.687,7.8,5.431,12.4,5.414,2.638,1.9-.734A24.951,24.951,0,0,1,69.8,62.564q-1.886-3.743,4.358-7.353T93.916,51.8a73.2,73.2,0,0,0-7.3,19.522C68.267,75.652,52.3,91.465,51.533,100.9A35,35,0,0,1,78,43Z"
                                        transform="translate(-43 -43)"
                                    />
                                </g>
                                <g
                                    ref={addToIcons}
                                    id="VSCode"
                                    transform="translate(109.404 1.342)">
                                    <path
                                        id="Path_9"
                                        data-name="Path 9"
                                        className="cls-9"
                                        d="M67.75,8.076,53.254,1.1a4.383,4.383,0,0,0-5,.85L.8,45.213a2.931,2.931,0,0,0,0,4.335l3.876,3.524a2.931,2.931,0,0,0,3.744.167L65.569,9.886a2.911,2.911,0,0,1,4.671,2.319v-.168A4.4,4.4,0,0,0,67.75,8.076Z"
                                        transform="translate(0.156 -0.662)"
                                    />
                                    <g
                                        id="Group_1"
                                        data-name="Group 1"
                                        transform="translate(0 16.818)">
                                        <path
                                            id="Path_10"
                                            data-name="Path 10"
                                            className="cls-9"
                                            d="M67.75,107.615l-14.5,6.98a4.383,4.383,0,0,1-5-.85L.8,70.477a2.931,2.931,0,0,1,0-4.335l3.876-3.524a2.931,2.931,0,0,1,3.744-.166L65.569,105.8a2.911,2.911,0,0,0,4.671-2.319v.168A4.4,4.4,0,0,1,67.75,107.615Z"
                                            transform="translate(0.156 -61.856)"
                                        />
                                    </g>
                                    <g
                                        id="Group_2"
                                        data-name="Group 2"
                                        transform="translate(48.411 0)">
                                        <path
                                            id="Path_11"
                                            data-name="Path 11"
                                            className="cls-10"
                                            d="M181,70.217a4.385,4.385,0,0,1-5-.851,2.576,2.576,0,0,0,4.4-1.821V3.765A2.576,2.576,0,0,0,176,1.944a4.385,4.385,0,0,1,5-.851l14.493,6.97a4.4,4.4,0,0,1,2.491,3.963V59.285a4.4,4.4,0,0,1-2.491,3.963Z"
                                            transform="translate(-176 -0.66)"
                                        />
                                    </g>
                                    <g
                                        id="Group_3"
                                        data-name="Group 3"
                                        className="cls-11"
                                        transform="translate(0 0)">
                                        <path
                                            id="Path_12"
                                            data-name="Path 12"
                                            className="cls-12"
                                            d="M49.732,70.351a4.379,4.379,0,0,0,3.49-.134l14.485-6.97a4.4,4.4,0,0,0,2.49-3.963V12.026a4.4,4.4,0,0,0-2.49-3.963L53.222,1.093a4.378,4.378,0,0,0-5,.851L20.5,27.242,8.418,18.074a2.928,2.928,0,0,0-3.741.166L.8,21.764A2.933,2.933,0,0,0,.8,26.1l10.475,9.556L.8,45.211a2.933,2.933,0,0,0,0,4.335L4.677,53.07a2.928,2.928,0,0,0,3.741.167L20.5,44.068l27.729,25.3A4.375,4.375,0,0,0,49.732,70.351Zm2.887-50.667L31.579,35.655l21.04,15.971Z"
                                            transform="translate(0.156 -0.66)"
                                        />
                                    </g>
                                </g>
                                <g
                                    ref={addToIcons}
                                    id="React"
                                    transform="translate(219.478 2.014)">
                                    <path
                                        id="Path_13"
                                        data-name="Path 13"
                                        className="cls-13"
                                        d="M252.071,112.014c0-5.059-6.336-9.854-16.05-12.827,2.242-9.9,1.245-17.777-3.145-20.3a6.825,6.825,0,0,0-3.487-.872v3.471a3.6,3.6,0,0,1,1.775.4c2.117,1.214,3.036,5.838,2.319,11.784-.171,1.463-.451,3-.794,4.577a75.442,75.442,0,0,0-9.885-1.7,75.934,75.934,0,0,0-6.476-7.783c5.075-4.717,9.838-7.3,13.076-7.3V78h0c-4.281,0-9.885,3.051-15.551,8.344-5.666-5.262-11.27-8.282-15.551-8.282v3.471c3.222,0,8,2.569,13.076,7.254a73.522,73.522,0,0,0-6.429,7.768,72.694,72.694,0,0,0-9.9,1.712c-.358-1.557-.623-3.067-.809-4.514-.732-5.947.171-10.57,2.273-11.8a3.464,3.464,0,0,1,1.79-.4V78.078h0a6.941,6.941,0,0,0-3.518.872c-4.374,2.522-5.355,10.383-3.1,20.253C182,102.191,175.7,106.97,175.7,112.014c0,5.059,6.336,9.854,16.049,12.827-2.242,9.9-1.245,17.777,3.145,20.3a6.843,6.843,0,0,0,3.5.872c4.281,0,9.885-3.051,15.551-8.344,5.666,5.262,11.27,8.282,15.551,8.282a6.941,6.941,0,0,0,3.518-.872c4.374-2.522,5.355-10.383,3.1-20.253C245.767,121.852,252.071,117.057,252.071,112.014ZM231.8,101.631c-.576,2.008-1.292,4.079-2.1,6.149-.638-1.245-1.308-2.491-2.039-3.736-.716-1.245-1.479-2.46-2.242-3.643C227.631,100.728,229.764,101.132,231.8,101.631Zm-7.13,16.579c-1.214,2.1-2.46,4.094-3.752,5.947-2.319.2-4.67.311-7.036.311-2.351,0-4.7-.109-7.005-.3q-1.938-2.779-3.767-5.915-1.775-3.059-3.238-6.2c.965-2.086,2.055-4.172,3.222-6.211,1.214-2.1,2.46-4.094,3.752-5.947,2.319-.2,4.67-.311,7.036-.311,2.351,0,4.7.109,7.005.3q1.938,2.779,3.767,5.915,1.775,3.059,3.238,6.2C226.915,114.084,225.841,116.17,224.674,118.209Zm5.028-2.024c.841,2.086,1.557,4.172,2.148,6.2-2.039.5-4.187.918-6.414,1.245.763-1.2,1.526-2.428,2.242-3.689C228.394,118.692,229.064,117.431,229.7,116.186ZM213.917,132.8a64.178,64.178,0,0,1-4.328-4.981c1.4.062,2.833.109,4.281.109,1.463,0,2.911-.031,4.328-.109A60.766,60.766,0,0,1,213.917,132.8Zm-11.582-9.169c-2.21-.327-4.343-.732-6.382-1.23.576-2.008,1.292-4.079,2.1-6.149.638,1.245,1.308,2.491,2.039,3.736S201.572,122.444,202.335,123.627Zm11.5-32.395a64.176,64.176,0,0,1,4.328,4.981c-1.4-.062-2.833-.109-4.281-.109-1.463,0-2.911.031-4.328.109A60.759,60.759,0,0,1,213.839,91.232ZM202.32,100.4c-.763,1.2-1.526,2.428-2.242,3.689-.716,1.245-1.385,2.491-2.024,3.736-.841-2.086-1.557-4.172-2.148-6.2C197.945,101.148,200.093,100.728,202.32,100.4Zm-14.088,19.49c-5.511-2.351-9.076-5.433-9.076-7.877s3.565-5.542,9.076-7.877c1.339-.576,2.8-1.09,4.312-1.572a74.767,74.767,0,0,0,3.5,9.48,73.712,73.712,0,0,0-3.456,9.434C191.049,121,189.586,120.467,188.231,119.891Zm8.375,22.245c-2.117-1.214-3.036-5.838-2.319-11.784.171-1.463.451-3,.794-4.577a75.446,75.446,0,0,0,9.885,1.7,75.936,75.936,0,0,0,6.476,7.783c-5.075,4.717-9.838,7.3-13.076,7.3A3.715,3.715,0,0,1,196.606,142.136Zm36.925-11.862c.732,5.947-.171,10.57-2.273,11.8a3.464,3.464,0,0,1-1.79.4c-3.222,0-8-2.569-13.076-7.254a73.523,73.523,0,0,0,6.429-7.768,72.695,72.695,0,0,0,9.9-1.712A43.575,43.575,0,0,1,233.531,130.274Zm5.993-10.383c-1.339.576-2.8,1.09-4.312,1.572a74.766,74.766,0,0,0-3.5-9.48,73.707,73.707,0,0,0,3.456-9.434c1.541.483,3,1.012,4.374,1.588,5.511,2.351,9.076,5.433,9.076,7.877C248.6,114.458,245.035,117.556,239.525,119.891Z"
                                        transform="translate(-175.7 -78)"
                                    />
                                    <path
                                        id="Path_14"
                                        data-name="Path 14"
                                        className="cls-13"
                                        d="M320.8,78.4Z"
                                        transform="translate(-298.212 -78.338)"
                                    />
                                    <circle
                                        id="Ellipse_5"
                                        data-name="Ellipse 5"
                                        className="cls-13"
                                        cx="7.114"
                                        cy="7.114"
                                        r="7.114"
                                        transform="translate(31.056 26.9)"
                                    />
                                    <path
                                        id="Path_15"
                                        data-name="Path 15"
                                        className="cls-13"
                                        d="M520.5,78.1Z"
                                        transform="translate(-466.825 -78.084)"
                                    />
                                </g>
                                <g
                                    id="Gatsby"
                                    transform="translate(335.594 0)"
                                    ref={addToIcons}>
                                    <circle
                                        id="Ellipse_6"
                                        data-name="Ellipse 6"
                                        className="cls-13"
                                        cx="34.902"
                                        cy="34.902"
                                        r="34.902"
                                        transform="translate(0)"
                                    />
                                    <path
                                        id="Path_16"
                                        data-name="Path 16"
                                        className="cls-3"
                                        d="M11.048,50.283A27.3,27.3,0,0,1,3,31.169L30.414,58.332A28.549,28.549,0,0,1,11.048,50.283ZM36.7,57.577,3.755,24.63a27.648,27.648,0,0,1,49.3-10.312l-3.773,3.27A23.219,23.219,0,0,0,30.666,8.03,22.875,22.875,0,0,0,9.288,23.121L38.211,52.044A22.8,22.8,0,0,0,52.8,35.7H40.726v-5.03H58.332A27.744,27.744,0,0,1,36.7,57.577Z"
                                        transform="translate(4.358 4.358)"
                                    />
                                </g>
                                <g
                                    id="XD"
                                    transform="translate(0 106.048)"
                                    ref={addToIcons}>
                                    <g id="Surfaces">
                                        <g id="UI_UX_Surface">
                                            <g id="Outline_no_shadow">
                                                <path
                                                    id="Path_17"
                                                    data-name="Path 17"
                                                    className="cls-13"
                                                    d="M12.408,0H57.661A12.4,12.4,0,0,1,70.069,12.408v43.5A12.4,12.4,0,0,1,57.661,68.317H12.408A12.4,12.4,0,0,1,0,55.909v-43.5A12.4,12.4,0,0,1,12.408,0Z"
                                                />
                                            </g>
                                        </g>
                                    </g>
                                    <g
                                        id="Outlined_Mnemonics_Logos"
                                        transform="translate(10.207 14.973)">
                                        <g id="Xd-2" data-name="Xd">
                                            <path
                                                id="Path_18"
                                                data-name="Path 18"
                                                className="cls-3"
                                                d="M61.6,60.438,52.84,74.89l9.343,15.328a.5.5,0,0,1,.058.35c-.029.117-.146.029-.321.058H55.234c-.467,0-.788-.029-.993-.321-.613-1.226-1.255-2.423-1.869-3.649-.613-1.2-1.285-2.423-1.985-3.679s-1.4-2.511-2.1-3.8h-.058c-.613,1.255-1.285,2.511-1.956,3.766s-1.343,2.511-1.985,3.737c-.671,1.226-1.343,2.482-2.014,3.679-.117.292-.35.321-.671.321H35.177c-.117,0-.2.058-.2-.088a.405.405,0,0,1,.058-.321l9.08-14.89L35.264,60.409c-.088-.117-.117-.234-.058-.292A.339.339,0,0,1,35.5,60h6.627a1.723,1.723,0,0,1,.409.058.828.828,0,0,1,.292.263c.555,1.255,1.2,2.511,1.869,3.766.7,1.255,1.372,2.482,2.1,3.708.7,1.226,1.343,2.452,1.956,3.708h.058c.613-1.285,1.255-2.54,1.9-3.766s1.314-2.452,1.985-3.679,1.314-2.482,1.956-3.679a.5.5,0,0,1,.175-.292.557.557,0,0,1,.38-.058h6.16a.269.269,0,0,1,.321.2c.029.029-.029.146-.088.2Z"
                                                transform="translate(-34.961 -57.455)"
                                            />
                                            <path
                                                id="Path_19"
                                                data-name="Path 19"
                                                className="cls-3"
                                                d="M142.589,85.068a14.515,14.515,0,0,1-6.277-1.314,10.178,10.178,0,0,1-4.409-3.971,12.633,12.633,0,0,1-1.606-6.657,11.991,11.991,0,0,1,1.606-6.16,12.124,12.124,0,0,1,4.642-4.525,14.934,14.934,0,0,1,7.386-1.693,5.214,5.214,0,0,1,.613.029c.263.029.555.029.905.058V51.61c0-.2.088-.321.292-.321h5.927a.262.262,0,0,1,.292.2V79.346c0,.526.029,1.109.058,1.752.058.613.088,1.2.117,1.693a.474.474,0,0,1-.292.467,22.3,22.3,0,0,1-4.759,1.4A25.754,25.754,0,0,1,142.589,85.068Zm2.861-5.839V66.383a7.467,7.467,0,0,0-.788-.146c-.321-.029-.642-.058-.963-.058a7.2,7.2,0,0,0-3.3.759,6.545,6.545,0,0,0-2.482,2.16,6.472,6.472,0,0,0-.963,3.708,8.136,8.136,0,0,0,.5,3.007,5.706,5.706,0,0,0,1.314,2.073,5.044,5.044,0,0,0,1.985,1.168,7.642,7.642,0,0,0,2.423.38c.438,0,.847-.029,1.226-.058A2.554,2.554,0,0,0,145.45,79.229Z"
                                                transform="translate(-102.463 -51.284)"
                                            />
                                        </g>
                                    </g>
                                </g>
                                <g
                                    id="Illustrator"
                                    ref={addToIcons}
                                    transform="translate(112.494 105.99)">
                                    <g
                                        id="Surfaces-2"
                                        data-name="Surfaces"
                                        transform="translate(0 0)">
                                        <g id="Drawing_Surface">
                                            <g
                                                id="Outline_no_shadow-2"
                                                data-name="Outline_no_shadow">
                                                <path
                                                    id="Path_25"
                                                    data-name="Path 25"
                                                    className="cls-13"
                                                    d="M12.455,0H57.88A12.445,12.445,0,0,1,70.335,12.455V56.121A12.445,12.445,0,0,1,57.88,68.576H12.455A12.445,12.445,0,0,1,0,56.121V12.455A12.445,12.445,0,0,1,12.455,0Z"
                                                    transform="translate(0 0)"
                                                />
                                            </g>
                                        </g>
                                    </g>
                                    <g
                                        id="Outlined_Mnemonics_Logos-2"
                                        data-name="Outlined_Mnemonics_Logos"
                                        transform="translate(14.533 15.21)">
                                        <g id="Ai">
                                            <path
                                                id="Path_26"
                                                data-name="Path 26"
                                                className="cls-3"
                                                d="M69.14,83.491h-10.9l-2.227,6.887a.513.513,0,0,1-.557.41h-5.51c-.322,0-.41-.176-.322-.527l9.437-27.167c.088-.293.176-.615.293-.967a10.236,10.236,0,0,0,.176-1.9.29.29,0,0,1,.234-.322h7.59c.234,0,.352.088.381.234L78.43,90.32c.088.322,0,.469-.293.469H72.012a.442.442,0,0,1-.469-.322Zm-9.2-5.949h7.444c-.176-.615-.41-1.348-.674-2.11-.264-.791-.528-1.641-.791-2.52-.293-.908-.557-1.788-.85-2.7s-.557-1.758-.791-2.608c-.234-.821-.44-1.583-.645-2.286h-.059a35.983,35.983,0,0,1-1,3.78c-.44,1.407-.879,2.872-1.348,4.337-.41,1.495-.85,2.872-1.289,4.1Z"
                                                transform="translate(-49.59 -57.555)"
                                            />
                                            <path
                                                id="Path_27"
                                                data-name="Path 27"
                                                className="cls-3"
                                                d="M161.1,59.256a3.627,3.627,0,0,1-2.608-1.026,3.807,3.807,0,0,1-1-2.7,3.448,3.448,0,0,1,1.055-2.608,3.753,3.753,0,0,1,2.608-1.026,3.509,3.509,0,0,1,2.667,1.026,4.029,4.029,0,0,1-.059,5.3A3.446,3.446,0,0,1,161.1,59.256Zm-3.282,25.438V62.128c0-.293.117-.41.381-.41H164c.264,0,.381.147.381.41V84.694c0,.322-.117.469-.381.469h-5.744A.41.41,0,0,1,157.818,84.694Z"
                                                transform="translate(-125.872 -51.9)"
                                            />
                                        </g>
                                    </g>
                                </g>
                                <g
                                    id="Electron"
                                    ref={addToIcons}
                                    transform="translate(221.492 104.034)">
                                    <circle
                                        id="Ellipse_7"
                                        data-name="Ellipse 7"
                                        className="cls-13"
                                        cx="35.909"
                                        cy="35.909"
                                        r="35.909"
                                    />
                                    <g
                                        id="Group_4"
                                        data-name="Group 4"
                                        transform="translate(10.005 8.096)">
                                        <path
                                            id="Path_21"
                                            data-name="Path 21"
                                            className="cls-3"
                                            d="M58.46,70.436c-7.281-1.326-13.038.062-15.332,4.036-1.712,2.965-1.223,6.9,1.187,11.1a.747.747,0,1,0,1.3-.743c-2.171-3.786-2.593-7.179-1.189-9.61,1.906-3.3,7.041-4.539,13.771-3.313a.747.747,0,1,0,.268-1.469ZM48.1,90.68a46.719,46.719,0,0,0,11.131,8.788c10.561,6.1,21.805,7.728,27.346,3.949a.747.747,0,1,0-.841-1.234c-4.959,3.382-15.64,1.833-25.758-4.009a45.241,45.241,0,0,1-10.773-8.5.747.747,0,0,0-1.1,1.005Z"
                                            transform="translate(-40.326 -58.461)"
                                        />
                                        <path
                                            id="Path_22"
                                            data-name="Path 22"
                                            className="cls-3"
                                            d="M84.869,89.877c4.767-5.632,6.432-11.3,4.142-15.262-1.685-2.918-5.246-4.459-9.98-4.52a.747.747,0,1,0-.019,1.493c4.257.055,7.326,1.383,8.706,3.774,1.9,3.294.417,8.345-3.989,13.55a.747.747,0,1,0,1.14.965ZM72.617,70.79a46.633,46.633,0,0,0-13.3,5.273C48.41,82.358,41.3,91.64,42.285,98.37a.747.747,0,1,0,1.477-.217c-.877-5.976,5.865-14.774,16.3-20.8A45.139,45.139,0,0,1,72.93,72.25a.747.747,0,1,0-.313-1.46Z"
                                            transform="translate(-40.385 -58.566)"
                                        />
                                        <path
                                            id="Path_23"
                                            data-name="Path 23"
                                            className="cls-3"
                                            d="M50.3,82.227c2.493,6.96,6.571,11.246,11.156,11.246,3.344,0,6.438-2.28,8.851-6.293a.747.747,0,1,0-1.28-.769c-2.168,3.607-4.832,5.569-7.571,5.569-3.809,0-7.446-3.822-9.75-10.255a.747.747,0,1,0-1.406.5Zm22.768-1.362a46.868,46.868,0,0,0,1.984-13.837c0-12.369-4.329-23.031-10.5-25.769a.747.747,0,1,0-.606,1.365c5.5,2.442,9.608,12.561,9.608,24.4A45.4,45.4,0,0,1,71.646,80.42a.747.747,0,1,0,1.425.446Zm14.061-.731a3.573,3.573,0,1,0-3.573,3.573A3.573,3.573,0,0,0,87.132,80.134Zm-1.493,0a2.08,2.08,0,1,1-2.08-2.08,2.08,2.08,0,0,1,2.08,2.08ZM39.307,83.708a3.573,3.573,0,1,0-3.573-3.573A3.573,3.573,0,0,0,39.307,83.708Zm0-1.493a2.08,2.08,0,1,1,2.08-2.08A2.08,2.08,0,0,1,39.307,82.215Z"
                                            transform="translate(-35.734 -37.757)"
                                        />
                                        <path
                                            id="Path_24"
                                            data-name="Path 24"
                                            className="cls-3"
                                            d="M118.427,36.065a3.573,3.573,0,1,0-3.573-3.573A3.573,3.573,0,0,0,118.427,36.065Zm0-1.493a2.08,2.08,0,1,1,2.08-2.08A2.08,2.08,0,0,1,118.427,34.572Zm.546,26.145a2.585,2.585,0,1,1,1.981-3.073A2.585,2.585,0,0,1,118.973,60.716Z"
                                            transform="translate(-92.702 -28.918)"
                                        />
                                    </g>
                                </g>
                                <g
                                    id="Git"
                                    ref={addToIcons}
                                    transform="translate(335.597 103.367)">
                                    <path
                                        id="Path_20"
                                        data-name="Path 20"
                                        className="cls-13"
                                        d="M72.278,34.923,41.251,3.9a4.577,4.577,0,0,0-6.472,0l-6.442,6.444,8.172,8.172a5.435,5.435,0,0,1,6.882,6.929l7.878,7.877a5.44,5.44,0,1,1-3.261,3.071L40.66,29.045V48.377a5.437,5.437,0,1,1-4.477-.159V28.706a5.448,5.448,0,0,1-2.957-7.142l-8.056-8.058L3.9,34.78a4.579,4.579,0,0,0,0,6.474L34.923,72.279a4.577,4.577,0,0,0,6.472,0L72.278,41.4A4.579,4.579,0,0,0,72.278,34.923Z"
                                        transform="translate(-2.555 -2.558)"
                                    />
                                </g>
                            </g>
                            <line
                                id="Sidebar_Divider"
                                data-name="Sidebar Divider"
                                className="cls-14"
                                y2="300.692"
                                transform="translate(185.583 52.353)"
                            />
                        </g>
                        <g id="Windows" transform="translate(-212.075 90.509)">
                            <g
                                className="cls-30"
                                transform="matrix(0.98, -0.21, 0.21, 0.98, -685.61, -150.05)">
                                <rect
                                    id="Background-11"
                                    data-name="Background"
                                    className="windows-bkg"
                                    width="720.168"
                                    height="354.752"
                                    transform="matrix(0.98, 0.21, -0.21, 0.98, 639.44, 289.32)"
                                />
                            </g>
                            <g id="Taskbar-2" data-name="Taskbar">
                                <rect
                                    id="Taskbar_Bkg-2"
                                    data-name="Taskbar Bkg"
                                    className="taskbar"
                                    width="725.168"
                                    height="47.915"
                                />
                                <g id="Buttons" transform="translate(611.831)">
                                    <g id="Minimize" transform="translate(0)">
                                        <rect
                                            id="Rectangle_4"
                                            data-name="Rectangle 4"
                                            className="cls-15"
                                            width="35.014"
                                            height="25.8"
                                        />
                                        <line
                                            id="Line_3"
                                            data-name="Line 3"
                                            className="cls-16"
                                            x2="7.951"
                                            transform="translate(13.764 17.641)"
                                        />
                                    </g>
                                    <g
                                        id="Maximize"
                                        transform="translate(35.014)">
                                        <rect
                                            id="Maximize-2"
                                            data-name="Maximize"
                                            className="cls-15"
                                            width="35.936"
                                            height="25.8"
                                            transform="translate(0)"
                                        />
                                        <g
                                            id="Rectangle_5"
                                            data-name="Rectangle 5"
                                            className="cls-17"
                                            transform="translate(13.821 8.293)">
                                            <rect
                                                className="cls-21"
                                                width="8.293"
                                                height="9.214"
                                            />
                                            <rect
                                                className="cls-22"
                                                x="0.75"
                                                y="0.75"
                                                width="6.793"
                                                height="7.714"
                                            />
                                        </g>
                                    </g>
                                    <g id="Close" transform="translate(70.029)">
                                        <rect
                                            id="Button"
                                            className="cls-18"
                                            width="43.307"
                                            height="25.8"
                                            transform="translate(0)"
                                        />
                                        <g
                                            id="X"
                                            transform="translate(17.77 9.193)">
                                            <line
                                                id="Line_1"
                                                data-name="Line 1"
                                                className="cls-19"
                                                x2="7.101"
                                                y2="7.101"
                                                transform="translate(0 0)"
                                            />
                                            <line
                                                id="Line_2"
                                                data-name="Line 2"
                                                className="cls-19"
                                                x2="7.101"
                                                y2="7.101"
                                                transform="translate(7.101 0) rotate(90)"
                                            />
                                        </g>
                                    </g>
                                </g>
                            </g>
                            <g
                                id="Sidebar-3"
                                data-name="Sidebar"
                                transform="translate(0 48.325)">
                                <path
                                    id="Sidebar-4"
                                    data-name="Sidebar"
                                    className="cls-3"
                                    d="M0,0H181.892V306.061H0Z"
                                    transform="translate(0 0)"
                                />
                                <g
                                    id="Items-2"
                                    ref={addToSidebar}
                                    data-name="Items"
                                    transform="translate(33.172 35.525)">
                                    <g
                                        id="Item_1-7"
                                        data-name="Item 1"
                                        transform="translate(0 0)">
                                        <ellipse
                                            id="Ellipse_1-6"
                                            data-name="Ellipse 1"
                                            className="cls-4"
                                            cx="4.146"
                                            cy="4.607"
                                            rx="4.146"
                                            ry="4.607"
                                        />
                                        <rect
                                            id="Item_1-8"
                                            data-name="Item 1"
                                            className="cls-4"
                                            width="83.85"
                                            height="6.45"
                                            rx="2"
                                            transform="translate(24.879 0.921)"
                                        />
                                    </g>
                                    <g
                                        id="Item_2-2"
                                        data-name="Item 2"
                                        transform="translate(0 34.093)">
                                        <circle
                                            id="Ellipse_1-7"
                                            data-name="Ellipse 1"
                                            className="cls-4"
                                            cx="4.146"
                                            cy="4.146"
                                            r="4.146"
                                            transform="translate(0 0)"
                                        />
                                        <rect
                                            id="Item_1-9"
                                            data-name="Item 1"
                                            className="cls-4"
                                            width="69.107"
                                            height="6.45"
                                            rx="2"
                                            transform="translate(24.879 0.921)"
                                        />
                                    </g>
                                    <g
                                        id="Item_3-2"
                                        data-name="Item 3"
                                        transform="translate(0 68.186)">
                                        <ellipse
                                            id="Ellipse_1-8"
                                            data-name="Ellipse 1"
                                            className="cls-4"
                                            cx="4.146"
                                            cy="4.607"
                                            rx="4.146"
                                            ry="4.607"
                                            transform="translate(0 0)"
                                        />
                                        <rect
                                            id="Item_1-10"
                                            data-name="Item 1"
                                            className="cls-4"
                                            width="91.222"
                                            height="6.45"
                                            rx="2"
                                            transform="translate(24.879 0.921)"
                                        />
                                    </g>
                                    <g
                                        id="Item_4-2"
                                        data-name="Item 4"
                                        transform="translate(0 102.279)">
                                        <ellipse
                                            id="Ellipse_1-9"
                                            data-name="Ellipse 1"
                                            className="cls-4"
                                            cx="4.146"
                                            cy="4.607"
                                            rx="4.146"
                                            ry="4.607"
                                            transform="translate(0 0)"
                                        />
                                        <rect
                                            id="Item_1-11"
                                            data-name="Item 1"
                                            className="cls-4"
                                            width="58.972"
                                            height="7.371"
                                            rx="2"
                                            transform="translate(24.879 0.921)"
                                        />
                                    </g>
                                    <g
                                        id="Item_5-2"
                                        data-name="Item 5"
                                        transform="translate(0 137.293)">
                                        <circle
                                            id="Ellipse_1-10"
                                            data-name="Ellipse 1"
                                            className="cls-4"
                                            cx="4.146"
                                            cy="4.146"
                                            r="4.146"
                                            transform="translate(0 0)"
                                        />
                                        <rect
                                            id="Item_1-12"
                                            data-name="Item 1"
                                            className="cls-4"
                                            width="84.772"
                                            height="7.371"
                                            rx="2"
                                            transform="translate(24.879 0)"
                                        />
                                    </g>
                                </g>
                            </g>
                            <path
                                id="Sidebar_Divider-2"
                                data-name="Sidebar Divider"
                                className="cls-14"
                                d="M.5-5.5V300.561"
                                transform="translate(182.063 53.825)"
                            />
                            <g
                                id="CSS"
                                transform="translate(231.28 85.693)"
                                ref={addToFrontend}>
                                <rect
                                    id="Rectangle_6"
                                    data-name="Rectangle 6"
                                    className="windows-skill-bkg"
                                    width="128.079"
                                    height="129.001"
                                    rx="2"
                                    transform="translate(0 0)"
                                />
                                <g
                                    id="CSS-2"
                                    data-name="CSS"
                                    transform="translate(30.483 17.67)">
                                    <g id="g3013" transform="translate(0 0)">
                                        <path
                                            id="polygon2989"
                                            className="html-bkg"
                                            d="M141.111,100.62l-6.056,67.846-27.224,7.547-27.149-7.537-6.05-67.857Z"
                                            transform="translate(-74.633 -82.179)"
                                        />
                                        <path
                                            fill="#ddd"
                                            className="cls-4"
                                            d="M278,188.872l5.176-57.978H256v64.077Z"
                                            transform="translate(-222.761 -106.905)"
                                        />
                                        <path
                                            id="polygon2993"
                                            className="html-num-left"
                                            d="M150.31,268.217l.746,8.322H169.68v-8.322Z"
                                            transform="translate(-136.441 -219.061)"
                                        />
                                        <path
                                            id="polygon2995"
                                            className="html-num-left"
                                            d="M163,176.3H142.132l.757,8.322H163Z"
                                            transform="translate(-129.761 -143.994)"
                                        />
                                        <path
                                            id="polygon2997"
                                            className="html-num-left"
                                            d="M174.661,354.122v-8.659l-.036.01-9.269-2.5-.593-6.637h-8.354l1.166,13.067,17.048,4.733Z"
                                            transform="translate(-141.422 -274.693)"
                                        />
                                        <path
                                            id="path2999"
                                            className="cls-20"
                                            d="M160,0h10.08V4.215h-5.865V8.43h5.865v4.215H160Z"
                                            transform="translate(-144.355)"
                                        />
                                        <path
                                            id="path3001"
                                            className="cls-20"
                                            d="M226,0h10.08V3.665h-5.865V4.4h5.865v8.43H226V8.98h5.865V8.247H226Z"
                                            transform="translate(-198.259)"
                                        />
                                        <path
                                            id="path3003"
                                            className="cls-20"
                                            d="M292,0h10.08V3.665h-5.865V4.4h5.865v8.43H292V8.98h5.865V8.247H292Z"
                                            transform="translate(-252.163)"
                                        />
                                        <path
                                            id="polygon3005"
                                            className="html-num-right"
                                            d="M266.091,201.472l-.966,10.794-9.282,2.505v8.658L272.9,218.7l.125-1.406,1.956-21.91.2-2.235,1.5-16.845H255.843v8.322H267.57l-.757,8.522h-10.97v8.322Z"
                                            transform="translate(-222.633 -143.994)"
                                        />
                                    </g>
                                </g>
                            </g>
                            <g
                                id="HTML"
                                transform="translate(391.609 85.693)"
                                ref={addToFrontend}>
                                <rect
                                    id="Rectangle_6-2"
                                    data-name="Rectangle 6"
                                    className="windows-skill-bkg"
                                    width="129.001"
                                    height="129.001"
                                    rx="2"
                                    transform="translate(0 0)"
                                />
                                <g
                                    id="HTML-2"
                                    data-name="HTML"
                                    transform="translate(31.239 17.49)">
                                    <path
                                        id="Path_1"
                                        data-name="Path 1"
                                        className="cls-20"
                                        d="M108.4,0h4.222V4.186h3.892V0h4.222V12.667h-4.222V8.445h-3.855v4.222H108.4m17.918-8.445h-3.727V0h11.694V4.222H130.54v8.445h-4.222M136.14,0h4.424l2.717,4.461L146,0h4.424V12.667H146.2V6.389l-2.956,4.553-2.956-4.553v6.279H136.14M152.516,0h4.222V8.482h5.985v4.186H152.516"
                                        transform="translate(-102.195)"
                                    />
                                    <path
                                        id="Path_2"
                                        data-name="Path 2"
                                        className="html-bkg"
                                        d="M80.658,168.6l-6.058-68h66.6l-6.058,67.963-27.3,7.564"
                                        transform="translate(-74.6 -82.131)"
                                    />
                                    <path
                                        id="Path_3"
                                        data-name="Path 3"
                                        className="html-right"
                                        d="M256,195.163V131h27.226l-5.2,58.013"
                                        transform="translate(-222.698 -106.95)"
                                    />
                                    <path
                                        id="Path_4"
                                        data-name="Path 4"
                                        className="html-num-left"
                                        d="M142,176.3h20.929v8.335H151.143l.771,8.537h11.015v8.316H144.276m.367,4.186h8.372l.587,6.664,9.326,2.5v8.7l-17.11-4.773"
                                        transform="translate(-129.626 -143.934)"
                                    />
                                    <path
                                        id="Path_5"
                                        data-name="Path 5"
                                        className="html-num-right"
                                        d="M276.692,176.3H255.8v8.335h20.121m-.753,8.537H255.8v8.335h10.281l-.973,10.832-9.308,2.5V223.5l17.073-4.737"
                                        transform="translate(-222.534 -143.934)"
                                    />
                                </g>
                            </g>
                            <g
                                id="JS"
                                transform="translate(552.86 85.693)"
                                ref={addToFrontend}>
                                <rect
                                    id="Rectangle_6-3"
                                    data-name="Rectangle 6"
                                    className="windows-skill-bkg"
                                    width="129.001"
                                    height="129.001"
                                    rx="2"
                                    transform="translate(0 0)"
                                />
                                <g
                                    id="JS-2"
                                    data-name="JS"
                                    transform="translate(25.033 25.388)">
                                    <rect
                                        id="Rectangle_7"
                                        data-name="Rectangle 7"
                                        className="js"
                                        width="79.2"
                                        height="79.2"
                                        transform="translate(0 0)"
                                    />
                                    <path
                                        id="Path_6"
                                        data-name="Path 6"
                                        className="js-logo"
                                        d="M198.144,311.757c1.591,2.6,3.661,4.508,7.323,4.508,3.076,0,5.041-1.537,5.041-3.661,0-2.545-2.019-3.447-5.4-4.928l-1.856-.8c-5.357-2.282-8.915-5.141-8.915-11.184,0-5.567,4.242-9.805,10.871-9.805,4.72,0,8.112,1.643,10.557,5.943l-5.78,3.711c-1.273-2.282-2.646-3.181-4.777-3.181a3.23,3.23,0,0,0-3.552,3.181c0,2.227,1.379,3.128,4.564,4.508l1.856.795c6.307,2.7,9.868,5.462,9.868,11.661,0,6.683-5.25,10.344-12.3,10.344-6.894,0-11.347-3.285-13.527-7.591Zm-26.222.643c1.166,2.069,2.227,3.818,4.777,3.818,2.439,0,3.977-.954,3.977-4.664v-25.24H188.1v25.34c0,7.686-4.506,11.184-11.084,11.184-5.943,0-9.385-3.076-11.136-6.78Z"
                                        transform="translate(-144.824 -249.787)"
                                    />
                                </g>
                            </g>
                        </g>
                        <g
                            id="Component_10_2"
                            data-name="Component 10 – 2"
                            transform="translate(-212.075 -313.079)">
                            <g
                                className="cls-29"
                                transform="matrix(0.98, -0.21, 0.21, 0.98, -698.61, 253.54)">
                                <rect
                                    id="Background-12"
                                    data-name="Background"
                                    className="cls-3"
                                    width="730.696"
                                    height="352.909"
                                    transform="matrix(0.98, 0.21, -0.21, 0.98, 723.35, -105.45)"
                                />
                            </g>
                            <g id="Taskbar-3" data-name="Taskbar">
                                <rect
                                    id="Taskbar_Bkg-3"
                                    data-name="Taskbar Bkg"
                                    className="taskbar"
                                    width="730.696"
                                    height="51.6"
                                />
                            </g>
                            <g
                                id="Sidebar-5"
                                data-name="Sidebar"
                                transform="translate(0 51.681)">
                                <path
                                    id="Sidebar-6"
                                    data-name="Sidebar"
                                    className="cls-3"
                                    d="M0,0H185.583V301.363H0Z"
                                />
                                <g
                                    id="Items-3"
                                    ref={addToSidebar}
                                    data-name="Items"
                                    transform="translate(35.014 35.855)">
                                    <g
                                        id="Item_1-13"
                                        data-name="Item 1"
                                        transform="translate(0 0)">
                                        <circle
                                            id="Ellipse_1-11"
                                            data-name="Ellipse 1"
                                            className="cls-4"
                                            cx="4.146"
                                            cy="4.146"
                                            r="4.146"
                                        />
                                        <rect
                                            id="Item_1-14"
                                            data-name="Item 1"
                                            className="cls-4"
                                            width="84.772"
                                            height="7.371"
                                            rx="2"
                                            transform="translate(24.879)"
                                        />
                                    </g>
                                    <g
                                        id="Item_2-3"
                                        data-name="Item 2"
                                        transform="translate(0 34.093)">
                                        <circle
                                            id="Ellipse_1-12"
                                            data-name="Ellipse 1"
                                            className="cls-4"
                                            cx="4.146"
                                            cy="4.146"
                                            r="4.146"
                                            transform="translate(0 0)"
                                        />
                                        <rect
                                            id="Item_1-15"
                                            data-name="Item 1"
                                            className="cls-4"
                                            width="70.029"
                                            height="6.45"
                                            rx="2"
                                            transform="translate(24.879 0.921)"
                                        />
                                    </g>
                                    <g
                                        id="Item_3-3"
                                        data-name="Item 3"
                                        transform="translate(0 68.186)">
                                        <circle
                                            id="Ellipse_1-13"
                                            data-name="Ellipse 1"
                                            className="cls-4"
                                            cx="4.146"
                                            cy="4.146"
                                            r="4.146"
                                            transform="translate(0 0)"
                                        />
                                        <rect
                                            id="Item_1-16"
                                            data-name="Item 1"
                                            className="cls-4"
                                            width="91.222"
                                            height="6.45"
                                            rx="2"
                                            transform="translate(24.879 0.921)"
                                        />
                                    </g>
                                    <g
                                        id="Item_4-3"
                                        data-name="Item 4"
                                        transform="translate(0 102.279)">
                                        <ellipse
                                            id="Ellipse_1-14"
                                            data-name="Ellipse 1"
                                            className="cls-4"
                                            cx="4.146"
                                            cy="4.607"
                                            rx="4.146"
                                            ry="4.607"
                                            transform="translate(0 0)"
                                        />
                                        <rect
                                            id="Item_1-17"
                                            data-name="Item 1"
                                            className="cls-4"
                                            width="58.972"
                                            height="6.45"
                                            rx="2"
                                            transform="translate(24.879 0.921)"
                                        />
                                    </g>
                                    <g
                                        id="Item_5-3"
                                        data-name="Item 5"
                                        transform="translate(0 136.372)">
                                        <ellipse
                                            id="Ellipse_1-15"
                                            data-name="Ellipse 1"
                                            className="cls-4"
                                            cx="4.146"
                                            cy="4.607"
                                            rx="4.146"
                                            ry="4.607"
                                            transform="translate(0 0)"
                                        />
                                        <rect
                                            id="Item_1-18"
                                            data-name="Item 1"
                                            className="cls-4"
                                            width="84.772"
                                            height="6.45"
                                            rx="2"
                                            transform="translate(24.879 0.921)"
                                        />
                                    </g>
                                </g>
                            </g>
                            <g
                                id="Circle_Buttons-2"
                                data-name="Circle Buttons"
                                transform="translate(6.45 5.529)">
                                <ellipse
                                    id="Ellipse_2-2"
                                    data-name="Ellipse 2"
                                    className="cls-5"
                                    cx="3.686"
                                    cy="3.225"
                                    rx="3.686"
                                    ry="3.225"
                                    transform="translate(0 0)"
                                />
                                <circle
                                    id="Ellipse_3-2"
                                    data-name="Ellipse 3"
                                    className="cls-6"
                                    cx="3.225"
                                    cy="3.225"
                                    r="3.225"
                                    transform="translate(11.979 0)"
                                />
                                <circle
                                    id="Ellipse_4-2"
                                    data-name="Ellipse 4"
                                    className="cls-7"
                                    cx="3.225"
                                    cy="3.225"
                                    r="3.225"
                                    transform="translate(23.036 0)"
                                />
                            </g>
                            <rect
                                id="Icons_Bkg-2"
                                data-name="Icons Bkg"
                                className="cls-3"
                                width="545.004"
                                height="301.363"
                                transform="translate(185.248 51.346)"
                            />
                            <line
                                id="Sidebar_Divider-3"
                                data-name="Sidebar Divider"
                                className="cls-14"
                                y2="300.692"
                                transform="translate(185.583 52.353)"
                            />
                        </g>
                        <g
                            id="Component_9_2"
                            data-name="Component 9 – 2"
                            transform="translate(563.771 -314)">
                            <g
                                className="cls-28"
                                transform="matrix(0.98, -0.21, 0.21, 0.98, -1461.46, 262.46)">
                                <rect
                                    id="Background-13"
                                    data-name="Background"
                                    className="cls-3"
                                    width="725.168"
                                    height="354.752"
                                    transform="matrix(0.98, 0.21, -0.21, 0.98, 1482.43, 54.95)"
                                />
                            </g>
                            <g id="Taskbar-4" data-name="Taskbar">
                                <rect
                                    id="Taskbar_Bkg-4"
                                    data-name="Taskbar Bkg"
                                    className="taskbar"
                                    width="725.168"
                                    height="47.915"
                                />
                                <g
                                    id="Buttons-2"
                                    data-name="Buttons"
                                    transform="translate(611.831)">
                                    <g
                                        id="Minimize-2"
                                        data-name="Minimize"
                                        transform="translate(0)">
                                        <rect
                                            id="Rectangle_4-2"
                                            data-name="Rectangle 4"
                                            className="cls-15"
                                            width="35.014"
                                            height="25.8"
                                            transform="translate(0)"
                                        />
                                        <line
                                            id="Line_3-2"
                                            data-name="Line 3"
                                            className="cls-16"
                                            x2="7.951"
                                            transform="translate(13.764 17.641)"
                                        />
                                    </g>
                                    <g
                                        id="Maximize-3"
                                        data-name="Maximize"
                                        transform="translate(35.014)">
                                        <rect
                                            id="Maximize-4"
                                            data-name="Maximize"
                                            className="cls-15"
                                            width="35.936"
                                            height="25.8"
                                            transform="translate(0)"
                                        />
                                        <g
                                            id="Rectangle_5-2"
                                            data-name="Rectangle 5"
                                            className="cls-17"
                                            transform="translate(13.821 8.293)">
                                            <rect
                                                className="cls-21"
                                                width="8.293"
                                                height="9.214"
                                            />
                                            <rect
                                                className="cls-22"
                                                x="0.75"
                                                y="0.75"
                                                width="6.793"
                                                height="7.714"
                                            />
                                        </g>
                                    </g>
                                    <g
                                        id="Close-2"
                                        data-name="Close"
                                        transform="translate(70.029)">
                                        <rect
                                            id="Button-2"
                                            data-name="Button"
                                            className="cls-18"
                                            width="43.307"
                                            height="25.8"
                                            transform="translate(0)"
                                        />
                                        <g
                                            id="X-2"
                                            data-name="X"
                                            transform="translate(17.77 9.193)">
                                            <line
                                                id="Line_1-2"
                                                data-name="Line 1"
                                                className="cls-19"
                                                x2="7.101"
                                                y2="7.101"
                                            />
                                            <line
                                                id="Line_2-2"
                                                data-name="Line 2"
                                                className="cls-19"
                                                x2="7.101"
                                                y2="7.101"
                                                transform="translate(7.101 0) rotate(90)"
                                            />
                                        </g>
                                    </g>
                                </g>
                            </g>
                            <g
                                id="Sidebar-7"
                                data-name="Sidebar"
                                transform="translate(0 48.325)">
                                <path
                                    id="Sidebar-8"
                                    data-name="Sidebar"
                                    className="cls-3"
                                    d="M0,0H181.892V306.061H0Z"
                                    transform="translate(0 0)"
                                />
                                <g
                                    id="Items-4"
                                    ref={addToSidebar}
                                    data-name="Items"
                                    transform="translate(33.172 35.525)">
                                    <g
                                        id="Item_1-19"
                                        data-name="Item 1"
                                        transform="translate(0 0)">
                                        <ellipse
                                            id="Ellipse_1-16"
                                            data-name="Ellipse 1"
                                            className="cls-4"
                                            cx="4.146"
                                            cy="4.607"
                                            rx="4.146"
                                            ry="4.607"
                                        />
                                        <rect
                                            id="Item_1-20"
                                            data-name="Item 1"
                                            className="cls-4"
                                            width="83.85"
                                            height="6.45"
                                            rx="2"
                                            transform="translate(24.879 0.921)"
                                        />
                                    </g>
                                    <g
                                        id="Item_2-4"
                                        data-name="Item 2"
                                        transform="translate(0 34.093)">
                                        <circle
                                            id="Ellipse_1-17"
                                            data-name="Ellipse 1"
                                            className="cls-4"
                                            cx="4.146"
                                            cy="4.146"
                                            r="4.146"
                                            transform="translate(0 0)"
                                        />
                                        <rect
                                            id="Item_1-21"
                                            data-name="Item 1"
                                            className="cls-4"
                                            width="69.107"
                                            height="6.45"
                                            rx="2"
                                            transform="translate(24.879 0.921)"
                                        />
                                    </g>
                                    <g
                                        id="Item_3-4"
                                        data-name="Item 3"
                                        transform="translate(0 68.186)">
                                        <ellipse
                                            id="Ellipse_1-18"
                                            data-name="Ellipse 1"
                                            className="cls-4"
                                            cx="4.146"
                                            cy="4.607"
                                            rx="4.146"
                                            ry="4.607"
                                            transform="translate(0 0)"
                                        />
                                        <rect
                                            id="Item_1-22"
                                            data-name="Item 1"
                                            className="cls-4"
                                            width="91.222"
                                            height="6.45"
                                            rx="2"
                                            transform="translate(24.879 0.921)"
                                        />
                                    </g>
                                    <g
                                        id="Item_4-4"
                                        data-name="Item 4"
                                        transform="translate(0 102.279)">
                                        <ellipse
                                            id="Ellipse_1-19"
                                            data-name="Ellipse 1"
                                            className="cls-4"
                                            cx="4.146"
                                            cy="4.607"
                                            rx="4.146"
                                            ry="4.607"
                                            transform="translate(0 0)"
                                        />
                                        <rect
                                            id="Item_1-23"
                                            data-name="Item 1"
                                            className="cls-4"
                                            width="58.972"
                                            height="7.371"
                                            rx="2"
                                            transform="translate(24.879 0.921)"
                                        />
                                    </g>
                                    <g
                                        id="Item_5-4"
                                        data-name="Item 5"
                                        transform="translate(0 137.293)">
                                        <circle
                                            id="Ellipse_1-20"
                                            data-name="Ellipse 1"
                                            className="cls-4"
                                            cx="4.146"
                                            cy="4.146"
                                            r="4.146"
                                            transform="translate(0 0)"
                                        />
                                        <rect
                                            id="Item_1-24"
                                            data-name="Item 1"
                                            className="cls-4"
                                            width="84.772"
                                            height="7.371"
                                            rx="2"
                                            transform="translate(24.879 0)"
                                        />
                                    </g>
                                </g>
                            </g>
                            <path
                                id="Sidebar_Divider-4"
                                data-name="Sidebar Divider"
                                className="cls-14"
                                d="M.5-5.5V300.561"
                                transform="translate(182.063 53.825)"
                            />
                        </g>
                        <g
                            id="Component_9_3"
                            data-name="Component 9 – 3"
                            transform="translate(563.771 496.861)">
                            <g
                                className="cls-27"
                                transform="matrix(0.98, -0.21, 0.21, 0.98, -1461.46, -556.4)">
                                <rect
                                    id="Background-14"
                                    data-name="Background"
                                    className="cls-3"
                                    width="725.168"
                                    height="354.752"
                                    transform="matrix(0.98, 0.21, -0.21, 0.98, 1313.84, 848.1)"
                                />
                            </g>
                            <g id="Taskbar-5" data-name="Taskbar">
                                <rect
                                    id="Taskbar_Bkg-5"
                                    data-name="Taskbar Bkg"
                                    className="taskbar"
                                    width="725.168"
                                    height="47.915"
                                />
                                <g
                                    id="Buttons-3"
                                    data-name="Buttons"
                                    transform="translate(611.831)">
                                    <g
                                        id="Minimize-3"
                                        data-name="Minimize"
                                        transform="translate(0)">
                                        <rect
                                            id="Rectangle_4-3"
                                            data-name="Rectangle 4"
                                            className="cls-15"
                                            width="35.014"
                                            height="25.8"
                                            transform="translate(0)"
                                        />
                                        <line
                                            id="Line_3-3"
                                            data-name="Line 3"
                                            className="cls-16"
                                            x2="7.951"
                                            transform="translate(13.764 17.641)"
                                        />
                                    </g>
                                    <g
                                        id="Maximize-5"
                                        data-name="Maximize"
                                        transform="translate(35.014)">
                                        <rect
                                            id="Maximize-6"
                                            data-name="Maximize"
                                            className="cls-15"
                                            width="35.936"
                                            height="25.8"
                                            transform="translate(0)"
                                        />
                                        <g
                                            id="Rectangle_5-3"
                                            data-name="Rectangle 5"
                                            className="cls-17"
                                            transform="translate(13.821 8.293)">
                                            <rect
                                                className="cls-21"
                                                width="8.293"
                                                height="9.214"
                                            />
                                            <rect
                                                className="cls-22"
                                                x="0.75"
                                                y="0.75"
                                                width="6.793"
                                                height="7.714"
                                            />
                                        </g>
                                    </g>
                                    <g
                                        id="Close-3"
                                        data-name="Close"
                                        transform="translate(70.029)">
                                        <rect
                                            id="Button-3"
                                            data-name="Button"
                                            className="cls-18"
                                            width="43.307"
                                            height="25.8"
                                            transform="translate(0)"
                                        />
                                        <g
                                            id="X-3"
                                            data-name="X"
                                            transform="translate(17.77 9.193)">
                                            <line
                                                id="Line_1-3"
                                                data-name="Line 1"
                                                className="cls-19"
                                                x2="7.101"
                                                y2="7.101"
                                            />
                                            <line
                                                id="Line_2-3"
                                                data-name="Line 2"
                                                className="cls-19"
                                                x2="7.101"
                                                y2="7.101"
                                                transform="translate(7.101 0) rotate(90)"
                                            />
                                        </g>
                                    </g>
                                </g>
                            </g>
                            <g
                                id="Sidebar-9"
                                data-name="Sidebar"
                                transform="translate(0 48.325)">
                                <path
                                    id="Sidebar-10"
                                    data-name="Sidebar"
                                    className="cls-3"
                                    d="M0,0H181.892V306.061H0Z"
                                    transform="translate(0 0)"
                                />
                                <g
                                    ref={addToSidebar}
                                    id="Items-5"
                                    data-name="Items"
                                    transform="translate(33.172 35.525)">
                                    <g
                                        id="Item_1-25"
                                        data-name="Item 1"
                                        transform="translate(0 0)">
                                        <ellipse
                                            id="Ellipse_1-21"
                                            data-name="Ellipse 1"
                                            className="cls-4"
                                            cx="4.146"
                                            cy="4.607"
                                            rx="4.146"
                                            ry="4.607"
                                        />
                                        <rect
                                            id="Item_1-26"
                                            data-name="Item 1"
                                            className="cls-4"
                                            width="83.85"
                                            height="6.45"
                                            rx="2"
                                            transform="translate(24.879 0.921)"
                                        />
                                    </g>
                                    <g
                                        id="Item_2-5"
                                        data-name="Item 2"
                                        transform="translate(0 34.093)">
                                        <circle
                                            id="Ellipse_1-22"
                                            data-name="Ellipse 1"
                                            className="cls-4"
                                            cx="4.146"
                                            cy="4.146"
                                            r="4.146"
                                            transform="translate(0 0)"
                                        />
                                        <rect
                                            id="Item_1-27"
                                            data-name="Item 1"
                                            className="cls-4"
                                            width="69.107"
                                            height="6.45"
                                            rx="2"
                                            transform="translate(24.879 0.921)"
                                        />
                                    </g>
                                    <g
                                        id="Item_3-5"
                                        data-name="Item 3"
                                        transform="translate(0 68.186)">
                                        <ellipse
                                            id="Ellipse_1-23"
                                            data-name="Ellipse 1"
                                            className="cls-4"
                                            cx="4.146"
                                            cy="4.607"
                                            rx="4.146"
                                            ry="4.607"
                                            transform="translate(0 0)"
                                        />
                                        <rect
                                            id="Item_1-28"
                                            data-name="Item 1"
                                            className="cls-4"
                                            width="91.222"
                                            height="6.45"
                                            rx="2"
                                            transform="translate(24.879 0.921)"
                                        />
                                    </g>
                                    <g
                                        id="Item_4-5"
                                        data-name="Item 4"
                                        transform="translate(0 102.279)">
                                        <ellipse
                                            id="Ellipse_1-24"
                                            data-name="Ellipse 1"
                                            className="cls-4"
                                            cx="4.146"
                                            cy="4.607"
                                            rx="4.146"
                                            ry="4.607"
                                            transform="translate(0 0)"
                                        />
                                        <rect
                                            id="Item_1-29"
                                            data-name="Item 1"
                                            className="cls-4"
                                            width="58.972"
                                            height="7.371"
                                            rx="2"
                                            transform="translate(24.879 0.921)"
                                        />
                                    </g>
                                    <g
                                        id="Item_5-5"
                                        data-name="Item 5"
                                        transform="translate(0 137.293)">
                                        <circle
                                            id="Ellipse_1-25"
                                            data-name="Ellipse 1"
                                            className="cls-4"
                                            cx="4.146"
                                            cy="4.146"
                                            r="4.146"
                                            transform="translate(0 0)"
                                        />
                                        <rect
                                            id="Item_1-30"
                                            data-name="Item 1"
                                            className="cls-4"
                                            width="84.772"
                                            height="7.371"
                                            rx="2"
                                            transform="translate(24.879 0)"
                                        />
                                    </g>
                                </g>
                            </g>
                            <path
                                id="Sidebar_Divider-5"
                                data-name="Sidebar Divider"
                                className="cls-14"
                                d="M.5-5.5V300.561"
                                transform="translate(182.063 53.825)"
                            />
                        </g>
                        <g
                            id="Component_10_3"
                            data-name="Component 10 – 3"
                            transform="translate(-212.075 495.018)">
                            <g
                                className="cls-26"
                                transform="matrix(0.98, -0.21, 0.21, 0.98, -692.61, -0.56)">
                                <rect
                                    id="Background-15"
                                    data-name="Background"
                                    className="cls-3"
                                    width="730.696"
                                    height="352.909"
                                    transform="matrix(0.98, 0.21, -0.21, 0.98, 555.33, 684.99)"
                                />
                            </g>
                            <g id="Taskbar-6" data-name="Taskbar">
                                <rect
                                    id="Taskbar_Bkg-6"
                                    data-name="Taskbar Bkg"
                                    className="taskbar"
                                    width="730.696"
                                    height="51.6"
                                />
                            </g>
                            <g
                                id="Sidebar-11"
                                data-name="Sidebar"
                                transform="translate(0 51.681)">
                                <path
                                    id="Sidebar-12"
                                    data-name="Sidebar"
                                    className="cls-3"
                                    d="M0,0H185.583V301.363H0Z"
                                />
                                <g
                                    id="Items-6"
                                    ref={addToSidebar}
                                    data-name="Items"
                                    transform="translate(35.014 35.855)">
                                    <g
                                        id="Item_1-31"
                                        data-name="Item 1"
                                        transform="translate(0 0)">
                                        <circle
                                            id="Ellipse_1-26"
                                            data-name="Ellipse 1"
                                            className="cls-4"
                                            cx="4.146"
                                            cy="4.146"
                                            r="4.146"
                                        />
                                        <rect
                                            id="Item_1-32"
                                            data-name="Item 1"
                                            className="cls-4"
                                            width="84.772"
                                            height="7.371"
                                            rx="2"
                                            transform="translate(24.879)"
                                        />
                                    </g>
                                    <g
                                        id="Item_2-6"
                                        data-name="Item 2"
                                        transform="translate(0 34.093)">
                                        <circle
                                            id="Ellipse_1-27"
                                            data-name="Ellipse 1"
                                            className="cls-4"
                                            cx="4.146"
                                            cy="4.146"
                                            r="4.146"
                                            transform="translate(0 0)"
                                        />
                                        <rect
                                            id="Item_1-33"
                                            data-name="Item 1"
                                            className="cls-4"
                                            width="70.029"
                                            height="6.45"
                                            rx="2"
                                            transform="translate(24.879 0.921)"
                                        />
                                    </g>
                                    <g
                                        id="Item_3-6"
                                        data-name="Item 3"
                                        transform="translate(0 68.186)">
                                        <circle
                                            id="Ellipse_1-28"
                                            data-name="Ellipse 1"
                                            className="cls-4"
                                            cx="4.146"
                                            cy="4.146"
                                            r="4.146"
                                            transform="translate(0 0)"
                                        />
                                        <rect
                                            id="Item_1-34"
                                            data-name="Item 1"
                                            className="cls-4"
                                            width="91.222"
                                            height="6.45"
                                            rx="2"
                                            transform="translate(24.879 0.921)"
                                        />
                                    </g>
                                    <g
                                        id="Item_4-6"
                                        data-name="Item 4"
                                        transform="translate(0 102.279)">
                                        <ellipse
                                            id="Ellipse_1-29"
                                            data-name="Ellipse 1"
                                            className="cls-4"
                                            cx="4.146"
                                            cy="4.607"
                                            rx="4.146"
                                            ry="4.607"
                                            transform="translate(0 0)"
                                        />
                                        <rect
                                            id="Item_1-35"
                                            data-name="Item 1"
                                            className="cls-4"
                                            width="58.972"
                                            height="6.45"
                                            rx="2"
                                            transform="translate(24.879 0.921)"
                                        />
                                    </g>
                                    <g
                                        id="Item_5-6"
                                        data-name="Item 5"
                                        transform="translate(0 136.372)">
                                        <ellipse
                                            id="Ellipse_1-30"
                                            data-name="Ellipse 1"
                                            className="cls-4"
                                            cx="4.146"
                                            cy="4.607"
                                            rx="4.146"
                                            ry="4.607"
                                            transform="translate(0 0)"
                                        />
                                        <rect
                                            id="Item_1-36"
                                            data-name="Item 1"
                                            className="cls-4"
                                            width="84.772"
                                            height="6.45"
                                            rx="2"
                                            transform="translate(24.879 0.921)"
                                        />
                                    </g>
                                </g>
                            </g>
                            <g
                                id="Circle_Buttons-3"
                                data-name="Circle Buttons"
                                transform="translate(6.45 5.529)">
                                <ellipse
                                    id="Ellipse_2-3"
                                    data-name="Ellipse 2"
                                    className="cls-5"
                                    cx="3.686"
                                    cy="3.225"
                                    rx="3.686"
                                    ry="3.225"
                                    transform="translate(0 0)"
                                />
                                <circle
                                    id="Ellipse_3-3"
                                    data-name="Ellipse 3"
                                    className="cls-6"
                                    cx="3.225"
                                    cy="3.225"
                                    r="3.225"
                                    transform="translate(11.979 0)"
                                />
                                <circle
                                    id="Ellipse_4-3"
                                    data-name="Ellipse 4"
                                    className="cls-7"
                                    cx="3.225"
                                    cy="3.225"
                                    r="3.225"
                                    transform="translate(23.036 0)"
                                />
                            </g>
                            <rect
                                id="Icons_Bkg-3"
                                data-name="Icons Bkg"
                                className="cls-3"
                                width="545.004"
                                height="301.363"
                                transform="translate(185.248 51.346)"
                            />
                            <line
                                id="Sidebar_Divider-6"
                                data-name="Sidebar Divider"
                                className="cls-14"
                                y2="300.692"
                                transform="translate(185.583 52.353)"
                            />
                        </g>
                        <g
                            id="Component_9_4"
                            data-name="Component 9 – 4"
                            transform="translate(-981.471 494.096)">
                            <g
                                className="cls-25"
                                transform="matrix(0.98, -0.21, 0.21, 0.98, 79.78, -553.64)">
                                <rect
                                    id="Background-16"
                                    data-name="Background"
                                    className="cls-3"
                                    width="725.168"
                                    height="354.752"
                                    transform="matrix(0.98, 0.21, -0.21, 0.98, -197.06, 524.12)"
                                />
                            </g>
                            <g id="Taskbar-7" data-name="Taskbar">
                                <rect
                                    id="Taskbar_Bkg-7"
                                    data-name="Taskbar Bkg"
                                    className="taskbar"
                                    width="725.168"
                                    height="47.915"
                                />
                                <g
                                    id="Buttons-4"
                                    data-name="Buttons"
                                    transform="translate(611.831)">
                                    <g
                                        id="Minimize-4"
                                        data-name="Minimize"
                                        transform="translate(0)">
                                        <rect
                                            id="Rectangle_4-4"
                                            data-name="Rectangle 4"
                                            className="cls-15"
                                            width="35.014"
                                            height="25.8"
                                        />
                                        <line
                                            id="Line_3-4"
                                            data-name="Line 3"
                                            className="cls-16"
                                            x2="7.951"
                                            transform="translate(13.764 17.641)"
                                        />
                                    </g>
                                    <g
                                        id="Maximize-7"
                                        data-name="Maximize"
                                        transform="translate(35.014)">
                                        <rect
                                            id="Maximize-8"
                                            data-name="Maximize"
                                            className="cls-15"
                                            width="35.936"
                                            height="25.8"
                                            transform="translate(0)"
                                        />
                                        <g
                                            id="Rectangle_5-4"
                                            data-name="Rectangle 5"
                                            className="cls-17"
                                            transform="translate(13.821 8.293)">
                                            <rect
                                                className="cls-21"
                                                width="8.293"
                                                height="9.214"
                                            />
                                            <rect
                                                className="cls-22"
                                                x="0.75"
                                                y="0.75"
                                                width="6.793"
                                                height="7.714"
                                            />
                                        </g>
                                    </g>
                                    <g
                                        id="Close-4"
                                        data-name="Close"
                                        transform="translate(70.029)">
                                        <rect
                                            id="Button-4"
                                            data-name="Button"
                                            className="cls-18"
                                            width="43.307"
                                            height="25.8"
                                            transform="translate(0)"
                                        />
                                        <g
                                            id="X-4"
                                            data-name="X"
                                            transform="translate(17.77 9.193)">
                                            <line
                                                id="Line_1-4"
                                                data-name="Line 1"
                                                className="cls-19"
                                                x2="7.101"
                                                y2="7.101"
                                            />
                                            <line
                                                id="Line_2-4"
                                                data-name="Line 2"
                                                className="cls-19"
                                                x2="7.101"
                                                y2="7.101"
                                                transform="translate(7.101 0) rotate(90)"
                                            />
                                        </g>
                                    </g>
                                </g>
                            </g>
                            <g
                                id="Sidebar-13"
                                data-name="Sidebar"
                                transform="translate(0 48.325)">
                                <path
                                    id="Sidebar-14"
                                    data-name="Sidebar"
                                    className="cls-3"
                                    d="M0,0H181.892V306.061H0Z"
                                    transform="translate(0 0)"
                                />
                                <g
                                    id="Items-7"
                                    ref={addToSidebar}
                                    data-name="Items"
                                    transform="translate(33.172 35.525)">
                                    <g
                                        id="Item_1-37"
                                        data-name="Item 1"
                                        transform="translate(0 0)">
                                        <ellipse
                                            id="Ellipse_1-31"
                                            data-name="Ellipse 1"
                                            className="cls-4"
                                            cx="4.146"
                                            cy="4.607"
                                            rx="4.146"
                                            ry="4.607"
                                        />
                                        <rect
                                            id="Item_1-38"
                                            data-name="Item 1"
                                            className="cls-4"
                                            width="83.85"
                                            height="6.45"
                                            rx="2"
                                            transform="translate(24.879 0.921)"
                                        />
                                    </g>
                                    <g
                                        id="Item_2-7"
                                        data-name="Item 2"
                                        transform="translate(0 34.093)">
                                        <circle
                                            id="Ellipse_1-32"
                                            data-name="Ellipse 1"
                                            className="cls-4"
                                            cx="4.146"
                                            cy="4.146"
                                            r="4.146"
                                            transform="translate(0 0)"
                                        />
                                        <rect
                                            id="Item_1-39"
                                            data-name="Item 1"
                                            className="cls-4"
                                            width="69.107"
                                            height="6.45"
                                            rx="2"
                                            transform="translate(24.879 0.921)"
                                        />
                                    </g>
                                    <g
                                        id="Item_3-7"
                                        data-name="Item 3"
                                        transform="translate(0 68.186)">
                                        <ellipse
                                            id="Ellipse_1-33"
                                            data-name="Ellipse 1"
                                            className="cls-4"
                                            cx="4.146"
                                            cy="4.607"
                                            rx="4.146"
                                            ry="4.607"
                                            transform="translate(0 0)"
                                        />
                                        <rect
                                            id="Item_1-40"
                                            data-name="Item 1"
                                            className="cls-4"
                                            width="91.222"
                                            height="6.45"
                                            rx="2"
                                            transform="translate(24.879 0.921)"
                                        />
                                    </g>
                                    <g
                                        id="Item_4-7"
                                        data-name="Item 4"
                                        transform="translate(0 102.279)">
                                        <ellipse
                                            id="Ellipse_1-34"
                                            data-name="Ellipse 1"
                                            className="cls-4"
                                            cx="4.146"
                                            cy="4.607"
                                            rx="4.146"
                                            ry="4.607"
                                            transform="translate(0 0)"
                                        />
                                        <rect
                                            id="Item_1-41"
                                            data-name="Item 1"
                                            className="cls-4"
                                            width="58.972"
                                            height="7.371"
                                            rx="2"
                                            transform="translate(24.879 0.921)"
                                        />
                                    </g>
                                    <g
                                        id="Item_5-7"
                                        data-name="Item 5"
                                        transform="translate(0 137.293)">
                                        <circle
                                            id="Ellipse_1-35"
                                            data-name="Ellipse 1"
                                            className="cls-4"
                                            cx="4.146"
                                            cy="4.146"
                                            r="4.146"
                                            transform="translate(0 0)"
                                        />
                                        <rect
                                            id="Item_1-42"
                                            data-name="Item 1"
                                            className="cls-4"
                                            width="84.772"
                                            height="7.371"
                                            rx="2"
                                            transform="translate(24.879 0)"
                                        />
                                    </g>
                                </g>
                            </g>
                            <path
                                id="Sidebar_Divider-7"
                                data-name="Sidebar Divider"
                                className="cls-14"
                                d="M.5-5.5V300.561"
                                transform="translate(182.063 53.825)"
                            />
                        </g>
                        <g
                            id="Component_10_4"
                            data-name="Component 10 – 4"
                            transform="translate(-987 92.352)">
                            <g
                                className="cls-24"
                                transform="matrix(0.98, -0.21, 0.21, 0.98, 79.31, -151.89)">
                                <rect
                                    id="Background-17"
                                    data-name="Background"
                                    className="cls-3"
                                    width="730.696"
                                    height="352.909"
                                    transform="matrix(0.98, 0.21, -0.21, 0.98, -118.94, 130)"
                                />
                            </g>
                            <g id="Taskbar-8" data-name="Taskbar">
                                <rect
                                    id="Taskbar_Bkg-8"
                                    data-name="Taskbar Bkg"
                                    className="taskbar"
                                    width="730.696"
                                    height="51.6"
                                />
                            </g>
                            <g
                                id="Sidebar-15"
                                data-name="Sidebar"
                                transform="translate(0 51.681)">
                                <path
                                    id="Sidebar-16"
                                    data-name="Sidebar"
                                    className="cls-3"
                                    d="M0,0H185.583V301.363H0Z"
                                />
                                <g
                                    id="Items-8"
                                    ref={addToSidebar}
                                    data-name="Items"
                                    transform="translate(35.014 35.855)">
                                    <g
                                        id="Item_1-43"
                                        data-name="Item 1"
                                        transform="translate(0 0)">
                                        <circle
                                            id="Ellipse_1-36"
                                            data-name="Ellipse 1"
                                            className="cls-4"
                                            cx="4.146"
                                            cy="4.146"
                                            r="4.146"
                                            transform="translate(0)"
                                        />
                                        <rect
                                            id="Item_1-44"
                                            data-name="Item 1"
                                            className="cls-4"
                                            width="84.772"
                                            height="7.371"
                                            rx="2"
                                            transform="translate(24.879)"
                                        />
                                    </g>
                                    <g
                                        id="Item_2-8"
                                        data-name="Item 2"
                                        transform="translate(0 34.093)">
                                        <circle
                                            id="Ellipse_1-37"
                                            data-name="Ellipse 1"
                                            className="cls-4"
                                            cx="4.146"
                                            cy="4.146"
                                            r="4.146"
                                            transform="translate(0 0)"
                                        />
                                        <rect
                                            id="Item_1-45"
                                            data-name="Item 1"
                                            className="cls-4"
                                            width="70.029"
                                            height="6.45"
                                            rx="2"
                                            transform="translate(24.879 0.921)"
                                        />
                                    </g>
                                    <g
                                        id="Item_3-8"
                                        data-name="Item 3"
                                        transform="translate(0 68.186)">
                                        <circle
                                            id="Ellipse_1-38"
                                            data-name="Ellipse 1"
                                            className="cls-4"
                                            cx="4.146"
                                            cy="4.146"
                                            r="4.146"
                                            transform="translate(0 0)"
                                        />
                                        <rect
                                            id="Item_1-46"
                                            data-name="Item 1"
                                            className="cls-4"
                                            width="91.222"
                                            height="6.45"
                                            rx="2"
                                            transform="translate(24.879 0.921)"
                                        />
                                    </g>
                                    <g
                                        id="Item_4-8"
                                        data-name="Item 4"
                                        transform="translate(0 102.279)">
                                        <ellipse
                                            id="Ellipse_1-39"
                                            data-name="Ellipse 1"
                                            className="cls-4"
                                            cx="4.146"
                                            cy="4.607"
                                            rx="4.146"
                                            ry="4.607"
                                            transform="translate(0 0)"
                                        />
                                        <rect
                                            id="Item_1-47"
                                            data-name="Item 1"
                                            className="cls-4"
                                            width="58.972"
                                            height="6.45"
                                            rx="2"
                                            transform="translate(24.879 0.921)"
                                        />
                                    </g>
                                    <g
                                        id="Item_5-8"
                                        data-name="Item 5"
                                        transform="translate(0 136.372)">
                                        <ellipse
                                            id="Ellipse_1-40"
                                            data-name="Ellipse 1"
                                            className="cls-4"
                                            cx="4.146"
                                            cy="4.607"
                                            rx="4.146"
                                            ry="4.607"
                                            transform="translate(0 0)"
                                        />
                                        <rect
                                            id="Item_1-48"
                                            data-name="Item 1"
                                            className="cls-4"
                                            width="84.772"
                                            height="6.45"
                                            rx="2"
                                            transform="translate(24.879 0.921)"
                                        />
                                    </g>
                                </g>
                            </g>
                            <g
                                id="Circle_Buttons-4"
                                data-name="Circle Buttons"
                                transform="translate(6.45 5.529)">
                                <ellipse
                                    id="Ellipse_2-4"
                                    data-name="Ellipse 2"
                                    className="cls-5"
                                    cx="3.686"
                                    cy="3.225"
                                    rx="3.686"
                                    ry="3.225"
                                    transform="translate(0 0)"
                                />
                                <circle
                                    id="Ellipse_3-4"
                                    data-name="Ellipse 3"
                                    className="cls-6"
                                    cx="3.225"
                                    cy="3.225"
                                    r="3.225"
                                    transform="translate(11.979 0)"
                                />
                                <circle
                                    id="Ellipse_4-4"
                                    data-name="Ellipse 4"
                                    className="cls-7"
                                    cx="3.225"
                                    cy="3.225"
                                    r="3.225"
                                    transform="translate(23.036 0)"
                                />
                            </g>
                            <rect
                                id="Icons_Bkg-4"
                                data-name="Icons Bkg"
                                className="cls-3"
                                width="545.004"
                                height="301.363"
                                transform="translate(185.248 51.346)"
                            />
                            <line
                                id="Sidebar_Divider-8"
                                data-name="Sidebar Divider"
                                className="cls-14"
                                y2="300.692"
                                transform="translate(185.583 52.353)"
                            />
                        </g>
                        <g
                            id="Component_9_5"
                            data-name="Component 9 – 5"
                            transform="translate(-981.471 -314)">
                            <g
                                className="cls-23"
                                transform="matrix(0.98, -0.21, 0.21, 0.98, 83.78, 254.46)">
                                <rect
                                    id="Background-18"
                                    data-name="Background"
                                    className="cls-3"
                                    width="725.168"
                                    height="354.752"
                                    transform="matrix(0.98, 0.21, -0.21, 0.98, -29.05, -266.32)"
                                />
                            </g>
                            <g id="Taskbar-9" data-name="Taskbar">
                                <rect
                                    id="Taskbar_Bkg-9"
                                    data-name="Taskbar Bkg"
                                    className="taskbar"
                                    width="725.168"
                                    height="47.915"
                                />
                                <g
                                    id="Buttons-5"
                                    data-name="Buttons"
                                    transform="translate(611.831)">
                                    <g
                                        id="Minimize-5"
                                        data-name="Minimize"
                                        transform="translate(0)">
                                        <rect
                                            id="Rectangle_4-5"
                                            data-name="Rectangle 4"
                                            className="cls-15"
                                            width="35.014"
                                            height="25.8"
                                        />
                                        <line
                                            id="Line_3-5"
                                            data-name="Line 3"
                                            className="cls-16"
                                            x2="7.951"
                                            transform="translate(13.764 17.641)"
                                        />
                                    </g>
                                    <g
                                        id="Maximize-9"
                                        data-name="Maximize"
                                        transform="translate(35.014)">
                                        <rect
                                            id="Maximize-10"
                                            data-name="Maximize"
                                            className="cls-15"
                                            width="35.936"
                                            height="25.8"
                                            transform="translate(0)"
                                        />
                                        <g
                                            id="Rectangle_5-5"
                                            data-name="Rectangle 5"
                                            className="cls-17"
                                            transform="translate(13.821 8.293)">
                                            <rect
                                                className="cls-21"
                                                width="8.293"
                                                height="9.214"
                                            />
                                            <rect
                                                className="cls-22"
                                                x="0.75"
                                                y="0.75"
                                                width="6.793"
                                                height="7.714"
                                            />
                                        </g>
                                    </g>
                                    <g
                                        id="Close-5"
                                        data-name="Close"
                                        transform="translate(70.029)">
                                        <rect
                                            id="Button-5"
                                            data-name="Button"
                                            className="cls-18"
                                            width="43.307"
                                            height="25.8"
                                            transform="translate(0)"
                                        />
                                        <g
                                            id="X-5"
                                            data-name="X"
                                            transform="translate(17.77 9.193)">
                                            <line
                                                id="Line_1-5"
                                                data-name="Line 1"
                                                className="cls-19"
                                                x2="7.101"
                                                y2="7.101"
                                            />
                                            <line
                                                id="Line_2-5"
                                                data-name="Line 2"
                                                className="cls-19"
                                                x2="7.101"
                                                y2="7.101"
                                                transform="translate(7.101 0) rotate(90)"
                                            />
                                        </g>
                                    </g>
                                </g>
                            </g>
                            <g
                                id="Sidebar-17"
                                data-name="Sidebar"
                                transform="translate(0 48.325)">
                                <path
                                    id="Sidebar-18"
                                    data-name="Sidebar"
                                    className="cls-3"
                                    d="M0,0H181.892V306.061H0Z"
                                    transform="translate(0 0)"
                                />
                                <g
                                    id="Items-9"
                                    ref={addToSidebar}
                                    data-name="Items"
                                    transform="translate(33.172 35.525)">
                                    <g
                                        id="Item_1-49"
                                        data-name="Item 1"
                                        transform="translate(0 0)">
                                        <ellipse
                                            id="Ellipse_1-41"
                                            data-name="Ellipse 1"
                                            className="cls-4"
                                            cx="4.146"
                                            cy="4.607"
                                            rx="4.146"
                                            ry="4.607"
                                        />
                                        <rect
                                            id="Item_1-50"
                                            data-name="Item 1"
                                            className="cls-4"
                                            width="83.85"
                                            height="6.45"
                                            rx="2"
                                            transform="translate(24.879 0.921)"
                                        />
                                    </g>
                                    <g
                                        id="Item_2-9"
                                        data-name="Item 2"
                                        transform="translate(0 34.093)">
                                        <circle
                                            id="Ellipse_1-42"
                                            data-name="Ellipse 1"
                                            className="cls-4"
                                            cx="4.146"
                                            cy="4.146"
                                            r="4.146"
                                            transform="translate(0 0)"
                                        />
                                        <rect
                                            id="Item_1-51"
                                            data-name="Item 1"
                                            className="cls-4"
                                            width="69.107"
                                            height="6.45"
                                            rx="2"
                                            transform="translate(24.879 0.921)"
                                        />
                                    </g>
                                    <g
                                        id="Item_3-9"
                                        data-name="Item 3"
                                        transform="translate(0 68.186)">
                                        <ellipse
                                            id="Ellipse_1-43"
                                            data-name="Ellipse 1"
                                            className="cls-4"
                                            cx="4.146"
                                            cy="4.607"
                                            rx="4.146"
                                            ry="4.607"
                                            transform="translate(0 0)"
                                        />
                                        <rect
                                            id="Item_1-52"
                                            data-name="Item 1"
                                            className="cls-4"
                                            width="91.222"
                                            height="6.45"
                                            rx="2"
                                            transform="translate(24.879 0.921)"
                                        />
                                    </g>
                                    <g
                                        id="Item_4-9"
                                        data-name="Item 4"
                                        transform="translate(0 102.279)">
                                        <ellipse
                                            id="Ellipse_1-44"
                                            data-name="Ellipse 1"
                                            className="cls-4"
                                            cx="4.146"
                                            cy="4.607"
                                            rx="4.146"
                                            ry="4.607"
                                            transform="translate(0 0)"
                                        />
                                        <rect
                                            id="Item_1-53"
                                            data-name="Item 1"
                                            className="cls-4"
                                            width="58.972"
                                            height="7.371"
                                            rx="2"
                                            transform="translate(24.879 0.921)"
                                        />
                                    </g>
                                    <g
                                        id="Item_5-9"
                                        data-name="Item 5"
                                        transform="translate(0 137.293)">
                                        <circle
                                            id="Ellipse_1-45"
                                            data-name="Ellipse 1"
                                            className="cls-4"
                                            cx="4.146"
                                            cy="4.146"
                                            r="4.146"
                                            transform="translate(0 0)"
                                        />
                                        <rect
                                            id="Item_1-54"
                                            data-name="Item 1"
                                            className="cls-4"
                                            width="84.772"
                                            height="7.371"
                                            rx="2"
                                            transform="translate(24.879 0)"
                                        />
                                    </g>
                                </g>
                            </g>
                            <path
                                id="Sidebar_Divider-9"
                                data-name="Sidebar Divider"
                                className="cls-14"
                                d="M.5-5.5V300.561"
                                transform="translate(182.063 53.825)"
                            />
                        </g>
                    </g>
                </g>
            </svg>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    svg {
        transform: translate3d(0, 0, 0);
        opacity: 0.2;
        width: 100vw;
        height: calc(100vh - ${props => props.theme.navbarHeight});
        visibility: hidden;

        @media (max-width: 600px) {
            height: 400px;
        }
    }

    .cls-1 {
        clip-path: url(#clip-Header-L);
    }

    .cls-2 {
        fill: ${props => props.theme.background};
    }

    .cls-3,
    .windows-bkg {
        fill: ${props => props.theme.svgWindow};
    }

    .cls-4 {
        fill: #ddd;
    }

    .html-right {
        fill: #ddd;
    }

    .html-bkg {
        fill: #fff;
    }

    .html-num-left {
        fill: #777;
    }

    .html-num-right {
        fill: #656565;
    }

    .taskbar {
        fill: ${props => props.theme.svgTaskbar};
    }

    .windows-skill-bkg {
        fill: ${props => props.theme.svgSkillBkg};
    }

    .js {
        fill: white;
    }

    .js-logo {
        fill: #656565;
    }

    .cls-5 {
        fill: #ee6b5e;
    }

    .cls-6 {
        fill: #f5bf50;
    }

    .cls-7 {
        fill: #62c555;
    }

    .cls-13,
    .cls-8 {
        fill: ${props => props.theme.svgIcons};
    }

    .cls-12,
    .cls-8 {
        fill-rule: evenodd;
    }

    .cls-12,
    .cls-9 {
        fill: ${props => props.theme.svgIcons};
    }

    .cls-10 {
        fill: ${props => props.theme.svgIcons};
    }

    .cls-11 {
        opacity: 0.25;
        mix-blend-mode: overlay;
        isolation: isolate;
    }

    .cls-14,
    .cls-16,
    .cls-17,
    .cls-19,
    .cls-22 {
        fill: none;
    }

    .cls-14 {
        stroke: #707070;
        opacity: 0.3;
    }

    .cls-15 {
        opacity: 0;
    }

    .cls-16,
    .cls-17 {
        stroke: ${props => props.theme.svgIcons};
    }

    .cls-16,
    .cls-19 {
        stroke-linecap: round;
    }

    .cls-16,
    .cls-17,
    .cls-19 {
        stroke-width: 1.5px;
    }

    .cls-18 {
        fill: #be5452;
    }

    .cls-19 {
        stroke: #fff;
    }

    .cls-20 {
        fill: ${props => props.theme.svgIcons};
    }

    .cls-21 {
        stroke: none;
    }

    .cls-23 {
        filter: url(#Background-9);
    }

    .cls-24 {
        filter: url(#Background-8);
    }

    .cls-25 {
        filter: url(#Background-7);
    }

    .cls-26 {
        filter: url(#Background-6);
    }

    .cls-27 {
        filter: url(#Background-5);
    }

    .cls-28 {
        filter: url(#Background-4);
    }

    .cls-29 {
        filter: url(#Background-3);
    }

    .cls-30 {
        filter: url(#Background-2);
    }

    .cls-31 {
        filter: url(#Background);
    }
`;

export default HeaderSVG;
