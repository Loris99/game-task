import React, { useEffect, useState } from "react";
import Line from "./Line";
import styles from "./Game.module.css";
const SIZE = 4;

const Game = (props) => {
  const [codeValue, setCodeValue] = useState([]);
  const [activeStep, setActiveStep] = useState();

  const [clear, setClear] = useState(false);

  const updateActiveStep = (currentActiveStep) => {
    setActiveStep(currentActiveStep);
    console.log("updated active Step ", activeStep);
  };

  // useEffect(() => {
  //   // setActiveStep(activeStep);
  //   console.log("active step: ", activeStep);
  // }, [activeStep]);

  const startGameHandler = (codeValue) => {
    console.log("clicked!");

    setCodeValue(
      (codeValue = Array(SIZE)
        .fill(0)
        .map((num, index) => (num = Math.floor(Math.random() * 10))))
    );
    setActiveStep(0);
    //updateActiveStep(0)
    console.log("secret code ", codeValue);

    setClear(!clear);
  };

  return (
    <div className={styles.container}>
      <div className={styles.top_bar}>
        <h1>Find The Secret Code</h1>
      </div>
      <div className={styles.linesContainer}>
        {Array(8)
          .fill(0)
          .map((value, index) => (
            <Line
              key={index}
              className={styles.line_display}
              secretCode={codeValue}
              indexOfLine={index}
              activeStep={activeStep}
              //setActiveStep ={() => setActiveStep}
              clear={clear}
              updateActiveStep={updateActiveStep}
            />
          ))}
      </div>
      <div className={styles.side_bar}>
        <button className={styles.startButton}
          onClick={() => {
            startGameHandler(codeValue);
          }}
        >
          Start
        </button>
      </div>
    </div>
  );
};
export default Game;
