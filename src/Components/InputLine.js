import styles from "./InputLine.module.css";

const InputLine = (props) => {
  return props.enteredCode.map((digitValue, index) => (
    <input
      key={index}
      type="text"
      maxLength="1"
      id={styles.fillers}
      onChange={(event) => {
        props.valueInputChangeHandler(event.target.value, index);
      }}
      value={digitValue}
    />
  ));
};
export default InputLine;
