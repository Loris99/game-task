import { useEffect, useState } from "react";
import styles from "./Line.module.css";
import DotLine from "./DotLine.js";
import InputLine from "./InputLine";

var LETTERS = /^[A-Za-z]+$/;
const Line = (props) => {
  // const indexOfLine = props.indexOfLine;
  // const [checkButton, setCheckButton] = useState(true);

  const [enteredCode, setEnteredCode] = useState(["", "", "", ""]);
  const [circles, setCircles] = useState([]);

  //to restart the game and clear inputs
  useEffect(() => {
    setEnteredCode(["", "", "", ""]);
    setCircles([]);
  }, [props.clear]);

  //check if input is number & add into the array
  const valueInputChangeHandler = (digitValue, index) => {
    if (LETTERS.test(digitValue)) {
      console.log(LETTERS.test(digitValue));
      return;
    }
    const clonedValues = [...enteredCode];
    clonedValues[index] = digitValue;
    setEnteredCode(clonedValues);
  };

  //print array of circles (boolean)
  useEffect(() => {
    console.log("array of circles ", circles);
  }, [circles]);

  //check button
  const checkCodeValidity = () => {
    let arr = [];
    let stepCount = 0;
    for (let i in props.secretCode) {
      const secretDigit = parseInt(enteredCode[i]);
      const enteredDigit = props.secretCode[i].toString();
      var searchInSecretCode = props.secretCode.findIndex(
        (val) => val === secretDigit
      );
      var searchInEnteredCode = enteredCode.findIndex(
        (val) => val === enteredDigit
      );
      if (
        searchInSecretCode !== -1 &&
        searchInEnteredCode === searchInSecretCode
      ) {
        arr.push(true);
      } else if (
        searchInSecretCode !== -1 &&
        searchInEnteredCode !== searchInSecretCode
      ) {
        arr.push(false);
      } else {
        console.log(" secretCode doesn't contain the input value");
      }
    }
    //sort boolean array
    arr.sort((value) => {
      return value ? -1 : 1;
    });
    setCircles(arr);
    console.log("array: ", arr);
    stepCount = stepCount + 1;
    props.updateActiveStep(stepCount);
  };

  return (
    <section>
      <div className={styles.display}>
        <InputLine
          enteredCode={enteredCode}
          valueInputChangeHandler={valueInputChangeHandler}
        />
      </div>
      <button
        onClick={checkCodeValidity}
        disabled={props.activeStep !== props.indexOfLine}
      >
        Check
      </button>

      <div className={styles.display}>
        <DotLine circles={circles} />
      </div>
    </section>
  );
};
export default Line;
