import classes from "./ErrorInfo.module.css";

const ErrorInfo = ({ text, isError }) => {
  return (
    <section className={classes.errorWrapper}>
      <p className={isError ? classes.errorInfo : classes.welcomeInfo}>
        {text}
      </p>
    </section>
  );
};

export default ErrorInfo;
