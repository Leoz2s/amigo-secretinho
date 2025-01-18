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

    if(e.target.value && inputValueWithoutSpaces.length <= 13 && false === Number.isNaN(inputValueAsNumber)) {
      const numberFormatted = numberFormatter(inputValueWithoutSpaces);
      setFormattedNumber(numberFormatted);
      setInputValue(`   ${numberFormatted[0]}         ${numberFormatted[1]}               ${numberFormatted[2]}`);
    };
  };

  useEffect(() => {
    const placeholderFormatted = numberFormatter(placeholder);
    setFormattedNumber(placeholderFormatted);
  }, []);

  return(
    <Container>
      <p>{label}</p>

      <input ref={inputRef} type="string"
        placeholder={`   ${formattedNumber[0]}         ${formattedNumber[1]}               ${formattedNumber[2]}`}
        onChange={e => handleInputChange(e)}
        value={inputValue}
      />

      <NumberGroup className={inputValue == "" ? "placeholder-shown" : ""} onClick={handleInputClick}>
        <div className="number-segment country-number">
          {/* {"+"} */}
          {/* {"+" + formattedNumber[0]} */}
        </div>
        <div className="number-segment ddd-number">
          {/* {formattedNumber[1]} */}
        </div>
        <div className="number-segment friend-number">
          {/* {formattedNumber[2]} */}
        </div>
      </NumberGroup>
    </Container>
  );
};