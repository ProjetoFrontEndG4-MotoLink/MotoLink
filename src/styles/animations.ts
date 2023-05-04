import { keyframes } from "styled-components";

export const modalAnimation = keyframes`
    0% {
        opacity: 0;
        transform: translateY(-60%);
    }
    100% {
        opacity: 1;
        transform: translateY(0);
    }
`

export const AnimationFadeIn = keyframes`
    from {
        transform: translateY(50px);
        opacity: 0;
    } to {
        transform: translateY(0);
        opacity: 1;
  }
`