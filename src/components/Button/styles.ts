import styled from "styled-components";

export const Container = styled.button`
  display: flex;
  justify-content: center;

  width: 30rem;
  padding: 1rem;
  background-color: ${({theme}) => theme.COLORS.THEME_600};
  border-radius: 99px;

  color: ${({theme}) => theme.COLORS.THEME_100};
  font-family: "Inria Sans", serif;
  font-size: 2rem;

  &.raffleButton {
    background-color: ${({theme}) => theme.COLORS.THEME_900};
  }
`;