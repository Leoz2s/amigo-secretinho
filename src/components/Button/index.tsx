import React from "react";
import { Container } from "./styles";

type ButtonProps = {
  text: string;
  altButton?: true | false;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({text, altButton, ...rest}: ButtonProps) {
  return(
    <Container className={altButton ? "altButton" : ""} {...rest}  >
      {text}
    </Container>
  );
};