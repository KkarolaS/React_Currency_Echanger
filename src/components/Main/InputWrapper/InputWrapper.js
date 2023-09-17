import Loader from "../InputWrapper/Loader";
import DisplayCalculation from "../InputWrapper/DisplayCalculation";
import Form from "./Form/Form";
import { useState } from "react";
import ErrorInfo from "./ErrorInfo";
import "./InputWrapper.css";

const InputWrapper = () => {
  const [result, setResult] = useState(0);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const getValues = (number, rate) => {
    setResult(number * rate);
  };

  const getError = (error) => {
    setError(error);
  };

  const getLoadingStatus = (status) => {
    setIsLoading(status);
  };
  return (
    <>
      <ErrorInfo text={error} />
      <div className="input-wrapper">
        <Form
          handleResult={getValues}
          handleError={getError}
          handleLoader={getLoadingStatus}
        />
        <DisplayCalculation exchangeResult={result} />
        {isLoading ? <Loader /> : <></>}
      </div>
    </>
  );
};

export default InputWrapper;
