import classes from "./DotLine.module.css";
import React from "react";

const DotLine = (props) =>
  props.circles.map((value, index) => (
    <span key={index} className={classes[value ? "right" : "contains"]} />
  ));

export default DotLine;
