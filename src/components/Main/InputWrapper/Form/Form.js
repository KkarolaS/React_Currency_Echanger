import Input from "./Input";
import { useEffect, useState } from "react";
import {
  fetchApiCurrencies,
  isLoader,
} from "../../../../services/fetchApiCurrencies";
import Options from "./Options";
import "./Form.css";

const Form = ({ handleResult, handleError, handleLoader }) => {
  const [valueSelect, setValueSelect] = useState("eur");
  const [rate, setRate] = useState(0);
  const [number, setNumber] = useState(0);
  const [error, setError] = useState("");

  const getSelectValue = (e) => {
    setValueSelect(e.target.value);
  };

  useEffect(() => {
    setError("");
    if (number > 0) {
      fetchApiCurrencies(valueSelect).then((data) => {
        if (data !== "Error") {
          setRate(data);
        } else {
          setError("Błąd serwera. Spróbuj ponownie później");
        }
      });
    } else {
      setError("Kwota powinna być większa niż 0! Podaj warotość");
      setRate(0);
    }
  }, [valueSelect, number, handleError]);

  const getInput = (e) => {
    setNumber(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (typeof rate === "number") {
      handleResult(rate, number);
      handleError(error);
      handleLoader(isLoader);
    }
  };

  return (
    <form className="form-wrapper" onSubmit={handleSubmit}>
      <Input
        typeName={"number"}
        className={"input-amount"}
        handleChange={getInput}
        stepValue={0.01}
      />
      <div className="currencies-options">
        <select
          className="select-options"
          value={valueSelect}
          onChange={getSelectValue}
        >
          <Options />
        </select>
      </div>
      <Input
        typeName={"submit"}
        className={"exchange-btn"}
        value={"Przelicz"}
      />
    </form>
  );
};

export default Form;
