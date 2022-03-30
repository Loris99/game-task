import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Line from "./Line";
import styles from "./Game.module.css";
const SIZE = 4;

const Game = (props) => {
  const [codeValue, setCodeValue] = useState([]);
  const [activeStep, setActiveStep] = useState(-1);
  const [clear, setClear] = useState(false);
  const [isAWin, setIsAWin] = useState();
  const [message, setMessage] = useState(" ");

  const updateActiveStep = (currentActiveStep) => {
    setActiveStep(currentActiveStep);
  };
  const updateIsAWin = (isAWin) => {
    console.log("updated is win ");
    setIsAWin(isAWin);
  };
  console.log("win status ", isAWin);

  useEffect(() => {
    if (isAWin === true) {
      setMessage(result.win);

      console.log("win message ", result.win);
    } else if (isAWin === false) {
      setMessage(result.lose);
      console.log("win message ", result.lose);
    }
    // else {
    //   setMessage(result.nothing);
    //   console.log("win message ", result.win);
    // }
  }, [isAWin]);

  const result = {
    win: "Congratulation! You've WON",
    lose: "oops, Game Over! try again",
    nothing: " ",
  };

  const startGameHandler = () => {
    const randomNumber = Math.floor(Math.random() * 10);
    // const anotherRandom = Math.floor(Math.random() * 10);
    // const tempCodeValue = new Array(4);
    // tempCodeValue.forEach((element) => {
    //   if (tempCodeValue.includes(element)) {
    //     element = Math.floor(Math.random() * 10);
    //   }
    // });
    const tempCodeValue = Array(SIZE)
      .fill(0)
      .map(
        (num, index) =>
          // if (tempCodeValue.includes(num)) {
          (num = randomNumber)
      );
    // }

    setCodeValue(tempCodeValue);
    // setActiveStep(0);
    updateActiveStep(0);
    setClear(!clear);
  };

  // const updateDisable = () => {
  //   if (activeStep !== indexOfLine) {
  //   }
  //   setDisabled();
  // };
  console.log("secret code ", codeValue);

  return (
    <div className={styles.container}>
      <div className={styles.topBar}>
        <h1>Find The Secret Code</h1>
      </div>
      <div className={styles.linesContainer}>
        {Array(8)
          .fill(0)
          .map((value, index) => (
            <Line
              key={index}
              className={styles.lineDisplay}
              secretCode={codeValue}
              indexOfLine={index}
              activeStep={activeStep}
              clear={clear}
              isAWin={isAWin}
              updateIsAWin={updateIsAWin}
              updateActiveStep={updateActiveStep}
            />
          ))}
      </div>
      <div className={styles.sideBar}>
        <button className={styles.startButton} onClick={startGameHandler}>
          Start
        </button>
        <div>
          <h1>{message}</h1>
        </div>
      </div>
    </div>
  );
};
export default Game;
