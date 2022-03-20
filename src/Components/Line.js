import { useEffect, useState } from "react";
import "./Line.css";
import Dot from "./Dot.js";
const SIZE = 4;
const Line = (props) => {
  const checkCodeValidity = () => {};
  console.log(props); //secret code

  // const [enteredValue, setEnteredValue] = useState([0, 0, 0, 0]);
  const [enteredValue, setEnteredValue] = useState(["", "", "", ""]);
  const valueInputChangeHandler = (digitValue, index) => {
    const clonedValues = [...enteredValue];
    clonedValues[index] = digitValue;

    setEnteredValue(clonedValues);
    //  setEnteredValue(prev)
  };
  console.log("enetered array: " + enteredValue.toString());

  return (
    <section>
      <div className="box">
        {enteredValue.map((digitValue, index) => (
          <input
            key={index}
            type="text"
            maxLength="1"
            pattern="[0-9]*"
            // oninput="this.value=this.value.replace(/[^0-9]/g,'');"
            id="fillers"
            onChange={(event) => {
              valueInputChangeHandler(event.target.value, index);
            }}
            value={digitValue}
            // min="00"
            // max="09"
          />
        ))}
      </div>
      <button onClick={checkCodeValidity}> Check </button>
      <Dot />
      <Dot />
      <Dot />
      <Dot />
    </section>
  );
};
export default Line;
