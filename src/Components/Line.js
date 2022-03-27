import { useEffect, useState } from "react";
import styles from "./Line.module.css";
import DotLine from "./DotLine.js";
import InputLine from "./InputLine";

var LETTERS = /^[A-Za-z]+$/;
const Line = (props) => {
  const secretCode = props.secretCode;
  let activeStep = props.activeStep;
  const indexOfLine = props.indexOfLine;
  let trialIsdone = true; //disable button
  const [enteredCode, setEnteredCode] = useState(["", "", "", ""]);
  const [circles, setCircles] = useState([]);

  const valueInputChangeHandler = (digitValue, index) => {
    if (LETTERS.test(digitValue)) {
      console.log(LETTERS.test(digitValue));
      return;
    }
    const clonedValues = [...enteredCode];
    clonedValues[index] = digitValue;
    setEnteredCode(clonedValues);
  };
  useEffect(() => {
    console.log("array of circles ", circles);
  }, [circles]);

  console.log("secret array: " + secretCode);
  console.log("enetered array: " + enteredCode);

  const checkCodeValidity = () => {
    let arr = [];
    for (let i in secretCode) {
      const secretDigit = parseInt(enteredCode[i]);
      const enteredDigit = secretCode[i].toString();
      var searchInSecretCode = secretCode.findIndex(
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

        console.log(
          "the same spot: " + searchInEnteredCode + " " + searchInSecretCode
        );
      } else if (
        searchInSecretCode !== -1 &&
        searchInEnteredCode !== searchInSecretCode
      ) {
        arr.push(false);
        console.log(
          " secretCode contains " + secretDigit + " at:" + searchInSecretCode
        );
      } else {
        console.log(" secretCode doesn't contain " + secretDigit + " at:" + i);
      }
    }

    arr.sort((value) => {
      return value ? -1 : 1;
    });
    console.log("array: ", arr);
    setCircles(arr);
    // activeStep++;
    if (activeStep === indexOfLine) {
      trialIsdone = false;
    }
    let trialIsdone = true;
  };
  return (
    <section>
      <div className={styles.display}>
        <InputLine
          enteredCode={enteredCode}
          valueInputChangeHandler={valueInputChangeHandler}
        />
      </div>
      <button onClick={checkCodeValidity} disabled={trialIsdone}>
        Check
      </button>

      <div className={styles.display}>
        <DotLine circles={circles} />
      </div>
    </section>
  );
};
export default Line;
