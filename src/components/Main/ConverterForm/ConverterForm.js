import Loader from "./Loader/Loader";
import DisplayCalculation from "./DisplayCalculation/DisplayCalculation";
import Form from "./Form/Form";
import { useState } from "react";
import ErrorInfo from "./ErrorInfo/ErrorInfo";
import classes from "./ConverterForm.module.css";

const ConverterForm = () => {
  const [result, setResult] = useState(0);
  const [error, setError] = useState("Wprowadź kwotę do przewalutowania");
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const getValues = (number, rate) => {
    if (rate !== 0) {
      setResult((number * rate).toFixed(2));
    } else {
      setResult(0);
    }
  };

  const getError = (error) => {
    setError(error);
    if (error !== "Wprowadź kwotę do przewalutowania") {
      setIsError(true);
    } else {
      setIsError(false);
    }
  };

  const getLoadingStatus = (status) => {
    setIsLoading(status);
  };
  return (
    <>
      <ErrorInfo text={error} isError={isError} />
      <div className={classes.inputWrapper}>
        <Form
          handleResult={getValues}
          handleError={getError}
          handleLoader={getLoadingStatus}
        />
        <DisplayCalculation exchangeResult={result} />
        {isLoading ? <Loader /> : null}
      </div>
    </>
  );
};

export default ConverterForm;
