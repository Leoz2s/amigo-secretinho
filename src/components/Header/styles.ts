import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints.ts";

export const Container = styled.header`
  display: grid;
  justify-content: center;
  justify-items: center;

  background-color: ${({theme}) => theme.COLORS.THEME_400};
  padding: 1rem;

  font-family: "Inria Sans", serif;

  > span {
    font-size: 1.6rem;
    color: ${({theme}) => theme.COLORS.TINTS.BLACK};
    cursor: default;
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  padding: 1rem;
  cursor: pointer;

  > h1 {
    margin: 0;

    font-size: 2.5rem;
    font-weight: 700;
    color: ${({theme}) => theme.COLORS.THEME_900};
  }

  > svg {
    width: 4rem;
    height: 4rem;
    color: ${({theme}) => theme.COLORS.THEME_900};
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.SM}) {
    > h1 {
      font-size: 3rem;
    }
  }
`;