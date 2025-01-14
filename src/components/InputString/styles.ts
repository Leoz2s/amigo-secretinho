import styled from "styled-components";

export const Container = styled.div`
  font-family: "Inria Sans", serif;

  > p {
    color: ${({theme}) => theme.COLORS.TINTS.WHITE};
    font-size: 2rem;
    

    margin-bottom: .8rem;
  }

  > input {
    width: 29.6rem;
    padding: 1.4rem 2.1rem;
    background-color: ${({theme}) => theme.COLORS.THEME_200};
    border-radius: 99px;

    color: ${({theme}) => theme.COLORS.THEME_950};
    &:placeholder-shown {
      color: ${({theme}) => theme.COLORS.THEME_600};
    }
  }
`;