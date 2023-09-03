import Loader from "../InputWrapper/Loader";
import DisplayCalculation from "../InputWrapper/DisplayCalculation";
import Form from "./Form/Form";
import { useState } from "react";

const InputWrapper = () => {
  const [result, setResult] = useState(0);

  const getValues = (number, rate) => {
    setResult(number * rate);
  };

  return (
    <div className="input-wrapper">
      <Form handleResult={getValues} />
      <DisplayCalculation exchangeResult={result} />
      <Loader />
    </div>
  );
};

export default InputWrapper;
