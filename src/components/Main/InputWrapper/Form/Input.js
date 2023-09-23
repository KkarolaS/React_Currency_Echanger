const Input = ({ typeName, className, value, handleChange, stepValue }) => {
  return (
    <input
      type={typeName}
      className={className}
      value={value}
      onChange={handleChange}
      step={stepValue}
    />
  );
};

export default Input;
