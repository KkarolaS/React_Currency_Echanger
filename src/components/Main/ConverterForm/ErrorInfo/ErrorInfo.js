import classes from "./ErrorInfo.module.css";

const ErrorInfo = ({ text }) => {
  return (
    <section className={classes.errorWrapper}>
      <p className={classes.errorInfo}>{text}</p>
    </section>
  );
};

export default ErrorInfo;
