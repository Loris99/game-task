import { useState } from "react";
import styles from "./Line.module.css";
import Dot from "./Dot.js";
// import "./Dot.css";
const SIZE = 4;
var LETTERS = /^[A-Za-z]+$/;
const Line = (props) => {
  console.log(props); //secret code
  const secretCode = props.secretCode;
  const [enteredCode, setEnteredCode] = useState(["", "", "", ""]);
  const [dots, setDots] = useState();
  const valueInputChangeHandler = (digitValue, index) => {
    if (LETTERS.test(digitValue)) {
      console.log(LETTERS.test(digitValue));
      return;
    }
    const clonedValues = [...enteredCode];
    clonedValues[index] = digitValue;
    setEnteredCode(clonedValues);
  };
  const [isContains, setIsContains] = useState(false);
  console.log("secret array: " + secretCode);
  console.log("enetered array: " + enteredCode);
  // let containso = false;
  // const [dotClassName, setDotClassName] = useState({styles.Dot);

  const checkCodeValidity = () => {
    // let i = 0;
    const secretString = JSON.stringify(secretCode);
    for (let i = 0; i < secretCode.length; i++) {
      const digit = secretCode[i].toString();
      const digitq = enteredCode[i].toString();
      // const enteredDigit = enteredCode.index;
      // console.log("yyy " + enteredCode.index.toString());
      if (enteredCode.findIndex((val) => val === digit) !== -1) {
        console.log(
          " entered contains this vlaue " +
            digit +
            " :" +
            enteredCode.findIndex((val) => val === digit)
        );
        setIsContains(true);
        // console.log(
        //   " entered contains this vlaue in reverse " +
        //     digitq +
        //     " :" +
        //     secretString.findIndex((val) => val === digitq)
        // );

        // if (
        //   enteredCode.findIndex((val) => val === digit) ===
        //   secretString.findIndex((val) => val === digitq)
        // ) {
        //   console.log(
        //     "the index: " + enteredCode.findIndex((val) => val === digit)
        //   );
        // }
        // setDotClassName({styles['contains']});
      } else {
        console.log("try again ");
      }
    }
  };

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
      <button onClick={checkCodeValidity}> Check </button>
      <div className={styles.display}>
        {dots.map((counts) => {
          <Dot className={` ${!isContains && styles.contains}`} />;
        })}
      </div>
    </section>
  );
};
export default Line;
