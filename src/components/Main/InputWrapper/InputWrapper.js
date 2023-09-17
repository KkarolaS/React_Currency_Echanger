import Loader from "../InputWrapper/Loader";
import DisplayCalculation from "../InputWrapper/DisplayCalculation";
import Form from "./Form/Form";
import { useState } from "react";
import ErrorInfo from "./ErrorInfo";

const InputWrapper = () => {
  const [result, setResult] = useState(0);
  const [error, setError] = useState("");

  const getValues = (number, rate) => {
    setResult(number * rate);
  };

  const getError = (error) => {
    setError(error);
  };

  return (
    <>
      <ErrorInfo text={error} />
      <div className="input-wrapper">
        <Form handleResult={getValues} handleError={getError} />
        <DisplayCalculation exchangeResult={result} />
        <Loader />
      </div>
    </>
  );
};

export default InputWrapper;
