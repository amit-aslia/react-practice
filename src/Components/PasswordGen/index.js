import React, { useState } from "react";
import Checkboxes from "./Components/Checkbox";
import "./styles.css";
import Slider from "./Components/Slider";
import Strength from "./Components/Strength";
import PasswordAndCopy from "./Components/PasswordAndCopy";
import PasswordLen from "./Components/PasswordLen";
import GeneratePassword from "./Components/GenerateButton";
import { checkboxJson } from "./constants";
import useGeneratePassword from "./Hooks/useGeneratePassword";

function PasswordGen() {
  const [checkedItems, setCheckboxes] = useState(checkboxJson);
  const { generatePassword } = useGeneratePassword();
  const [password, setPassword] = useState('');
  const [length, setLength] = useState(8);

  const handleClick = () => {
    const result = generatePassword(checkedItems, length);
    setPassword(result);
  };

  return (
    <div>
      <h1 className="heading" onClick={handleClick}>
        Password Generator
      </h1>
      <div className="container">
        {password ? <PasswordAndCopy password={password} /> : null}
        <PasswordLen length={length} />
        <Slider length={length} setLength={setLength} />
        <Checkboxes checkedItems={checkedItems} setCheckboxes={setCheckboxes} />
        <Strength passwordLen={length} />
        <GeneratePassword handleClick={handleClick} />
      </div>
    </div>
  );
}

export default PasswordGen;
