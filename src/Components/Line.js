import { useState } from "react";
import "./Line.css";
import Dot from "./Dot.js";
import Input from "./Input/Input.js"
const Line = (props) => {


  const checkCodeValidity = () => {
  }
  console.log(props)


  return (
    < section className="" >

      <Input secretCode={props.secretCode} />
      <Input />
      <Input />
      <Input />
      <button onClick={checkCodeValidity}> Check </button>
      <Dot />
      <Dot />
      <Dot />
      <Dot />
    </section >
  );
};
export default Line;
