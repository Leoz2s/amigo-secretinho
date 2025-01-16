import { useEffect, useRef, useState } from "react";
import { Container, NumberGroup } from "./styles";

type InputNumberProps = {
  label: string;
  placeholder: string;
};

export function InputNumber({label, placeholder}: InputNumberProps) {
  const inputRef = useRef(null);
  const [formattedNumber, setFormattedNumber] = useState<string[]>([""]);
  const [inputValue, setInputValue] = useState<string>("");

  function numberFormatter(completeNumber: string) {
    const country = "+55";
    const ddd = completeNumber.slice(3, 5);
    const number = completeNumber.slice(5);
    setFormattedNumber([country, ddd, number]);
  };

  function handleInputClick() {
    if(inputRef.current) {
      inputRef.current.select();
    };
  };

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    if(e.target && e.target.value.length <= 11) {
      setInputValue(e.target.value);
      numberFormatter(`+55${e.target.value}`)
    };
  };

  useEffect(() => {
    numberFormatter(placeholder);
  }, []);

  return(
    <Container>
      <p>{label}</p>

      <input ref={inputRef} type="number"
        placeholder={placeholder}
        onChange={e => handleInputChange(e)}
        value={inputValue} maxLength={11}
      />

      <NumberGroup className={inputValue == "" ? "placeholder-shown" : ""} onClick={handleInputClick}>
        <div className="number-segment country-number">
          {formattedNumber[0]}
        </div>
        <div className="number-segment ddd-number">
          {formattedNumber[1]}
        </div>
        <div className="number-segment friend-number">
          {formattedNumber[2]}
        </div>
      </NumberGroup>
    </Container>
  );
};