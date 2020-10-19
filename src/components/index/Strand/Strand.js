import React, { useRef, useEffect } from "react";
import Unit from "./Unit";
import styled from "styled-components";
import { gsap } from "gsap";

const Strand = () => {
    const allStrandRef = useRef(null);
    const eachStrandRef = useRef([]);

    eachStrandRef.current = [];

    useEffect(() => {
        gsap.fromTo(
            allStrandRef.current,
            { duration: 7, translateY: -760, ease: "none", repeat: -1 },
            { duration: 7, translateY: 0, ease: "none", repeat: -1 }
        );
        eachStrandRef.current.forEach((unit, index) => {
            gsap.from(unit, {
                duration: 1,
                translateY: 40,
                opacity: 0,
                delay: index * 0.3 + 0.5,
            });
        });
    }, []);

    const addToRefs = el => {
        if (el && !eachStrandRef.current.includes(el)) {
            eachStrandRef.current.push(el);
        }
    };

    return (
        <Wrapper ref={allStrandRef}>
            <Unit num={1} ref={addToRefs} />
            <Unit num={2} ref={addToRefs} />
            <Unit num={3} ref={addToRefs} />
            <Unit num={4} ref={addToRefs} />
            <Unit num={5} ref={addToRefs} />
            <Unit num={6} ref={addToRefs} />
            <Unit num={7} ref={addToRefs} />
            <Unit num={8} ref={addToRefs} />
            <Unit num={9} ref={addToRefs} />
            <Unit num={10} ref={addToRefs} />
            <Unit num={11} ref={addToRefs} />
            <Unit num={12} ref={addToRefs} />
            <Unit num={13} ref={addToRefs} />
            <Unit num={14} ref={addToRefs} />
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: absolute;
    top: 0;
    right: 250px;
    opacity: 0.8;

    @media (max-width: 1250px) {
        right: 100px;
    }

    @media (max-width: 1100px) {
        right: 60px;
    }

    @media (max-width: 1000px) {
        display: none;
        opacity: 0;
    }
`;

export default Strand;
