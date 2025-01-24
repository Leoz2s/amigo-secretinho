import { Container } from "./styles";

type InputStringProps = {
  label: string;
  placeholder: string;
  onChange: () => {};
};

export function InputString({label, placeholder, onChange}: InputStringProps) {
  return(
    <Container>
      <p>{label}</p>

      <input type="text" placeholder={placeholder} onChange={onChange} ></input>
    </Container>
  );
};