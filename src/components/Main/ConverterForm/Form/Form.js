import Input from "./Input";
import { fetchApiCurrencies } from "../../../../services/fetchApiCurrencies";
import Options from "./Options";
import classes from "./Form.module.css";

const Form = ({ handleResult, handleError, handleLoader }) => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newNumber = e.currentTarget.userNumber.value;
    const newSelectValue = e.currentTarget.selectValue.value;
    if (newNumber > 0) {
      try {
        const rate = await fetchApiCurrencies(newSelectValue);
        handleLoader(true);
        if (rate) {
          handleResult(newNumber, rate);
          handleError("");
        } else {
          handleResult(newNumber, 0);
          handleError("Server error. Please try again later");
        }
      } catch {
        handleError("Server error. Please try again later");
      } finally {
        handleLoader(false);
      }
    } else if (newNumber) {
      handleError("Enter an amount greater than 0!");
      handleResult(newNumber, 0);
    } else {
      handleError("Enter the amount for currency exchange");
      handleResult(newNumber, 0);
    }
  };

  return (
    <form className={classes.formWrapper} onSubmit={handleSubmit}>
      <Input
        name={"userNumber"}
        typeName={"number"}
        className={classes.inputAmount}
        stepValue={0.01}
      />
      <div className="currencies-options">
        <select name="selectValue" className={classes.selectOptions}>
          <Options />
        </select>
      </div>
      <Input
        name={"click"}
        typeName={"submit"}
        className={classes.exchangeBtn}
        value={"Exchange"}
      />
    </form>
  );
};

export default Form;
