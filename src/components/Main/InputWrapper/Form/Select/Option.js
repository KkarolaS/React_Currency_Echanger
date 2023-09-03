const Option = ({ valueName, name }) => {
  return (
    <option className="option" value={valueName}>
      {name}
    </option>
  );
};

export default Option;
