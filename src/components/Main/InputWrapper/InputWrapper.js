import Loader from "../InputWrapper/Loader";
import DisplayCalculation from "../InputWrapper/DisplayCalculation";
import Form from "./Form/Form";

const InputWrapper = () => {
  return (
    <div className="input-wrapper">
      <Form />
      <DisplayCalculation />
      <Loader />
    </div>
  );
};

export default InputWrapper;
