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
          handleError("Błąd serwera. Spróbuj ponownie później");
        }
      } catch {
        handleError("Błąd serwera. Spróbuj ponownie później");
      } finally {
        handleLoader(false);
      }
    } else if (newNumber) {
      handleError("Podaj kwotę większą niż 0!");
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
        value={"Przelicz"}
      />
    </form>
  );
};

export default Form;

// const [valueSelect, setValueSelect] = useState("eur");
// const [number, setNumber] = useState(0);

// useEffect(() => {
//   handleError("");
//   if (number > 0) {
//     fetchApiCurrencies(valueSelect).then((rate) => {
//       handleLoader(true);
//       if (rate !== "Error") {
//         if (typeof rate === "number") {
//           handleResult(number, rate);
//           handleError("");
//           handleLoader(false);
//         }
//       } else {
//         handleLoader(false);
//         handleResult(number, 0);
//         handleError("Błąd serwera. Spróbuj ponownie później");
//       }
//     });
//   } else if (number) {
//     handleLoader(false);
//     handleError("Podaj kwotę większą niż 0!");
//     handleResult(number, 0);
//   }
//   // eslint-disable-next-line react-hooks/exhaustive-deps
// }, [number, valueSelect]);

// const handleSubmit = async (e) => {
//   e.preventDefault();
//   const newNumber = e.currentTarget.userNumber.value;
//   const newSelectValue = e.currentTarget.selectValue.value;
//   setNumber(newNumber);
//   setValueSelect(newSelectValue);
// };
