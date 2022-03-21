import styles from "./Dot.module.css";

const Dot = (props) => {
  return <span className={`${styles.className} ${props.className}`}></span>;
};
export default Dot;
