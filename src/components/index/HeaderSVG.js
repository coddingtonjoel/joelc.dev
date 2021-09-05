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
                    y: 110,
                    delay: index * 0.15,
                    ease: "power1.out",
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
                                    id="Figma"
                                    transform="translate(5.5 95) scale(0.25)">
                                    <g id="figma-symbol" ref={addToIcons}>
                                        <path
                                            fill="#888"
                                            id="path0_fill"
                                            class="st0"
                                            d="M50 300c27.6 0 50-22.4 50-50v-50H50c-27.6 0-50 22.4-50 50s22.4 50 50 50z"
                                        />
                                        <path
                                            id="path1_fill"
                                            fill="#666"
                                            class="st1"
                                            d="M0 150c0-27.6 22.4-50 50-50h50v100H50c-27.6 0-50-22.4-50-50z"
                                        />
                                        <path
                                            fill="#888"
                                            id="path1_fill_1_"
                                            class="st2"
                                            d="M0 50C0 22.4 22.4 0 50 0h50v100H50C22.4 100 0 77.6 0 50z"
                                        />
                                        <path
                                            fill="#888"
                                            id="path2_fill"
                                            class="st3"
                                            d="M100 0h50c27.6 0 50 22.4 50 50s-22.4 50-50 50h-50V0z"
                                        />
                                        <path
                                            id="path3_fill"
                                            fill="#666"
                                            class="st4"
                                            d="M200 150c0 27.6-22.4 50-50 50s-50-22.4-50-50 22.4-50 50-50 50 22.4 50 50z"
                                        />
                                    </g>
                                </g>
                                <g
                                    id="Nodejs"
                                    transform="translate(110.494 98) scale(0.275)">
                                    <g
                                        id="Node.js"
                                        ref={addToIcons}
                                        transform="translate(-0.5 -0.186)">
                                        <g fill="#888">
                                            <path d="M116.504 3.58c6.962-3.985 16.03-4.003 22.986 0 34.995 19.774 70.001 39.517 104.99 59.303 6.581 3.707 10.983 11.031 10.916 18.614v118.968c.049 7.897-4.788 15.396-11.731 19.019-34.88 19.665-69.742 39.354-104.616 59.019-7.106 4.063-16.356 3.75-23.24-.646-10.457-6.062-20.932-12.094-31.39-18.15-2.137-1.274-4.546-2.288-6.055-4.36 1.334-1.798 3.719-2.022 5.657-2.807 4.365-1.388 8.374-3.616 12.384-5.778 1.014-.694 2.252-.428 3.224.193 8.942 5.127 17.805 10.403 26.777 15.481 1.914 1.105 3.852-.362 5.488-1.274 34.228-19.345 68.498-38.617 102.72-57.968 1.268-.61 1.969-1.956 1.866-3.345.024-39.245.006-78.497.012-117.742.145-1.576-.767-3.025-2.192-3.67-34.759-19.575-69.5-39.18-104.253-58.76a3.621 3.621 0 0 0-4.094-.006C91.2 39.257 56.465 58.88 21.712 78.454c-1.42.646-2.373 2.071-2.204 3.653.006 39.245 0 78.497 0 117.748a3.329 3.329 0 0 0 1.89 3.303c9.274 5.259 18.56 10.481 27.84 15.722 5.228 2.814 11.647 4.486 17.407 2.33 5.083-1.823 8.646-7.01 8.549-12.407.048-39.016-.024-78.038.036-117.048-.127-1.732 1.516-3.163 3.2-3 4.456-.03 8.918-.06 13.374.012 1.86-.042 3.14 1.823 2.91 3.568-.018 39.263.048 78.527-.03 117.79.012 10.464-4.287 21.85-13.966 26.97-11.924 6.177-26.662 4.867-38.442-1.056-10.198-5.09-19.93-11.097-29.947-16.55C5.368 215.886.555 208.357.604 200.466V81.497c-.073-7.74 4.504-15.197 11.29-18.85C46.768 42.966 81.636 23.27 116.504 3.58z" />
                                            <path d="M146.928 85.99c15.21-.979 31.493-.58 45.18 6.913 10.597 5.742 16.472 17.793 16.659 29.566-.296 1.588-1.956 2.464-3.472 2.355-4.413-.006-8.827.06-13.24-.03-1.872.072-2.96-1.654-3.195-3.309-1.268-5.633-4.34-11.212-9.642-13.929-8.139-4.075-17.576-3.87-26.451-3.785-6.479.344-13.446.905-18.935 4.715-4.214 2.886-5.494 8.712-3.99 13.404 1.418 3.369 5.307 4.456 8.489 5.458 18.33 4.794 37.754 4.317 55.734 10.626 7.444 2.572 14.726 7.572 17.274 15.366 3.333 10.446 1.872 22.932-5.56 31.318-6.027 6.901-14.805 10.657-23.56 12.697-11.647 2.597-23.734 2.663-35.562 1.51-11.122-1.268-22.696-4.19-31.282-11.768-7.342-6.375-10.928-16.308-10.572-25.895.085-1.619 1.697-2.748 3.248-2.615 4.444-.036 8.888-.048 13.332.006 1.775-.127 3.091 1.407 3.182 3.08.82 5.367 2.837 11 7.517 14.182 9.032 5.827 20.365 5.428 30.707 5.591 8.568-.38 18.186-.495 25.178-6.158 3.689-3.23 4.782-8.634 3.785-13.283-1.08-3.925-5.186-5.754-8.712-6.95-18.095-5.724-37.736-3.647-55.656-10.12-7.275-2.571-14.31-7.432-17.105-14.906-3.9-10.578-2.113-23.662 6.098-31.765 8.006-8.06 19.563-11.164 30.551-12.275z" />
                                        </g>
                                    </g>
                                </g>
                                <g
                                    id="Git"
                                    ref={addToIcons}
                                    transform="translate(221.492 104.034) scale(0.85)">
                                    <g>
                                        <path
                                            fill="#888"
                                            d="M92.71,44.408L52.591,4.291c-2.31-2.311-6.057-2.311-8.369,0l-8.33,8.332L46.459,23.19
                                            c2.456-0.83,5.272-0.273,7.229,1.685c1.969,1.97,2.521,4.81,1.67,7.275l10.186,10.185c2.465-0.85,5.307-0.3,7.275,1.671
                                            c2.75,2.75,2.75,7.206,0,9.958c-2.752,2.751-7.208,2.751-9.961,0c-2.068-2.07-2.58-5.11-1.531-7.658l-9.5-9.499v24.997
                                            c0.67,0.332,1.303,0.774,1.861,1.332c2.75,2.75,2.75,7.206,0,9.959c-2.75,2.749-7.209,2.749-9.957,0c-2.75-2.754-2.75-7.21,0-9.959
                                            c0.68-0.679,1.467-1.193,2.307-1.537V36.369c-0.84-0.344-1.625-0.853-2.307-1.537c-2.083-2.082-2.584-5.14-1.516-7.698
                                            L31.798,16.715L4.288,44.222c-2.311,2.313-2.311,6.06,0,8.371l40.121,40.118c2.31,2.311,6.056,2.311,8.369,0L92.71,52.779
                                            C95.021,50.468,95.021,46.719,92.71,44.408z"
                                        />
                                    </g>
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

    .nextjs-inside {
        fill: ${props => props.theme.background};
    }

    .nextjs-outside {
        fill: ${props => props.theme.svgIcons};
    }
`;

export default HeaderSVG;
