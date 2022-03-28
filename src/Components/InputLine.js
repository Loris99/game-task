import styles from "./InputLine.module.css";
//import { useState } from "react";

const InputLine = (props) => {
  // const [digitValue, setDigitValue] = useState();

  // const onAddValue = (value) => {
  //   setDigitValue(value);
  // };
  // props.onSaveDigitValue(digitValue);
  //setDigitValue(digitValue);

  // console.log("entered Code ", props.enteredCode);
  return props.enteredCode.map((digitValue, index) => (
    <input
      key={index}
      type="text"
      maxLength="1"
      id={styles.fillers}
      onChange={(event) => {
        props.valueInputChangeHandler(event.target.value, index);
      }}
      value={digitValue}
    />
  ));
};
export default InputLine;
