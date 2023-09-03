import Input from "./Input";
import { useEffect, useState } from "react";
import { fetchApiCurrencies } from "../../../../services/fetchApiCurrencies";
import Option from "./Options";

const Form = ({ handleResult }) => {
  const [valueSelect, setValueSelect] = useState("eur");
  const [rate, setRate] = useState(0);
  const [number, setNumber] = useState(0);

  const getSelectValue = (e) => {
    setValueSelect(e.target.value);
  };

  useEffect(() => {
    fetchApiCurrencies(valueSelect).then((data) => {
      setRate(data);
      console.log(data);
    });
  }, [valueSelect]);

  const getInput = (e) => {
    setNumber(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleResult(rate, number);
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
