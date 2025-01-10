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

  font-family: "Inria Sans", serif;

  > h2 {
    font-size: 2.5rem;
    font-weight: 700;
    color: ${({theme}) => theme.COLORS.TINTS.WHITE};

    margin-block: 1.7rem;
  }
`;

export const FriendsBox = styled.div`
  width: 30rem;
  height: 40rem;

  background-color: ${({theme}) => theme.COLORS.THEME_300};
  border-radius: 20px;
`;