import "./DisplayCalculation.css";

const DisplayCalculation = ({ exchangeResult = 0 }) => {
  return (
    <>
      <p className="text">to</p>
      <p id="currency-value" data-test="currency-value" className="text-amount">
        {exchangeResult} PLN
      </p>
    </>
  );
};

export default DisplayCalculation;
