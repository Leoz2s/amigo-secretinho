import { Container } from "./styles";

type InputStringProps = {
  label: string;
  placeholder: string;
};

export function InputString({label, placeholder}: InputStringProps) {
  return(
    <Container>
      <p>{label}</p>

      <input type="text" placeholder={placeholder} ></input>
    </Container>
  );
};