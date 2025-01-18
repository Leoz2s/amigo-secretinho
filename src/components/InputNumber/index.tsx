import { useEffect, useRef, useState } from "react";
import { Container, NumberGroup } from "./styles";

type InputNumberProps = {
  label: string;
  placeholder: string;
};

export function InputNumber({label, placeholder}: InputNumberProps) {
  const inputRef = useRef(null);
  const [formattedPlaceholderNumber, setFormattedPlaceholderNumber] = useState<string[]>([""]);
  const [formattedNumber, setFormattedNumber] = useState<string>("");
  const [inputValue, setInputValue] = useState<string>("");
  const [lastKeyPressed, setLastKeyPressed] = useState<string>("");

  function handleInputClick() {
    if(inputRef.current) {
      inputRef.current.select();
    };
  };

  function numberFormatter(completeNumber: string) {
    const country = "55";
    const ddd = completeNumber.slice(2, 4);
    const number = completeNumber.slice(4);

    return [country, ddd, number];
  };

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    const inputValueWithoutSpaces = e.target.value.replace(/\s/g, "");
    const inputValueAsNumber = Number(inputValueWithoutSpaces);

    if(e.target.value && inputValueWithoutSpaces.length <= 13 && false === Number.isNaN(inputValueAsNumber) && lastKeyPressed !== "Backspace") {
      setFormattedNumber(inputValueWithoutSpaces);
      const numberFormatted = numberFormatter(inputValueWithoutSpaces);
      setInputValue(`   ${numberFormatted[0]}         ${numberFormatted[1]}               ${numberFormatted[2]}`);
    };
  };

  function handleInputKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    setLastKeyPressed(e.key);
    if( e.target && e.key === "Backspace") {
      const inputValueWithoutSpaces = e.target.value.replace(/\s/g, "");
      const inputValueWithDeletedNumber = inputValueWithoutSpaces.slice(0, -1);
      setFormattedNumber(inputValueWithDeletedNumber);
      const numberFormatted = numberFormatter(inputValueWithDeletedNumber);
      setInputValue(`   ${numberFormatted[0]}         ${numberFormatted[1]}               ${numberFormatted[2]}`);
    };
  };

  useEffect(() => {
    const placeholderFormatted = numberFormatter(placeholder);
    setFormattedPlaceholderNumber(placeholderFormatted);
  }, []);

  return(
    <Container>
      <p>{label}</p>

      <input ref={inputRef} type="string"
        placeholder={`   ${formattedPlaceholderNumber[0]}         ${formattedPlaceholderNumber[1]}               ${formattedPlaceholderNumber[2]}`}
        onChange={e => handleInputChange(e)}
        value={inputValue}
        onKeyDown={handleInputKeyDown}
      />

      <NumberGroup className={inputValue == "" ? "placeholder-shown" : ""} onClick={handleInputClick}>
        <div className="number-segment country-number">
          {"+"}
        </div>
        <div className="number-segment ddd-number"></div>
        <div className="number-segment friend-number"></div>
      </NumberGroup>
    </Container>
  );
};