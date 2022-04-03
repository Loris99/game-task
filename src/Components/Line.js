import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import styles from "./Line.module.css";
import DotLine from "./DotLine.js";
import InputLine from "./InputLine";

const DIGITS = /[0-9]/;
const Line = (props) => {
  const [enteredCode, setEnteredCode] = useState(["", "", "", ""]);
  // const [enteredCode, setEnteredCode] = useState([]);
  const [circles, setCircles] = useState([]);
  const [disabled, setDisabled] = useState();
  //to restart the game and clear inputs
  useEffect(() => {
    setEnteredCode(["", "", "", ""]);
    // setEnteredCode([]);
    setCircles([]);
  }, [props.clear]);

  //check if input is number & add into the array
  const valueInputChangeHandler = (digitValue, index) => {
    if (DIGITS.test(digitValue) === false) {
      console.log(DIGITS.test(digitValue));
      return;
    }
    const tempEnteredCode = [...enteredCode];
    // const tempEntered = Array(4).map((num, index) => (num = digitValue));

    tempEnteredCode[index] = digitValue;
    setEnteredCode(tempEnteredCode);
  };

  //check button
  const checkCodeValidity = () => {
    let stepCount = props.activeStep;
    let arr = [];

    for (let i in props.secretCode) {
      const enteredDigit = parseInt(enteredCode[i]);
      // const secretDigit = props.secretCode[i].toString();
      //search for entered digit in the secretcode
      let searchInSecretCode = props.secretCode.findIndex(
        (val) => val === enteredDigit
      );

      //search for the digit in the secretcode
      let searching = props.secretCode.findIndex(
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
    // if (arr.findIndex(false)) {
    if (arr.every((val) => val === false)) {
      if (props.activeStep === 7) {
        props.updateIsAWin(false);
      }
      // return;
    } else {
      props.updateIsAWin(true);
      setDisabled(true);
    }
    stepCount = stepCount + 1;
    props.updateActiveStep(stepCount);
  };
  // useEffect(() => {
  //   if (props.activeStep !== props.indexOfLine) {
  //     setDisabled(true);
  //     console.log("active step ", props.activeStep);
  //     console.log("index of line ", props.indexOfLine);
  //   }
  // }, [props.activeStep, props.indexOfLine]);
  // setDisabled(props.activeStep !== props.indexOfLine);
  return (
    <section className={styles.boardAlignment}>
      <div className={styles.display}>
        <InputLine
          disabled={props.activeStep !== props.indexOfLine}
          enteredCode={enteredCode}
          valueInputChangeHandler={valueInputChangeHandler}
        />
      </div>

      <button
        className={styles.checkBtn}
        onClick={checkCodeValidity}
        disabled={props.activeStep !== props.indexOfLine}
      >
        Check
      </button>

      <div className={styles.dotAlignment}>
        <DotLine circles={circles} />
      </div>
    </section>
  );
};
export default Line;
