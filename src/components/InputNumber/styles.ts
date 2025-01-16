import styled from "styled-components";

export const Container = styled.div`
  position: relative;

  > p {
    font-family: "Inria Sans", serif;
    color: ${({theme}) => theme.COLORS.TINTS.WHITE};
    font-size: 2rem;

    margin-bottom: .8rem;
  }

  > input {
    width: 29.6rem;
    padding: 1.4rem 2.1rem;
    background: none;
    border-radius: 99px;

    z-index: 1;

    font-family: "Inria Sans", serif;
    font-size: 2rem;
    font-weight: 700;
    color: ${({theme}) => theme.COLORS.THEME_950};
    &:placeholder-shown {
      color: ${({theme}) => theme.COLORS.THEME_600};
    }

    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
  }
`;

export const NumberGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  /* position: absolute;
  bottom: 0;
  left: 0;
  z-index: 0; */
  
  &.placeholder-shown .number-segment {
    color: ${({theme}) => theme.COLORS.THEME_600};
  }

  > .number-segment {
    width: 4.7rem;
    height: 4.7rem;
    padding-block: 1rem;
    
    background-color: ${({theme}) => theme.COLORS.THEME_200};
    border-radius: 99px;
    
    font-family: "Inria Sans", serif;
    font-size: 2rem;
    font-weight: 700;
    color: ${({theme}) => theme.COLORS.THEME_950};

    cursor: text;

    &.country-number {
      text-align: center;
    }
    &.ddd-number{
      text-align: center;
    }
    &.friend-number {
      width: 17.8rem;
      text-align: center;
    }
  }
`;