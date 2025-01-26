import { useEffect, useRef, useState } from "react";
import { Container, NumberGroup } from "./styles";

type InputNumberProps = {
  label: string;
  placeholder: string;
  setFriendNumber: (number: React.SetStateAction<number>) => void;
  value: number;
};

export function InputNumber({label, placeholder, setFriendNumber, value}: InputNumberProps) {
  const inputRef = useRef(null);
  const [formattedPlaceholderNumber, setFormattedPlaceholderNumber] = useState<string[]>([""]);
  const [inputValue, setInputValue] = useState<string[]>([""]);
  const [lastKeyPressed, setLastKeyPressed] = useState<string>("");

  function numberFormatter(completeNumber: string) {
    const country = "55";
    const ddd = completeNumber.slice(2, 4);
    const number = completeNumber.slice(4);
    return [country, ddd, number];
  };

  function handleInputClick() {
    if(inputRef.current) {
      inputRef.current.select();
    };
  };

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    const inputValueWithoutSpaces = e.target.value.replace(/\s/g, "");
    const inputValueAsNumber = Number(inputValueWithoutSpaces);

    if(e.target.value && inputValueWithoutSpaces.length <= 13 && false === Number.isNaN(inputValueAsNumber) && lastKeyPressed !== "Backspace") {
      setFriendNumber(Number(inputValueWithoutSpaces));
      const numberFormatted = numberFormatter(inputValueWithoutSpaces);
      setInputValue(numberFormatted);
    };
  };

  function handleInputKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    setLastKeyPressed(e.key);
    if( e.target && e.key === "Backspace") {
      const inputValueWithoutSpaces = e.target.value.replace(/\s/g, "");
      const inputValueWithDeletedNumber = inputValueWithoutSpaces.slice(0, -1);
      setFriendNumber(Number(inputValueWithDeletedNumber));
      const numberFormatted = numberFormatter(inputValueWithDeletedNumber);
      setInputValue(numberFormatted);
    };
  };

  useEffect(() => {
    async function isNewOrOldNumber() {
      if(value != 0) {
        const valueFormatted = numberFormatter(String(value));
        setInputValue(valueFormatted);
      } else {
        const placeholderFormatted = numberFormatter(placeholder);
        setFormattedPlaceholderNumber(placeholderFormatted);
      };
    };
    isNewOrOldNumber();
  }, [value]);

  return(
    <Container>
      <p>{label}</p>

      <input ref={inputRef} type="string" id={label}
        placeholder={`   ${formattedPlaceholderNumber[0]}         ${formattedPlaceholderNumber[1]}               ${formattedPlaceholderNumber[2]}`}
        onChange={e => handleInputChange(e)}
        value={inputValue[0] != "" ? `   ${inputValue[0]}         ${inputValue[1]}               ${inputValue[2]}` : ""}
        onKeyDown={handleInputKeyDown}
      />

      <NumberGroup className={inputValue[0] == "" ? "placeholder-shown" : ""} onClick={handleInputClick}>
        <div className="number-segment country-number">
          {"+"}
        </div>
        <div className="number-segment ddd-number"></div>
        <div className="number-segment friend-number"></div>
      </NumberGroup>
    </Container>
  );
};