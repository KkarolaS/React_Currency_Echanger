import { defaultOptions } from "../../../../data/defaultOptions";

const Option = () => {
  const options = defaultOptions;
  return options.map((option) => (
    <option className="option" key={option.value} value={option.value}>
      {option.text}
    </option>
  ));
};

export default Option;
