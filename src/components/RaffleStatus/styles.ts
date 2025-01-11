import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints.ts";

export const Container = styled.div`
  display: grid;
  justify-items: center;
  align-items: center;

  text-align: center;

  width: 31.3rem;
  height: 24.6rem;
  padding: 1rem;
  border-radius: 30px;
  background-color: ${({theme}) => theme.COLORS.THEME_800};

  &.none {
    display: none;
  }

  > p {
    font-family: "Inria Sans", serif;
    font-size: 2.4rem;
    color: ${({theme}) => theme.COLORS.THEME_100};
  }
  &.successful > p.upperText {
    max-width: 30rem;
  }

  > svg {
    width: 10rem;
    height: 10rem;
  }
  &.waiting > svg {
    color: ${({theme}) => theme.COLORS.THEME_100};
    animation: rotateClockwise 1.2s linear infinite;
  }
  &.successful > svg {
    color: ${({theme}) => theme.COLORS.TINTS.GREEN};
  } 
  &.failed > svg {
    color: ${({theme}) => theme.COLORS.TINTS.RED};
  }

  @keyframes rotateClockwise {
    100% {
      transform: rotate(360deg);
    }
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.SM}) {
    width: 41.3rem;
  }
`;