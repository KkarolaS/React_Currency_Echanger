import { defaultOptions } from "../../../../data/defaultOptions";

const Options = () => {
  const options = defaultOptions;
  return options.map((option) => (
    <option key={option.value} value={option.value}>
      {option.text}
    </option>
  ));
};

export default Options;
