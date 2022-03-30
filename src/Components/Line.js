import { useEffect, useState } from "react";
import styles from "./Line.module.css";
import DotLine from "./DotLine.js";
import InputLine from "./InputLine";

var LETTERS = /^[A-Za-z]+$/;
const Line = (props) => {
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

  //check button
  const checkCodeValidity = () => {
    let stepCount = props.activeStep;
    let arr = [];
    for (let i in props.secretCode) {
      const enteredDigit = parseInt(enteredCode[i]);
      const secretDigit = props.secretCode[i].toString();
      //search for entered digit in the secretcode
      var searchInSecretCode = props.secretCode.findIndex(
        (val) => val === enteredDigit
      );

      //search for the digit in the secretcode
      var searching = props.secretCode.findIndex(
        (val) => val === props.secretCode[i]
      );
      if (searchInSecretCode !== -1 && searching === searchInSecretCode) {
        arr.push(true);
      } else if (
        searchInSecretCode !== -1 &&
        searching !== searchInSecretCode
      ) {
        arr.push(false);
      }
    }
    //sort boolean array
    arr.sort((value) => {
      return value ? -1 : 1;
    });
    setCircles(arr);

    if (props.activeStep === 7) {
      alert("You've ran out of trials! press START to start a new game!");
    }
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
        id={styles.checkBtn}
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
