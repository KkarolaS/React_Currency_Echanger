import classes from "./Title.module.css";

const Title = () => {
  return (
    <div className={classes.headerTextWrapper}>
      <h1 className={classes.headerTitle}>Currency Exchange App</h1>
      <p className={classes.headerSubtitle}>check currencies with us</p>
    </div>
  );
};

export default Title;
