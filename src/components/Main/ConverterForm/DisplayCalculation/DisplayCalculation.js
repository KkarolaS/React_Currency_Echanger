import classes from "./DisplayCalculation.module.css";

const DisplayCalculation = ({ exchangeResult = 0 }) => {
  return (
    <>
      <p
        id="currency-value"
        data-test="currency-value"
        className={classes.textAmount}
      >
        {exchangeResult} PLN
      </p>
    </>
  );
};

export default DisplayCalculation;
