import Input from "./Input";
import { useEffect, useState } from "react";
import { fetchApiCurrencies } from "../../../../services/fetchApiCurrencies";
import Option from "./Options";

const Form = ({ handleResult, handleError }) => {
  const [valueSelect, setValueSelect] = useState("choose");
  const [rate, setRate] = useState(0);
  const [number, setNumber] = useState(0);
  const [error, setError] = useState("");

  const getSelectValue = (e) => {
    setValueSelect(e.target.value);
  };

  useEffect(() => {
    if (valueSelect !== "choose") {
      setError("");
      if (number > 0) {
        fetchApiCurrencies(valueSelect).then((data) => {
          setRate(data);
          console.log(data);
        });
      } else {
        setError("Kwota powinna być większa niż 0!");
      }
    } else {
      setError("Podaj wartość i wybierz walutę");
    }
  }, [valueSelect, number]);

  const getInput = (e) => {
    if (e.target.value) {
      setNumber(e.target.value);
      console.log(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (typeof rate === "number") {
      handleResult(rate, number);
      handleError(error);
    }
  };

  return (
    <form className="form-wrapper" onSubmit={handleSubmit}>
      <Input
        typeName={"number"}
        className={"input-amount"}
        handleChange={getInput}
      />
      <div className="currencies-options">
        <select
          className="select-options"
          value={valueSelect}
          onChange={getSelectValue}
        >
          <Option />
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
