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
  gap: 1.7rem;

  margin-top: 1.7rem;
  
  > h2 {
    font-family: "Inria Sans", serif;
    font-size: 2.5rem;
    font-weight: 700;
    color: ${({theme}) => theme.COLORS.TINTS.WHITE};
  }
`;

export const FriendsBox = styled.div`
  display: grid;
  align-content: start;
  justify-items: center;

  background-color: ${({theme}) => theme.COLORS.THEME_300};
  border-radius: 20px;

  width: 30rem;
  height: 40rem;
  padding-inline: 1.6rem;
  padding-block: 1rem;

  overflow-y: auto; 
  scrollbar-width: thin;          /* "auto" or "thin" */
  scrollbar-color: ${({theme}) => theme.COLORS.THEME_200} ${({theme}) => theme.COLORS.THEME_500};   /* scroll thumb and track */
  &::-webkit-scrollbar {
    width: 1.28rem;               /* width of the entire scrollbar */
  }
  &::-webkit-scrollbar-track {
    background: ${({theme}) => theme.COLORS.THEME_500};        /* color of the tracking area */
    border-radius: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${({theme}) => theme.COLORS.THEME_200};    /* color of the scroll thumb */
    border-radius: 20px;       /* roundness of the scroll thumb */
    border: 3px solid ${({theme}) => theme.COLORS.THEME_500};  /* creates padding around scroll thumb */
  }

  > h3 {
    color: ${({theme}) => theme.COLORS.THEME_950};
    font-size: 2rem;
    font-family: "Inria Sans", serif;
    
    text-align: center;
    width: 19rem;
  }

  &:has(h3) {
    display: grid;
    align-content: center;
  }
`;