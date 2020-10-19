import { keyframes } from "styled-components";

// strand animations

export const allStrandDescend = keyframes`
    from {
        transform: translateY(-30rem);
    }
    to {
        ${"" /* THIS IS THE MAGIC VALUE TO MAKE IT LOOK INFINITE */}
        transform: translateY(-6.3rem);
    }
`;

export const allStrandSpin = keyframes`
    0% {
        transform: scaleX(1);
    }
    2% {
        transform: scaleX(0);
    }
    10% {
        transform: scaleX(1);
    }
    100% {
        transform: scaleX(1);
    }
`;

export const shine = keyframes`
    0% {
      background-position: 0% 0%;
    }
    100% {
      background-position: 200% 200%;
    }
`;
