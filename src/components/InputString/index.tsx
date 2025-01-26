import { Container } from "./styles";

type InputStringProps = {
  label: string;
  placeholder: string;
  onChange: (value: string) => void;
  value: string;
};

export function InputString({label, placeholder, onChange, value}: InputStringProps) {
  return(
    <Container>
      <p>{label}</p>

      <input type="text" id={label} placeholder={placeholder} onChange={e => onChange(e.target.value)} value={value} ></input>
    </Container>
  );
};