import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;

  margin-bottom: 1rem;

  width: 26.4rem;
  padding: 1rem;
  background-color: ${({theme}) => theme.COLORS.THEME_600};
  border-radius: 99px;

  color: ${({theme}) => theme.COLORS.THEME_100};
  font-family: "Inria Sans", serif;
  font-size: 2rem;

  transition: background-color 0.2s;
  &:hover {
    background-color: ${({theme}) => theme.COLORS.THEME_800};
  }

  > button, svg {
    width: 2rem;
    height: 2rem;
    color: ${({theme}) => theme.COLORS.THEME_100};

    &:hover {
      cursor: pointer;
    }
  }
`;