import { Container } from "./styles";

type ButtonProps = {
  text: string;
  raffleButton?: true | false;
};

export function Button({text, raffleButton}: ButtonProps) {
  return(
    <Container className={raffleButton ? "raffleButton" : ""} >
      {text}
    </Container>
  );
};