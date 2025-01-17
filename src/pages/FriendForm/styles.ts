import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-rows: min-content auto;

  height: 100vh;
  background-color: ${({theme}) => theme.COLORS.THEME_950};
`;

export const Main = styled.main`
  display: grid;
  align-content: start;
  justify-items: center;
  gap: 2.3rem;

  margin-top: 1.7rem;

  font-family: "Inria Sans", serif;

  > h2 {
    font-size: 2.5rem;
    font-weight: 700;
    color: ${({theme}) => theme.COLORS.TINTS.WHITE};
  }
`;