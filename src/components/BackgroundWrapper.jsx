import styles from "../css/Background.module.css";

const BackgroundWrapper = (props) => {
  return <div className={styles.gradient}>{props.children}</div>;
};

export default BackgroundWrapper;
