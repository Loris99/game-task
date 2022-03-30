import styles from "./InputLine.module.css";
import PropTypes from "prop-types";
const InputLine = (props) =>
  props.enteredCode.map((digitValue, index) => (
    <input
      key={index}
      type="text"
      maxLength="1"
      className={styles.fillers}
      onChange={(event) => {
        props.valueInputChangeHandler(event.target.value, index);
      }}
      value={digitValue}
      disabled={props.disabled}
    />
  ));

export default InputLine;
