import { keyframes } from "styled-components";

export const modalAnimation = keyframes`
    from {
        opacity: 0;
        transform: translateY(-60%);
    }
    to {
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

export const AnimationFadeIn2 = keyframes`
    from {
        transform: translateX(50px);
        opacity: 0;
    } to {
        transform: translateX(0);
        opacity: 1;
    }
`

export const AnimationFadeIn3 = keyframes`
 from {
        transform: translateX(-50px);
        opacity: 0;
    } to {
        transform: translateX(0);
        opacity: 1;
    }
`

export const animationDropDown = keyframes`
from {
        transform: translateY(10%);
        opacity: 0;
    } to {
        opacity: 1;
    }
`