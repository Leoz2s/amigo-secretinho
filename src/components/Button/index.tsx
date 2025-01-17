import { Container } from "./styles";

type ButtonProps = {
  text: string;
  altButton?: true | false;
};

export function Button({text, altButton}: ButtonProps) {
  return(
    <Container className={altButton ? "altButton" : ""} >
      {text}
    </Container>
  );
};