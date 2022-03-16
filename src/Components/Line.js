import { useState } from "react";
import "./Line.css";
import Dot from "./Dot.js";
const Line = (props) => {
  const [enteredValue, setEnteredValue] = useState("");

  return (
    <section className="">
      <input type="number" id="fillers" value={enteredValue}></input>
      <input type="number" id="fillers"></input>
      <input type="number" id="fillers"></input>
      <input type="number" id="fillers"></input>
      <button> Check</button>
      <Dot />
      <Dot />
      <Dot />
      <Dot />
    </section>
  );
};
export default Line;
