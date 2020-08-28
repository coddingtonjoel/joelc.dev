import React from "react";
import Unit from "./Unit";
import styled from "styled-components";

const Strand = () => {
    return (
        <Wrapper>
            <Unit num={1} />
            <Unit num={2} />
            <Unit num={3} />
            <Unit num={4} />
            <Unit num={5} />
            <Unit num={6} />
            <Unit num={7} />
            <Unit num={8} />
            <Unit num={9} />
            <Unit num={10} />
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
`;

export default Strand;
