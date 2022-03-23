import { useRef, useState } from "react";
import styles from "./Line.module.css";
import Dot from "./Dot.js";
import classes from "./Dot.module.css";

// import "./Dot.css";
const SIZE = 4;
var LETTERS = /^[A-Za-z]+$/;
const Line = (props) => {
  console.log(props); //secret code
  const secretCode = props.secretCode;
  const [enteredCode, setEnteredCode] = useState(["", "", "", ""]);
  const [circles, setCircles] = useState([]);
  // const [containsCounter, setContainsCounter] = useState(0);
  // const [sameSpotCounter, setSameSpotCounter] = useState();

  const valueInputChangeHandler = (digitValue, index) => {
    if (LETTERS.test(digitValue)) {
      console.log(LETTERS.test(digitValue));
      return;
    }
    const clonedValues = [...enteredCode];
    clonedValues[index] = digitValue;
    setEnteredCode(clonedValues);
  };

  console.log("secret array: " + secretCode);
  console.log("enetered array: " + enteredCode);
  let trialIsdone = true;
  const checkCodeValidity = () => {
    // let i = 0;
    // let count = 0;
    // let sameSCounter = 0;

    for (let i = 0; i < secretCode.length; i++) {
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
        circles.fill("true");
        console.log(
          "the same spot: " + searchInEnteredCode + " " + searchInSecretCode
        );
        // console.log("how many contains: " + containsCounter);
      } else if (
        searchInSecretCode !== -1 &&
        searchInEnteredCode !== searchInSecretCode
      ) {
        circles.fill(false);
        console.log(
          " secretCode contains " + secretDigit + " at:" + searchInSecretCode
        );
      } else {
        console.log(" secretCode doesn't contain " + secretDigit + " at:" + i);
      }
    }
    console.log("array of circle: ", circles);
    // console.log("ContainsCounter", count);
    // setContainsCounter(count);
    trialIsdone = true;
    // return (
    //   <div className={styles.display}>
    //     {[...Array(containsCounter)].map((index) => {
    //       <Dot className={classes.contains} />;
    //     })}

    //     {[...Array(sameSpotCounter)].map((index) => {
    //       <Dot className={classes.right} />;
    //     })}
    //   </div>
    // );
  };
  // console.log("array ", [...Array(containsCounter)]);

  // console.log("ContainsCounterState", containsCounter);
  return (
    <section>
      <div className={styles.display}>
        {enteredCode.map((digitValue, index) => (
          <input
            key={index}
            type="text"
            maxLength="1"
            id={styles.fillers}
            onChange={(event) => {
              valueInputChangeHandler(event.target.value, index);
            }}
            value={digitValue}
          />
        ))}
      </div>
      <button onClick={checkCodeValidity} disabled={!trialIsdone}>
        {" "}
        Check{" "}
      </button>
      {/* <div>{circles}</div> */}
      <div className={styles.display}>
        {/* {[...Array(containsCounter)].map((index) => {
          <Dot className={classes.contains} />;
        })}

        {[...Array(sameSpotCounter)].map((index) => {
          <Dot className={classes.right} />;
        })} */}
      </div>
    </section>
  );
};
export default Line;
