import Input from "./Input";
import Select from "./Select/Select";

const Form = () => {
  return (
    <form className="form-wrapper">
      <Input typeName={"number"} className={"input-amount"} />
      <Select />
      <Input
        typeName={"submit"}
        className={"exchange-btn"}
        value={"Przelicz"}
      />
    </form>
  );
};

export default Form;
